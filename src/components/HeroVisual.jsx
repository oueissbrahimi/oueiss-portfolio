import { BrainCircuit, FileCode2, ShieldCheck } from 'lucide-react';

// [css class, text] tokens per line. Content mirrors facts already on the site.
const K = 'text-brand-700';
const S = 'text-brand-600';
const P = 'text-slate-700';
const D = 'text-slate-400';

const LINES = [
  [[K, 'const'], [P, ' oueiss'], [D, ' = {']],
  [[P, '  school'], [D, ': '], [S, '"ESI, Algeria"'], [D, ',']],
  [[P, '  focus'], [D, ': ['], [S, '"Web"'], [D, ', '], [S, '"AI"'], [D, ', '], [S, '"Security"'], [D, '],']],
  [[P, '  building'], [D, ': '], [S, '"ESICodeHub"'], [D, ',']],
  [[P, '  lookingFor'], [D, ': '], [S, '"collaborations"'], [D, ',']],
  [[D, '};']],
  [],
  [[P, 'oueiss'], [D, '.'], [K, 'say'], [D, '('], [S, '"Let’s build something."'], [D, ');']],
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      {/* soft organic shape + offset outline */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-[18%] -top-[22%] h-[135%] w-[120%] max-w-none text-brand-500"
      >
        <path
          fill="currentColor"
          fillOpacity=".11"
          d="M421 63c62 41 118 112 117 190-2 79-63 134-98 197-36 63-47 133-111 145-63 12-131-32-186-85C88 458 46 395 52 331c6-65 60-111 99-165 39-54 63-117 119-130 56-12 89 6 151 27z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeOpacity=".28"
          strokeWidth="1.5"
          transform="translate(26 22) rotate(6 300 300)"
          d="M421 63c62 41 118 112 117 190-2 79-63 134-98 197-36 63-47 133-111 145-63 12-131-32-186-85C88 458 46 395 52 331c6-65 60-111 99-165 39-54 63-117 119-130 56-12 89 6 151 27z"
        />
      </svg>

      <div className="relative animate-fade-up [animation-delay:250ms]">
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-lift">
          <div className="flex items-center gap-2 border-b border-ink/[0.07] bg-mist px-4 py-2.5">
            <FileCode2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
            <span className="font-mono text-xs text-slate-600">profile.js</span>
          </div>

          <pre
            className="overflow-x-auto px-3 py-5 font-mono text-[12.5px] leading-7 sm:px-4 sm:text-[13.5px]"
            aria-label="A short code snippet describing Oueiss: school, focus areas and current project."
          >
            <code className="block">
              {LINES.map((tokens, i) => (
                <span
                  key={i}
                  className="flex animate-line-in"
                  style={{ animationDelay: `${600 + i * 140}ms` }}
                >
                  <span aria-hidden="true" className="mr-4 w-5 shrink-0 select-none text-right text-slate-300">
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">
                    {tokens.map(([cls, text], j) => (
                      <span key={j} className={cls}>
                        {text}
                      </span>
                    ))}
                    {i === LINES.length - 1 && (
                      <span aria-hidden="true" className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-brand-500" />
                    )}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>

        {/* two quiet floating chips */}
        <div className="absolute -left-3 top-10 hidden animate-float items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs font-semibold shadow-soft sm:flex">
          <BrainCircuit className="h-4 w-4 text-brand-600" aria-hidden="true" /> AI / ML
        </div>
        <div className="absolute -bottom-4 right-6 hidden animate-float items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-2 text-xs font-semibold shadow-soft [animation-delay:1.5s] sm:flex">
          <ShieldCheck className="h-4 w-4 text-brand-600" aria-hidden="true" /> Security
        </div>
      </div>
    </div>
  );
}
