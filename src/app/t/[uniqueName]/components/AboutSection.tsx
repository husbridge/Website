import { PublishedProfile } from "@/lib/publicProfile";

function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs bg-app-border/60 text-app-black rounded-full px-3 py-1"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

// "About" section — category, city, skills, service areas. Matches My
// Page's About section field set exactly.
export default function AboutSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const categories = [
    profile.primaryCategory,
    ...profile.categories.filter((c) => c !== profile.primaryCategory),
  ].filter(Boolean);

  const hasContent =
    categories.length > 0 ||
    profile.skills.length > 0 ||
    profile.serviceAreas.length > 0;

  if (!hasContent) return null;

  return (
    <div className="space-y-4">
      {categories.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-app-black/50 uppercase tracking-wide">
            Category
          </p>
          <TagList items={categories} />
        </div>
      )}
      {profile.skills.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-app-black/50 uppercase tracking-wide">
            Skills
          </p>
          <TagList items={profile.skills} />
        </div>
      )}
      {profile.serviceAreas.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-app-black/50 uppercase tracking-wide">
            Service areas
          </p>
          <TagList items={profile.serviceAreas} />
        </div>
      )}
    </div>
  );
}
