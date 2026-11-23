import { SKILLS } from '../data/site';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="02" eyebrow="Skills" title="The tools I work with.">
            Grouped by what I use them for. No progress bars: the projects speak for themselves.
          </SectionHeading>
        </Reveal>

        <div className="mt-14">
          {SKILLS.map(({ icon: Icon, title, blurb, items }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="grid gap-5 border-t border-ink/[0.08] py-9 last:border-b md:grid-cols-12 md:gap-10">
                <div className="flex items-start gap-4 md:col-span-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{blurb}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2.5 md:col-span-8">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
