// Types + fetch for GET /public/profiles/:uniqueName — husridge-server's
// whitelisted public endpoint (ProfileService.getWhitelistedPublicProfile /
// ProfilePublicDto). This is the SAME API My Page's Preview & Publish bar
// is built against on the private side; this is its public counterpart —
// gates on isPublished (unlike the legacy /profile/pub/usr/:username route
// the old Contact page uses), and returns only PROFILE_PUBLIC_ALLOWED_KEYS.
//
// No shared types package with Frontend (different repo) — these are
// hand-kept in sync with husridge-server's ProfilePublicDto. See
// PHASE1_AUDIT.md Step 6.

export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "twitter"
  | "youtube"
  | "website"
  | "other";

export type AudienceBand =
  | ""
  | "under_1k"
  | "1k_10k"
  | "10k_50k"
  | "50k_100k"
  | "100k_500k"
  | "500k_plus";

export interface SocialAccount {
  _id?: string;
  platform: SocialPlatform;
  handle?: string;
  url?: string;
  audienceBand?: AudienceBand;
}

export interface Brand {
  _id?: string;
  name: string;
  logoUrl?: string;
}

export interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  youtube?: string;
  website?: string;
}

export type PortfolioMediaType = "image" | "video";

export interface PortfolioMediaEntry {
  url: string;
  type: PortfolioMediaType;
  thumbnailUrl?: string;
  provider: "cloudinary" | "youtube" | "instagram" | "tiktok";
}

export interface PublicPortfolioItem {
  _id: string;
  media: PortfolioMediaEntry[];
  title: string;
  description: string;
  role: string;
  clientName: string;
  category: string;
  date: string;
  sortOrder: number;
}

export interface PublicAgency {
  _id: string;
  agencyName: string;
}

// PHASE2_DESIGN.md (husridge-server) — PackagePublicDto. price is always an
// integer in the smallest unit of `currency` (kobo for NGN), never a float.
export interface PublicPackage {
  _id: string;
  category: string;
  label: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  deliverables: string[];
  turnaroundDays: number;
  revisions: number;
  terms: string;
  sortOrder: number;
}

// The full, published shape — data.isPublished is always present; every
// other field is only guaranteed when isPublished is true (see
// UnpublishedProfile below for the other case).
export interface PublishedProfile {
  _id: string;
  profileUrl: string;
  fullName: string;
  firstName: string;
  lastName: string;
  stageName: string;
  industry: string;
  bio: string;
  socialLinks: SocialLinks;
  isVerified: boolean;
  agency: PublicAgency | null;
  userType: string;
  uniqueUsername: string;
  professionalTitle: string;
  shortBio: string;
  longBio: string;
  primaryCategory: string;
  categories: string[];
  skills: string[];
  city: string;
  serviceAreas: string[];
  socialAccounts: SocialAccount[];
  yearsExperience?: number;
  brands: Brand[];
  isPublished: true;
  portfolioItems: PublicPortfolioItem[];
  packages: PublicPackage[];
}

// The holding-screen shape husridge-server returns when the profile
// exists but isn't published yet.
export interface UnpublishedProfile {
  isPublished: false;
  uniqueUsername: string;
}

export type PublicProfileData = PublishedProfile | UnpublishedProfile;

export interface PublicProfileResult {
  found: boolean;
  profile: PublicProfileData | null;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://husridge-server.onrender.com/api";

export async function fetchPublicProfile(
  uniqueName: string,
): Promise<PublicProfileResult> {
  const response = await fetch(
    `${API_BASE_URL}/public/profiles/${encodeURIComponent(uniqueName)}`,
    // Revalidate periodically rather than caching indefinitely or
    // fetching fresh on every request — a talent's page changes
    // occasionally, not on every buyer visit.
    { next: { revalidate: 60 } },
  );

  if (response.status === 404) {
    return { found: false, profile: null };
  }

  const json = await response.json();
  if (json.hasError || !json.data) {
    return { found: false, profile: null };
  }

  return { found: true, profile: json.data as PublicProfileData };
}
