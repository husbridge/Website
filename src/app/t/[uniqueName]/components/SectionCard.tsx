import { ReactNode } from "react";

// Matches the app's bordered-block convention (border-black-20-style
// elements in My Page's forms) — ported as --color-app-border here since
// there's no shared token package with Frontend. Used to separate each
// of the 5 profile sections within the light card.
export default function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border border-app-border rounded-xl p-5 md:p-6">
      <h2 className="text-[14px] font-semibold text-app-black mb-4 uppercase tracking-wide opacity-70">
        {title}
      </h2>
      {children}
    </section>
  );
}
