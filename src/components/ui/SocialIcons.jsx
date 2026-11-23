import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../../data/site';

/** Only renders links that really exist in PROFILE. */
export default function SocialIcons({ className = '' }) {
  const links = [
    { href: PROFILE.github, label: 'GitHub', Icon: Github, external: true },
    PROFILE.linkedin && { href: PROFILE.linkedin, label: 'LinkedIn', Icon: Linkedin, external: true },
    { href: `mailto:${PROFILE.email}`, label: 'Email', Icon: Mail },
  ].filter(Boolean);

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
