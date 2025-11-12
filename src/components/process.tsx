import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Process
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Conversion copy delivered in four confident steps
            </h2>
          </div>
          <p className="text-white/70 md:max-w-md md:text-right">
            Transparency at every milestone: expect Loom updates, collaborative feedback rounds, and clear next steps from kickoff to
            launch.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.title} className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{step.duration}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-6 text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
