// Package price wire format is always an integer in the smallest unit of
// its currency (kobo for NGN) — never a float (PHASE2_DESIGN.md,
// husridge-server's PackagePublicDto). This is the public-profile display
// leg of that round trip; Frontend owns the input and the other two
// display legs (management form, inquiry summary) with the same
// arithmetic, tested against the same wire value in its own suite (see
// src/utils/money.test.ts there).
export function formatMoney(minorUnitValue: number, currency: string): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(minorUnitValue / 100);
}
