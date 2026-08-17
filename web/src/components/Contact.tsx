import ContactForm from "./ContactForm";
import { SectionHeading } from "./Sections";

export default function Contact() {
  return (
    <section id="contact" className="border-y border-igj_gray py-16 dark:border-igj_dark_border sm:py-24">
      <div className="container">
        <SectionHeading eyebrow="The signal fire" title="Send me your game" />
        <p className="mx-auto mt-4 max-w-xl text-center leading-7 text-igj_darkgray dark:text-igj_dark_text_muted">
          Tell me what you&rsquo;re building and where I can play it. I read everything that comes
          in, and I&rsquo;ll tell you straight whether I think I can move it.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
