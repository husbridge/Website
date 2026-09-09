import FAQSection from "@/components/home/faq-section";
import Features from "@/components/home/features";
import GettingStarted from "@/components/home/get-started";
import GetStartedToday from "@/components/home/get-started-today";
import HeroSection from "@/components/home/hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <FAQSection />
      <GettingStarted />
      <GetStartedToday />
    </main>
  );
}
