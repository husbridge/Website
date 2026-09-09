import { notFound } from "next/navigation";
import { Metadata } from "next";
import { fetchPublicProfile, PublishedProfile } from "@/lib/publicProfile";
import LightCard from "./components/LightCard";
import SectionCard from "./components/SectionCard";
import ProfileHeader, { ProfileBio } from "./components/ProfileHeader";
import AboutSection from "./components/AboutSection";
import PortfolioGrid from "./components/PortfolioGrid";
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

  return (
    <main className="px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {!profile.isPublished ? (
          <HoldingScreen />
        ) : (
          <LightCard>
            <div className="space-y-8">
              <div>
                <ProfileHeader profile={profile} />
                <ProfileBio profile={profile} />
              </div>
              <SectionCard title="About">
                <AboutSection profile={profile} />
              </SectionCard>
              <SectionCard title="Portfolio">
                <PortfolioGrid profile={profile} />
              </SectionCard>
              <SectionCard title="Reach">
                <ReachSection profile={profile} />
              </SectionCard>
              <SectionCard title="Track record">
                <TrackRecordSection profile={profile} />
              </SectionCard>
            </div>
          </LightCard>
        )}
      </div>
    </main>
  );
}
