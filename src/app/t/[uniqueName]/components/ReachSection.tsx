import {
  AudienceBand,
  PublishedProfile,
  SocialLinks,
} from "@/lib/publicProfile";

const AUDIENCE_LABELS: Record<AudienceBand, string> = {
  "": "",
  under_1k: "Under 1,000",
  "1k_10k": "1,000–10,000",
  "10k_50k": "10,000–50,000",
  "50k_100k": "50,000–100,000",
  "100k_500k": "100,000–500,000",
  "500k_plus": "500,000+",
};

const PLATFORM_LABELS: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  twitter: "Twitter / X",
  youtube: "YouTube",
  website: "Website",
  other: "Other",
};

const LINK_LABELS: Record<keyof SocialLinks, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  twitter: "Twitter / X",
  youtube: "YouTube",
  website: "Website",
};

// "Reach" — social accounts (with self-reported audience size) and
// social links. Matches My Page's Reach section field set exactly.
export default function ReachSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const links = (Object.keys(LINK_LABELS) as (keyof SocialLinks)[]).filter(
    (key) => profile.socialLinks[key],
  );

  const hasContent = profile.socialAccounts.length > 0 || links.length > 0;
  if (!hasContent) return null;

  return (
    <div className="space-y-4">
      {profile.socialAccounts.length > 0 && (
        <ul className="space-y-2">
          {profile.socialAccounts.map((account, i) => (
            <li key={account._id || i} className="text-sm">
              <span className="font-semibold text-app-black">
                {PLATFORM_LABELS[account.platform] || account.platform}
              </span>
              {account.handle && (
                <span className="text-app-black/70"> — {account.handle}</span>
              )}
              {account.audienceBand && (
                <span className="text-app-black/50">
                  {" "}
                  · {AUDIENCE_LABELS[account.audienceBand]} followers
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {links.map((key) => (
            <a
              key={key}
              href={profile.socialLinks[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs border border-app-border rounded-full px-4 py-2 text-app-black hover:bg-app-border/40 transition-colors"
            >
              {LINK_LABELS[key]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
