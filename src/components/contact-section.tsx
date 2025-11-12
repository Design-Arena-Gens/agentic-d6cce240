import Link from "next/link";
import { contact } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-8 py-16 sm:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Let’s collaborate</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to turn more readers into revenue?
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Share your launch goals, timelines, and what success looks like. I’ll reply within one business day with next steps or a
              tailored proposal.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-sm text-white/80">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Email</div>
              <Link href={`mailto:${contact.email}`} className="text-base font-semibold text-white hover:opacity-80">
                {contact.email}
              </Link>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Book a call</div>
              <Link href={contact.calendly} className="text-base font-semibold text-white hover:opacity-80">
                30-minute discovery
              </Link>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Availability</div>
              <p className="text-base font-semibold text-white">{contact.location}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">Response time</div>
              <p className="text-base font-semibold text-white">{contact.responseTime}</p>
            </div>
          </div>
        </div>
        <form className="mt-12 grid gap-6" method="post" action={`mailto:${contact.email}`}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              Name
              <input
                name="name"
                required
                placeholder="Jane Doe"
                className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/60"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              Company
              <input
                name="company"
                placeholder="Acme Co."
                className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/60"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm">
            Project goals
            <textarea
              name="goals"
              required
              rows={4}
              placeholder="Launch copy refresh, lifecycle sequence, etc."
              className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/60"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            Timeline
            <input
              name="timeline"
              placeholder="Looking to launch in May"
              className="rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/60"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80 md:w-max"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
