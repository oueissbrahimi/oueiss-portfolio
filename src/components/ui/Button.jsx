const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 active:scale-[.98]';

const variants = {
  primary:
    'bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-lift hover:-translate-y-0.5',
  secondary:
    'border border-ink/10 bg-white text-ink hover:border-brand-500/60 hover:bg-brand-50 hover:-translate-y-0.5',
};

/** Anchor styled as a button. External links open safely in a new tab. */
export default function Button({ href, variant = 'primary', external = false, className = '', children, ...rest }) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...ext} {...rest}>
      {children}
    </a>
  );
}
