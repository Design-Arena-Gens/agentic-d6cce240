import { caseStudies } from "@/data/site";

export function CaseStudies() {
  return (
    <section id="work" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">Case Studies</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Proof that well-researched copy drives revenue
            </h2>
          </div>
          <p className="text-black/70 md:max-w-md md:text-right">
            Tailored strategies for nuanced buying journeys. Here’s a peek at recent results from go-to-market teams that invested in
            better messaging.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.brand}
              className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-black/50">
                <span>{cs.category}</span>
                <span>{cs.metric}</span>
              </div>
              <h3 className="text-xl font-semibold text-black">{cs.brand}</h3>
              <p className="text-sm leading-6 text-black/70">{cs.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
