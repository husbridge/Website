import { ReactNode } from "react";

// The "My Page content living on Website's dark shell" treatment — a
// light card rather than a full white page, so this doesn't fight the
// rest of the site's dark identity. --color-app-card-bg is a reasonable
// default (a warm off-white, not pure #FFFFFF, since it sits on a very
// dark #101214 background) — flagged for a visual check before treating
// the exact shade as final. See globals.css for the token definitions.
export default function LightCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-app-card-bg text-app-black rounded-2xl p-6 md:p-10">
      {children}
    </div>
  );
}
