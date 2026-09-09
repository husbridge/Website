import LightCard from "./LightCard";

// Shown when the profile exists but isPublished is false — unlike the
// legacy Contact page (which renders full data regardless of publish
// state), this page respects it. See PHASE1_AUDIT.md Step 6.
export default function HoldingScreen() {
  return (
    <LightCard>
      <div className="text-center py-12">
        <h1 className="text-xl font-bold text-app-black mb-2">
          This page isn&apos;t live yet
        </h1>
        <p className="text-sm text-app-black/60">
          The talent behind this Magic Link hasn&apos;t published their profile
          yet. Check back soon.
        </p>
      </div>
    </LightCard>
  );
}
