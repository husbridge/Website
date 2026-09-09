// Shown when the profile exists but isPublished is false — unlike the
// legacy Contact page (which renders full data regardless of publish
// state), this page respects it. Dark-themed, matching the rest of the
// page's direction rather than a light card.
export default function HoldingScreen() {
  return (
    <div className="text-center py-24">
      <h1 className="text-2xl font-bold text-white mb-2">
        This page isn&apos;t live yet
      </h1>
      <p className="text-sm text-white/50">
        The talent behind this Magic Link hasn&apos;t published their profile
        yet. Check back soon.
      </p>
    </div>
  );
}
