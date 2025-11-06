"use client";

import { sectionsData } from "@/constants/features";
import Section from "./section";

export default function FeaturesList() {
  return (
    <section className="bg-black">
      {sectionsData.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </section>
  );
}
