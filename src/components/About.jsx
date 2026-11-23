import { GraduationCap, MapPin } from 'lucide-react';
import { INTERESTS, PROFILE } from '../data/site';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink/[0.06] bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading index="01" eyebrow="About" title="A student who likes building things that work.">
                I’m studying computer science at ESI, where I split my time between coursework, team projects and
                late-night experiments with code.
              </SectionHeading>
            </Reveal>
            <Reveal delay={120} className="mt-8 space-y-3 text-sm text-slate-700">
              <p className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-600" aria-hidden="true" />
                {PROFILE.school}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-[18px] w-[18px] shrink-0 text-brand-600" aria-hidden="true" />
                {PROFILE.country}
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {INTERESTS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <div className="group flex gap-5 border-t border-ink/[0.08] py-7 first:border-t-0 first:pt-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
