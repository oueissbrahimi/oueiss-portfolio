export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand-600">
        <span className="text-brand-500">{index}</span> / {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{children}</p>}
    </div>
  );
}
