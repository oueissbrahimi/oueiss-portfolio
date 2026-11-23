import { ArrowUpRight, Github, Palette } from 'lucide-react';
import { PROJECT } from '../data/site';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

function Preview({ preview }) {
  return (
    <figure className="relative">
      <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-brand-100/70" />
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift">
        <div className="flex items-center gap-1.5 border-b border-ink/[0.07] bg-mist px-4 py-2.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <img
          src={preview.src}
          width={preview.width}
          height={preview.height}
          alt={preview.alt}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-4 text-center text-xs text-slate-500">{preview.caption}</figcaption>
    </figure>
  );
}

export default function Projects() {
  const p = PROJECT;
  return (
    <section id="projects" className="scroll-mt-20 border-t border-ink/[0.06] bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="03" eyebrow="Projects" title="Selected work." />
        </Reveal>

        <Reveal className="mt-12">
          <article className="rounded-3xl border border-ink/[0.08] bg-white p-6 shadow-soft sm:p-10">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-brand-600">{p.tag}</p>
                <h3 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  ESI<span className="text-brand-500">Code</span>Hub
                </h3>
                <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{p.description}</p>

                <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-brand-200 bg-brand-50 p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand-600">
                    <Palette className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">My contribution</p>
                    <p className="mt-0.5 font-medium text-ink">{p.contribution}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button href={p.repo} external>
                    <Github className="h-4 w-4" aria-hidden="true" /> View repository
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <Preview preview={p.preview} />
              </div>
            </div>

            <div className="mt-12 grid gap-10 border-t border-ink/[0.08] pt-10 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">What it does</h4>
                <ul className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {p.features.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 text-sm font-medium">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-600">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Tech stack</h4>
                <dl className="mt-5 space-y-4">
                  {Object.entries(p.stack).map(([group, items]) => (
                    <div key={group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                      <dt className="w-20 shrink-0 text-sm font-semibold text-brand-700">{group}</dt>
                      <dd>
                        <ul className="flex flex-wrap gap-2">
                          {items.map((t) => (
                            <li key={t} className="rounded-full border border-ink/10 bg-surface px-3 py-1 font-mono text-xs text-slate-700">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
