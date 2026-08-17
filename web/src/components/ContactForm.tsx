"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";

const initial: ContactState = { ok: false, message: "" };

function Field({
  label, name, type = "text", required = false, error, ...rest
}: {
  label: string; name: string; type?: string; required?: boolean; error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = `f-${name}`;
  return (
    <p className="flex flex-col gap-1.5 text-left">
      <label htmlFor={id} className="text-xs font-extrabold uppercase tracking-widest">
        {label}{required && <span className="text-igj_pink"> *</span>}
      </label>
      <input
        id={id} name={name} type={type} required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`w-full rounded border bg-igj_white px-3.5 py-2.5 text-igj_black
                    dark:bg-igj_dark_bg dark:text-igj_dark_text
                    ${error ? "border-igj_pink" : "border-igj_bordergray dark:border-igj_dark_border"}`}
        {...rest}
      />
      {error && <span id={`${id}-err`} className="text-xs font-semibold text-igj_pink">{error}</span>}
    </p>
  );
}

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const err = state.fieldErrors ?? {};

  return (
    <form action={action} className="mx-auto mt-8 max-w-2xl text-left">
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off"
             aria-hidden className="absolute h-0 w-0 opacity-0" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" error={err.name} />
        <Field label="Email" name="email" type="email" required autoComplete="email" error={err.email} />
        <Field label="Studio" name="studio" autoComplete="organization" error={err.studio} />
        <Field label="Link to the game" name="gameUrl" type="url"
               placeholder="https://store.steampowered.com/…" error={err.gameUrl} />
      </div>

      <p className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="f-message" className="text-xs font-extrabold uppercase tracking-widest">
          What are you making?<span className="text-igj_pink"> *</span>
        </label>
        <textarea
          id="f-message" name="message" required rows={5}
          aria-invalid={err.message ? true : undefined}
          className={`w-full rounded border bg-igj_white px-3.5 py-2.5 text-igj_black
                      dark:bg-igj_dark_bg dark:text-igj_dark_text
                      ${err.message ? "border-igj_pink" : "border-igj_bordergray dark:border-igj_dark_border"}`}
        />
        {err.message && <span className="text-xs font-semibold text-igj_pink">{err.message}</span>}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={pending} className="btn-pink disabled:opacity-60">
          {pending ? "Sending…" : "Send it over"}
        </button>
        {state.message && (
          <p role="status"
             className={`text-sm font-bold ${state.ok ? "text-igj_blue dark:text-igj_dark_text" : "text-igj_pink"}`}>
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
