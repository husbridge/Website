import { PublishedProfile } from "@/lib/publicProfile";

function TagRow({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-2">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm bg-white/5 text-white/80 rounded-full px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// "About" — bio text (short/long) plus category, skills, service areas.
// Simple text on the dark shell, no bordered box — bio reads as an
// introduction, tags stay lightweight rather than boxed form fields.
// City is deliberately not repeated here — it's already in the hero.
export default function AboutSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const categories = [
    profile.primaryCategory,
    ...profile.categories.filter((c) => c !== profile.primaryCategory),
  ].filter(Boolean);

  const hasBio = Boolean(profile.shortBio || profile.longBio);
  const hasTags =
    categories.length > 0 ||
    profile.skills.length > 0 ||
    profile.serviceAreas.length > 0;

  if (!hasBio && !hasTags) return null;

  return (
    <div className="space-y-6">
      {profile.shortBio && (
        <p className="text-lg text-white/90 font-medium leading-relaxed">
          {profile.shortBio}
        </p>
      )}
      {profile.longBio && (
        <p className="text-base text-white/60 leading-relaxed whitespace-pre-line">
          {profile.longBio}
        </p>
      )}
      {hasTags && (
        <div className="flex flex-wrap gap-8 pt-2">
          <TagRow label="Category" items={categories} />
          <TagRow label="Skills" items={profile.skills} />
          <TagRow label="Service areas" items={profile.serviceAreas} />
        </div>
      )}
    </div>
  );
}
