import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchPublicProfile, PublishedProfile } from "@/lib/publicProfile";
import ProfileHero from "./components/ProfileHero";
import SectionLabel from "./components/SectionLabel";
import AboutSection from "./components/AboutSection";
import PortfolioGrid from "./components/PortfolioGrid";
import PackagesSection from "./components/PackagesSection";
import ReachSection from "./components/ReachSection";
import TrackRecordSection from "./components/TrackRecordSection";
import HoldingScreen from "./components/HoldingScreen";

interface PageProps {
  params: Promise<{ uniqueName: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { uniqueName } = await params;
  const { profile } = await fetchPublicProfile(uniqueName);

  if (!profile || !profile.isPublished) {
    return { title: "Husridge" };
  }

  const p = profile as PublishedProfile;
  const displayName =
    p.fullName?.trim() || `${p.firstName} ${p.lastName}`.trim();
  const description =
    p.shortBio ||
    p.professionalTitle ||
    "View this talent's profile on Husridge.";

  return {
    title: `${displayName} | Husridge`,
    description,
    openGraph: {
      title: `${displayName} | Husridge`,
      description,
      images: p.profileUrl ? [p.profileUrl] : undefined,
    },
  };
}

export default async function PublicProfilePage({ params }: PageProps) {
  const { uniqueName } = await params;
  const { found, profile } = await fetchPublicProfile(uniqueName);

  if (!found || !profile) {
    notFound();
  }

  if (!profile.isPublished) {
    return (
      <main className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <HoldingScreen />
        </div>
      </main>
    );
  }

  // Each section hides itself (returns null) when it has nothing to show
  // — computed here too so SectionLabel's heading + divider don't render
  // around empty content (an empty-but-labeled section is the same
  // "awkward box" problem at a smaller scale).
  const hasAbout =
    Boolean(profile.shortBio || profile.longBio) ||
    Boolean(profile.primaryCategory) ||
    profile.categories.length > 0 ||
    profile.skills.length > 0 ||
    profile.serviceAreas.length > 0;
  const hasPortfolio = profile.portfolioItems.length > 0;
  const hasPackages = profile.packages.length > 0;
  const hasReach =
    profile.socialAccounts.length > 0 ||
    Object.values(profile.socialLinks).some(Boolean);
  const hasTrackRecord =
    typeof profile.yearsExperience === "number" || profile.brands.length > 0;

  return (
    <main className="px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <ProfileHero profile={profile} />

        <div className="space-y-8">
          {hasAbout && (
            <SectionLabel title="About">
              <AboutSection profile={profile} />
            </SectionLabel>
          )}
          {hasPackages && (
            <SectionLabel title="Packages">
              <PackagesSection profile={profile} />
            </SectionLabel>
          )}
          {hasPortfolio && (
            <SectionLabel title="Portfolio">
              <PortfolioGrid profile={profile} />
            </SectionLabel>
          )}
          {hasReach && (
            <SectionLabel title="Reach">
              <ReachSection profile={profile} />
            </SectionLabel>
          )}
          {hasTrackRecord && (
            <SectionLabel title="Track record">
              <TrackRecordSection profile={profile} />
            </SectionLabel>
          )}
        </div>
      </div>
    </main>
  );
}
