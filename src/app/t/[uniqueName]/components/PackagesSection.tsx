"use client";

import Image from "next/image";
import { PublishedProfile, PublicPackage } from "@/lib/publicProfile";
import { inquiryStartUrl } from "@/lib/inquiryStart";
import { formatMoney } from "@/lib/money";
import Button from "@/components/button";

// "Packages" — a card grid, the same treatment PortfolioGrid already
// established as this page's answer to "content with an image" (the one
// place this page uses a bordered/boxed card at all, and for the same
// reason: nothing else fits a real photo as well). A package now carries
// one, so it earns the same primitive rather than a new one — but it
// isn't a portfolio thumbnail: price is the loudest thing on the card
// (the same big-stat treatment TrackRecordSection uses elsewhere), and
// every card ends in an action, because a package is an offer to buy, not
// a fact to browse. No image set yet (most talents won't have one at
// first) falls back to the exact gradient ProfileHero already uses for a
// photo-less profile — a placeholder this page has already established,
// not an invented one.
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {packages.map((pkg) => (
        <div
          key={pkg._id}
          className="flex flex-col rounded-2xl overflow-hidden bg-white/5"
        >
          <div className="aspect-[16/10] relative bg-primary-black flex-none">
            {pkg.image ? (
              <Image
                src={pkg.image}
                alt={pkg.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light-gray to-primary-black" />
            )}
            <span className="absolute top-3 right-3 bg-primary-yellow text-primary-black text-lg font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
              {formatMoney(pkg.price, pkg.currency)}
            </span>
          </div>

          <div className="flex flex-col flex-1 p-5">
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

            <Button
              variant="filled"
              size="md"
              className="mt-4 whitespace-nowrap"
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
