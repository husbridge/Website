import Image from "next/image";
import { PublishedProfile } from "@/lib/publicProfile";

// "Portfolio" — an actual media grid, dark cards matching the site's
// shell rather than light bordered boxes. Hidden entirely when empty
// (per review: a "No portfolio items yet" box read like a form error,
// not an intentional empty state) — nothing useful to show a buyer here
// yet, so the section just doesn't render.
export default function PortfolioGrid({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const items = profile.portfolioItems;
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => {
        const media = item.media[0];
        return (
          <div
            key={item._id}
            className="group rounded-2xl overflow-hidden bg-white/5"
          >
            <div className="aspect-square relative bg-primary-black">
              {media && (
                <Image
                  src={media.thumbnailUrl || media.url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              )}
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold text-white truncate">
                {item.title}
              </p>
              {item.category && (
                <p className="text-xs text-white/40">{item.category}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
