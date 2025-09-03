import Button from "../button";
import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function GettingStarted() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Sign up and verify your account",
      description:
        "Get started now by signing up for free and verifying your Husridge account with your email.",
    },
    {
      number: "02",
      title: "Send out your magic link",
      description:
        "Once you are signed up, share your magic link for easy booking and discovery by clients. (Magic Link is a dynamic and shareable booking link that serves as your professional portfolio, calendar, and contact card all in one.) ",
    },
    {
      number: "03",
      title: "Start getting inquiries",
      description:
        "With your Magic Link live, you will start to get lead generation, receive client inquiries and new business requests",
    },
  ];
  return (
    <div className="bg-primary-gray text-white py-16 md:py-32 lg:py-40 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Getting Started is Easy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <span className="text-lg md:text-2xl font-bold text-yellow-400">
                    {step.number}
                  </span>
                  <div className="h-14 bg-primary-yellow w-0.5 mt-2"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-semibold mb-3 text-primary-yellow">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            <Button className="ml-10">Get Started</Button>
          </div>

          <div className="flex justify-center">
            <Image src="/iPhone13.svg" alt="phone" width={300} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}
