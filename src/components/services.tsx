import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 text-black">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
              Offerings
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Strategic copy that sells without sounding salesy
            </h2>
          </div>
          <p className="md:max-w-md md:text-right text-black/70">
            Every engagement blends conversion research, messaging strategy, and crisp copy execution so your team can launch with
            confidence and measurable results.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-black/10 bg-black/5 p-8 shadow-sm transition hover:-translate-y-1 hover:border-black/20 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-black">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-black/70">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-black/80">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
