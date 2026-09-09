import { ReactNode } from "react";

// Replaces the old SectionCard's identical bordered-box treatment for
// every section — per review, sections should differentiate by purpose,
// not all look like the same gray box. This is just a subtle label +
// divider, letting each section's own content (plain text, a grid, chips,
// stats) carry the actual visual distinction.
export default function SectionLabel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-8 border-t border-white/10 first:pt-0 first:border-t-0">
      <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
