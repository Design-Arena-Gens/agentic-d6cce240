import { credentials } from "@/data/site";

export function Credentials() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start">
        <div className="md:w-1/2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">About</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Copy fueled by research, sharpened by eight years in the trenches
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:w-1/2">
          <p className="text-base leading-7 text-black/70">{credentials.bio}</p>
          <ul className="space-y-3 text-sm text-black/80">
            {credentials.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
