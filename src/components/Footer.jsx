import { PROFILE } from '../data/site';
import SocialIcons from './ui/SocialIcons';

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <p className="font-display text-base font-semibold tracking-tight">{PROFILE.name}</p>
          <p className="mt-1 text-sm text-slate-500">© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <p className="font-mono text-xs text-slate-500">
          <span className="text-brand-600">//</span> handcrafted with React &amp; Tailwind. No templates, just commits.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
