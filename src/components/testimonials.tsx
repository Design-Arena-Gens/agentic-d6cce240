import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Trusted by teams who ship ambitious growth
            </h2>
          </div>
          <p className="text-white/70 md:max-w-md md:text-right">
            CMOs, Growth Leads, and Product Marketing teams partner with me when the stakes are high and the timeline is tight.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <blockquote className="text-sm leading-6 text-white/80">“{testimonial.quote}”</blockquote>
              <figcaption>
                <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
