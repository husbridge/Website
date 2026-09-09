import Image from "next/image";
import { PublishedProfile } from "@/lib/publicProfile";

// "Identity" section — profile photo (the single avatar, matching My
// Page's Identity section exactly — this is not the portfolio grid),
// name, title, short + long bio.
export default function ProfileHeader({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const displayName =
    profile.fullName?.trim() ||
    `${profile.firstName} ${profile.lastName}`.trim();

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-app-border flex-none relative">
        {profile.profileUrl ? (
          <Image
            src={profile.profileUrl}
            alt={displayName}
            fill
            className="object-cover"
            sizes="96px"
          />
        ) : null}
      </div>
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="text-2xl md:text-3xl font-bold text-app-black">
            {displayName}
          </h1>
          {profile.isVerified && (
            <span className="text-xs font-semibold bg-app-black text-primary-dark-yellow rounded-full px-3 py-1">
              Verified
            </span>
          )}
        </div>
        {profile.professionalTitle && (
          <p className="text-lg text-app-black/70 mt-1">
            {profile.professionalTitle}
          </p>
        )}
        {profile.city && (
          <p className="text-sm text-app-black/50 mt-1">{profile.city}</p>
        )}
      </div>
    </div>
  );
}

export function ProfileBio({ profile }: { profile: PublishedProfile }) {
  if (!profile.shortBio && !profile.longBio) return null;
  return (
    <div className="space-y-3">
      {profile.shortBio && (
        <p className="text-base text-app-black font-medium">
          {profile.shortBio}
        </p>
      )}
      {profile.longBio && (
        <p className="text-sm text-app-black/70 whitespace-pre-line">
          {profile.longBio}
        </p>
      )}
    </div>
  );
}
