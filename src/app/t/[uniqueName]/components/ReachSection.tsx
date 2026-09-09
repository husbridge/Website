import {
  Globe,
  Instagram,
  Music2,
  Twitter,
  Youtube,
  Link as LinkIcon,
} from "lucide-react";
import {
  AudienceBand,
  PublishedProfile,
  SocialLinks,
} from "@/lib/publicProfile";

const AUDIENCE_LABELS: Record<AudienceBand, string> = {
  "": "",
  under_1k: "Under 1K",
  "1k_10k": "1K–10K",
  "10k_50k": "10K–50K",
  "50k_100k": "50K–100K",
  "100k_500k": "100K–500K",
  "500k_plus": "500K+",
};

const PLATFORM_ICONS: Record<string, typeof Instagram> = {
  instagram: Instagram,
  tiktok: Music2,
  twitter: Twitter,
  youtube: Youtube,
  website: Globe,
  other: LinkIcon,
};

const LINK_ICONS: Record<keyof SocialLinks, typeof Instagram> = {
  instagram: Instagram,
  tiktok: Music2,
  twitter: Twitter,
  youtube: Youtube,
  website: Globe,
};

// "Reach" — a compact row of icon+handle chips (social accounts, with
// self-reported audience size folded into the same chip) plus a second
// row of plain social links, rather than a full-width bordered card.
export default function ReachSection({
  profile,
}: {
  profile: PublishedProfile;
}) {
  const links = (Object.keys(LINK_ICONS) as (keyof SocialLinks)[]).filter(
    (key) => profile.socialLinks[key],
  );

  const hasContent = profile.socialAccounts.length > 0 || links.length > 0;
  if (!hasContent) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {profile.socialAccounts.map((account, i) => {
        const Icon = PLATFORM_ICONS[account.platform] || LinkIcon;
        return (
          <div
            key={account._id || i}
            className="inline-flex items-center gap-2 bg-white/5 rounded-full pl-2 pr-4 py-2"
          >
            <span className="w-7 h-7 rounded-full bg-primary-yellow/15 text-primary-dark-yellow flex items-center justify-center flex-none">
              <Icon size={14} />
            </span>
            <span className="text-sm text-white/80">
              {account.handle}
              {account.audienceBand && (
                <span className="text-white/40">
                  {" "}
                  · {AUDIENCE_LABELS[account.audienceBand]}
                </span>
              )}
            </span>
          </div>
        );
      })}
      {links.map((key) => {
        const Icon = LINK_ICONS[key];
        return (
          <a
            key={key}
            href={profile.socialLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-primary-yellow/50 rounded-full pl-2 pr-4 py-2 transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-white/5 text-white/70 flex items-center justify-center flex-none">
              <Icon size={14} />
            </span>
            <span className="text-sm text-white/70 capitalize">{key}</span>
          </a>
        );
      })}
    </div>
  );
}
