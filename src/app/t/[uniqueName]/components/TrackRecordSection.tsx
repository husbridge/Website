import Image from "next/image";
import { Award } from "lucide-react";
import { PublishedProfile } from "@/lib/publicProfile";

// "Track record" — years of experience as an inline stat, brands worked
// with as small chips (logo if present, name otherwise) — not another
// bordered box.
export default function TrackRecordSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const hasContent =
    typeof profile.yearsExperience === "number" || profile.brands.length > 0;
  if (!hasContent) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
      {typeof profile.yearsExperience === "number" && (
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-primary-yellow/15 text-primary-dark-yellow flex items-center justify-center flex-none">
            <Award size={18} />
          </span>
          <div>
            <p className="text-2xl font-bold text-white leading-none">
              {profile.yearsExperience}
            </p>
            <p className="text-xs text-white/40">
              year{profile.yearsExperience === 1 ? "" : "s"} experience
            </p>
          </div>
        </div>
      )}
      {profile.brands.length > 0 && (
        <div className="flex flex-wrap items-center gap-3">
          {profile.brands.map((brand, i) =>
            brand.logoUrl ? (
              <div
                key={brand._id || i}
                className="w-10 h-10 rounded-full overflow-hidden relative bg-white/5"
                title={brand.name}
              >
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ) : (
              <span
                key={brand._id || i}
                className="text-sm bg-white/5 text-white/70 rounded-full px-3 py-1.5"
              >
                {brand.name}
              </span>
            ),
          )}
        </div>
      )}
    </div>
  );
}
