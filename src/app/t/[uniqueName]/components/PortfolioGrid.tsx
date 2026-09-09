import Image from "next/image";
import { PublishedProfile } from "@/lib/publicProfile";

// "Portfolio" — the full grid, matching the portfolio manager's grid
// treatment in My Page (Frontend): square thumbnails, rounded card,
// title below, responsive column count. Read-only here (no reorder/edit
// — this is the public view).
export default function PortfolioGrid({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const items = profile.portfolioItems;
  if (items.length === 0) {
    return <p className="text-sm text-app-black/50">No portfolio items yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => {
        const media = item.media[0];
        return (
          <div
            key={item._id}
            className="border border-app-border rounded-2xl overflow-hidden"
          >
            <div className="aspect-square bg-app-border/40 relative">
              {media && (
                <Image
                  src={media.thumbnailUrl || media.url}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              )}
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-app-black truncate">
                {item.title}
              </p>
              {item.category && (
                <p className="text-xs text-app-black/50">{item.category}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
