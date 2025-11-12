import Link from "next/link";
import { contact } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-28 md:pt-32">
        <div className="flex flex-col gap-6 md:max-w-3xl">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            Conversion Copywriter
          </span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Words that turn intent into revenue for SaaS & modern DTC brands
          </h1>
          <p className="text-lg text-white/70 md:text-xl">
            Launch campaigns, nurture sequences, and product stories built from voice of customer research—so every touchpoint sounds
            sharp, strategic, and unmistakably you.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm font-medium sm:flex-row">
          <Link
            href={contact.calendly}
            className="flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            Book a discovery call
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            className="flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-black hover:bg-white"
          >
            Request capabilities deck
          </Link>
        </div>
        <dl className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-tight text-white/50">Projects launched</dt>
            <dd className="text-2xl font-semibold md:text-3xl">120+</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-tight text-white/50">Average uplift</dt>
            <dd className="text-2xl font-semibold md:text-3xl">27% conversion</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-tight text-white/50">Client roster</dt>
            <dd className="text-2xl font-semibold md:text-3xl">YC, Series B, DTC</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
