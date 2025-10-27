import { SectionProps } from "@/types/features";
import GetStartedButton from "../get-started-button";

export default function Section({ section }: SectionProps) {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight text-white">
              {section.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {section.subtitle}
            </p>
          </div>

          {/* Right column - Features */}
          <div className="space-y-8">
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
              {section.features.map((feature, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-medium mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {section.hasButton && <GetStartedButton />}
          </div>
        </div>
      </div>
    </div>
  );
}
