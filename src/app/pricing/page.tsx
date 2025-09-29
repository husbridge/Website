import { FeaturesComparison } from "@/components/pricing/features-comparison";
import { Plan } from "@/components/pricing/plan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Husridge",
  description: "Do more in less with Husridge",
};

export default function page() {
  return (
    <main className="text-white">
      <Plan />
      <FeaturesComparison />
    </main>
  );
}
