"use client";

import { PublishedProfile, PublicPackage } from "@/lib/publicProfile";
import { inquiryStartUrl } from "@/lib/inquiryStart";
import { formatMoney } from "@/lib/money";
import Button from "@/components/button";

// "Packages" — a priced offer with deliverables, so it borrows the two
// visual primitives already established for exactly that kind of content
// elsewhere on this page rather than a bordered card (which this page's
// own history already moved away from — see SectionLabel): the price
// reads as a stat, the same big-bold-number treatment TrackRecordSection
// uses for years of experience, and deliverables render as the same pill
// chips AboutSection uses for skills/categories. Rows are separated by a
// hairline divider, not individually boxed.
//
// This is also where a buyer picks a package BEFORE starting contact
// (PHASE2_DESIGN.md §1) — "Book this package" carries packageId through
// the same inquiry-start handoff the hero's plain "Book" already uses.
export default function PackagesSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const packages = profile.packages;
  if (packages.length === 0) return null;

  function book(pkg: PublicPackage) {
    window.location.href = inquiryStartUrl(
      profile.uniqueUsername,
      "booking",
      pkg._id,
    );
  }

  return (
    <div className="divide-y divide-white/10">
      {packages.map((pkg) => (
        <div
          key={pkg._id}
          className="py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold text-white">{pkg.label}</p>
            {pkg.description && (
              <p className="text-sm text-white/60 mt-1 leading-relaxed">
                {pkg.description}
              </p>
            )}
            {pkg.deliverables.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {pkg.deliverables.map((d, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/5 text-white/80 rounded-full px-3 py-1"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}
            <p className="text-xs text-white/40 mt-3">
              {pkg.turnaroundDays}-day turnaround ·{" "}
              {pkg.revisions === 1
                ? "1 revision"
                : `${pkg.revisions} revisions`}{" "}
              included
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-3 md:flex-none">
            <p className="text-2xl font-bold text-white leading-none whitespace-nowrap">
              {formatMoney(pkg.price, pkg.currency)}
            </p>
            <Button
              variant="filled"
              size="md"
              className="whitespace-nowrap"
              onClick={() => book(pkg)}
            >
              Book this package
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
