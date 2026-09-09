import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import Button from "@/components/button";
import { PublishedProfile } from "@/lib/publicProfile";

// Hero — the thing that has to land for this to read as a real profile
// page, not a form. Dark-themed with a yellow-accent glow (direction (a)
// from review: adopt Website's own dark/yellow identity rather than
// importing My Page's light-mode card look). Photo is a large, portrait-
// framed hero image, not a small circular avatar; name/title/city carry
// real hierarchy; the "Book" CTA is the most visually prominent element,
// not an afterthought.
export default function ProfileHero({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const displayName =
    profile.fullName?.trim() ||
    `${profile.firstName} ${profile.lastName}`.trim();
  const firstName = profile.firstName?.trim() || displayName.split(" ")[0];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-primary-gray">
      {/* Yellow accent glow — pulls from the site's own accent color
          rather than a generic gradient. Purely decorative, absolutely
          positioned behind the content. */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-yellow/20 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-primary-dark-yellow/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
        {/* Photo — a large portrait-framed hero image, bleeding to the
            card's edge on desktop (top+left+bottom radius only), not a
            small boxed avatar. */}
        <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto relative flex-none bg-primary-black">
          {profile.profileUrl ? (
            <Image
              src={profile.profileUrl}
              alt={displayName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light-gray to-primary-black" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-6 py-10 md:px-12 md:py-12 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start flex-wrap">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {displayName}
            </h1>
            {profile.isVerified && (
              <span className="inline-flex items-center gap-1.5 bg-primary-yellow/15 text-primary-dark-yellow rounded-full px-3 py-1.5 text-sm font-semibold">
                <BadgeCheck size={16} strokeWidth={2.5} />
                Verified
              </span>
            )}
          </div>

          {profile.professionalTitle && (
            <p className="text-xl md:text-2xl text-white/80 mt-3">
              {profile.professionalTitle}
            </p>
          )}
          {profile.city && (
            <p className="text-sm text-white/50 mt-1 uppercase tracking-wide">
              {profile.city}
            </p>
          )}

          <div className="mt-8 flex gap-3 justify-center md:justify-start">
            <Button variant="filled" size="lg" className="whitespace-nowrap">
              Book {firstName}
            </Button>
            <Button variant="outlined" size="lg" className="whitespace-nowrap">
              Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
