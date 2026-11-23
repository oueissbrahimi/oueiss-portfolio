import { ArrowRight, Github } from 'lucide-react';
import { PROFILE } from '../data/site';
import Button from './ui/Button';
import HeroVisual from './HeroVisual';

const hl = 'font-semibold text-brand-600';

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-8">
        <div className="lg:col-span-7">
          <p className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-medium text-brand-700">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Open to collaborations
          </p>

          <h1 className="mt-6 animate-fade-up font-display text-[2.9rem] font-extrabold leading-[0.98] tracking-tight [animation-delay:80ms] sm:text-6xl lg:text-[4.5rem]">
            <span className="block text-[0.42em] font-semibold tracking-normal text-slate-500">Hi, I’m</span>
            Brahimi Ahcen
            <br />
            <span className="text-brand-500">Oueiss</span>
            <span className="text-ink">.</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-700 [animation-delay:160ms] sm:text-xl">
            Computer science student at ESI, Algeria. I build practical software and care about the details, from clean
            interfaces to the systems behind them.
          </p>
          <p className="mt-4 max-w-xl animate-fade-up text-base leading-relaxed text-slate-600 [animation-delay:220ms]">
            I’m drawn to <span className={hl}>software development</span>, <span className={hl}>artificial intelligence</span>{' '}
            and <span className={hl}>cybersecurity</span>, and to turning ideas into projects that actually work.
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:300ms]">
            <Button href="#projects">
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button href={PROFILE.github} variant="secondary" external>
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub Profile
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
