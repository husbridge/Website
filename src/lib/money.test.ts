import { describe, expect, it } from "vitest";
import { formatMoney } from "./money";

// Proves the public-profile display leg of the money round trip. The
// other two legs (input->storage, and the management-form/inquiry-summary
// displays) live in Frontend, tested against this exact same wire value —
// see src/utils/money.test.ts there.
//
// ₦150,000.50 (15000050 kobo) is deliberately non-round: a formatting bug
// (naira/kobo confusion, a stray /100, float rounding) tends to hide
// behind round numbers and only shows up once the minor unit isn't zero.
describe("money round-trip — storage -> public-profile display", () => {
  it("a non-round wire value formats correctly", () => {
    expect(formatMoney(15000050, "NGN")).toBe("₦150,001");
  });

  it("a round wire value doesn't accidentally rely on the non-round test to catch a bug", () => {
    expect(formatMoney(15000000, "NGN")).toBe("₦150,000");
  });
});
