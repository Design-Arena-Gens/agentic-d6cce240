import { faqs } from "@/data/site";

export function Faqs() {
  return (
    <section id="faqs" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">FAQs</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Details teams care about before we partner
            </h2>
          </div>
          <p className="text-black/70 md:max-w-md md:text-right">
            Transparent pricing, collaborative process, and thoughtful revisions—because your time is as valuable as your targets.
          </p>
        </div>
        <dl className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-black/10 bg-zinc-50 p-6"
            >
              <dt className="text-lg font-semibold text-black">{faq.question}</dt>
              <dd className="mt-3 text-sm leading-6 text-black/70">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
