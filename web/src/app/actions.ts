"use server";

import { z } from "zod";
import { sql, isDatabaseConfigured } from "@/lib/db";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Tell me your name.").max(120),
  email: z.string().trim().email("That address won't reach you — check it."),
  studio: z.string().trim().max(160).optional().or(z.literal("")),
  gameUrl: z.string().trim().url("Needs to be a full link, starting https://")
    .max(500).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A sentence or two about the game, please.").max(5000),
  // honeypot — real people never fill this in
  website: z.string().max(0).optional(),
});

export type ContactState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    studio: formData.get("studio"),
    gameUrl: formData.get("gameUrl"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, message: "Have another look at the highlighted fields.", fieldErrors };
  }

  // Bot filled the honeypot. Look successful, store nothing.
  if (parsed.data.website) return { ok: true, message: "Thanks — I'll be in touch." };

  if (!isDatabaseConfigured()) {
    return {
      ok: false,
      message: "The form isn't connected to a database yet. Set DATABASE_URL and try again.",
    };
  }

  const { name, email, studio, gameUrl, message } = parsed.data;

  try {
    const db = sql();
    await db`
      insert into contact_submissions (name, email, studio, game_url, message)
      values (${name}, ${email}, ${studio || null}, ${gameUrl || null}, ${message})
    `;
  } catch (err: unknown) {
    // The dedupe index rejects a repeat from the same address inside a minute.
    if (typeof err === "object" && err && "code" in err && (err as { code: string }).code === "23505") {
      return { ok: true, message: "Got it already — I'll come back to you." };
    }
    console.error("contact insert failed", err);
    return { ok: false, message: "Something broke on my end. Try again, or email me directly." };
  }

  return { ok: true, message: "Sent. I read everything that comes in — expect a reply." };
}
