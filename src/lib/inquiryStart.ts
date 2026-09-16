// app.husridge.com is a different origin — it can't read this origin's
// (there isn't one; this page has no buyer session at all) auth state, so
// Book/Message always hand off to app.husridge.com/inquiry/start, which
// decides there (where the buyer's session actually lives) whether to go
// straight into the inquiry or through signup/login first. Only talent,
// inquiry type, and (optionally) a chosen packageId travel in the URL —
// never a raw redirect target — /inquiry/start builds the internal
// destination itself from those validated values.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.husridge.com";

// packageId is additive (PHASE2_DESIGN.md §1): a plain "Book" CTA with no
// package chosen still works exactly as before. Only a per-package "Book"
// action on the profile page passes one.
export function inquiryStartUrl(
  uniqueUsername: string,
  type: "booking" | "message",
  packageId?: string,
) {
  const params = new URLSearchParams({ talent: uniqueUsername, type });
  if (packageId) {
    params.set("packageId", packageId);
  }
  return `${APP_URL}/inquiry/start?${params.toString()}`;
}
