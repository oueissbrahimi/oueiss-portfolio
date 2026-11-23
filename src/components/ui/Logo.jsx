import { PROFILE } from '../../data/site';

export default function Logo() {
  return (
    <a href="#home" aria-label={`${PROFILE.name} — back to top`} className="group inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink font-display text-sm font-bold tracking-tight text-white transition-colors duration-200 group-hover:bg-brand-600">
        bo
      </span>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight">
        {PROFILE.handle}
        <span className="text-brand-500">.dev</span>
      </span>
    </a>
  );
}
