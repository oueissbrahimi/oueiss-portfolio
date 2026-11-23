import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/site';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const links = [
    { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: Mail },
    { label: 'GitHub', value: '@oueissbrahimi', href: PROFILE.github, Icon: Github, external: true },
    PROFILE.linkedin && { label: 'LinkedIn', value: 'Connect on LinkedIn', href: PROFILE.linkedin, Icon: Linkedin, external: true },
  ].filter(Boolean);

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-12 rounded-3xl border border-brand-200 bg-brand-50/70 p-8 sm:p-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading index="04" eyebrow="Contact" title={<>Let’s build something <span className="text-brand-500">together.</span></>}>
                Have a project, a hackathon team to fill, or a CTF to crack? I’d love to hear from you.
              </SectionHeading>
              <button
                type="button"
                onClick={copyEmail}
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand-500/60"
              >
                {copied ? <Check className="h-4 w-4 text-brand-600" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                <span aria-live="polite">{copied ? 'Email copied' : 'Copy email address'}</span>
              </button>
            </div>

            <ul className="self-center lg:col-span-6">
              {links.map(({ label, value, href, Icon, external }) => (
                <li key={label} className="border-t border-ink/10 first:border-t-0">
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-soft transition group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">{label}</span>
                      <span className="block truncate font-display text-lg font-semibold tracking-tight">{value}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
