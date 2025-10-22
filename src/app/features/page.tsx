import FeaturesList from "@/components/features/features";
import HeroSection from "@/components/home/hero";
import GetStartedToday from "@/components/home/get-started-today";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Husridge",
  description: "Do more in less with Husridge",
};

export default function page() {
  return (
    <main>
      <HeroSection />
      <FeaturesList />
      <GetStartedToday />
    </main>
  );
}
