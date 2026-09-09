import { PublishedProfile } from "@/lib/publicProfile";

// "Track record" — years of experience, brands worked with. Matches My
// Page's Track record section field set exactly.
export default function TrackRecordSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const hasContent =
    typeof profile.yearsExperience === "number" || profile.brands.length > 0;
  if (!hasContent) return null;

  return (
    <div className="space-y-4">
      {typeof profile.yearsExperience === "number" && (
        <p className="text-sm">
          <span className="font-semibold text-app-black">
            {profile.yearsExperience}
          </span>{" "}
          <span className="text-app-black/70">
            year{profile.yearsExperience === 1 ? "" : "s"} of experience
          </span>
        </p>
      )}
      {profile.brands.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-app-black/50 uppercase tracking-wide mb-2">
            Brands worked with
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.brands.map((brand, i) => (
              <span
                key={brand._id || i}
                className="text-xs bg-app-border/60 text-app-black rounded-full px-3 py-1"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
