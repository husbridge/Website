import Button from "@/components/button";
import { CircleCheck, CircleX } from "lucide-react";
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

function Plan() {
  const plans = [
    {
      name: "Talent Account",
      description: "Best for freelancers or self-managed service providers",
      price: "NGN 10,000",
      period: "/Month",
      setupFee: null,
      icon: (
        <svg
          width="23"
          height="29"
          viewBox="0 0 23 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4919 13.8574L9.05431 15.7623C8.91828 15.8527 8.78744 15.8542 8.6618 15.767C8.53615 15.6798 8.49929 15.5655 8.55121 15.4243L9.4733 12.3325L7.04659 10.5725C6.91679 10.4821 6.88304 10.3627 6.94535 10.2142C7.00765 10.0657 7.10941 9.99097 7.25063 9.98993H10.2708L11.1929 6.91682C11.2448 6.7756 11.3445 6.70499 11.4919 6.70499C11.6394 6.70499 11.7391 6.7756 11.791 6.91682L12.7146 9.98993H15.7239C15.8661 9.98993 15.97 10.0642 16.0354 10.2127C16.1008 10.3611 16.0681 10.4806 15.9373 10.5709L13.5028 12.3325L14.4248 15.4243C14.4768 15.5655 14.4399 15.6798 14.3143 15.767C14.1886 15.8542 14.0578 15.8527 13.9217 15.7623L11.4919 13.8574ZM11.4919 26.7651L5.31923 28.6092C4.91946 28.7515 4.55031 28.6918 4.2118 28.4301C3.87328 28.1684 3.70403 27.8278 3.70403 27.4083V18.8354C2.71756 17.8656 1.95175 16.7296 1.4066 15.4274C0.861444 14.1253 0.588867 12.7323 0.588867 11.2485C0.588867 8.2091 1.64594 5.63234 3.7601 3.51819C5.87425 1.40403 8.45153 0.346437 11.4919 0.345399C14.5323 0.34436 17.1096 1.40144 19.2237 3.51663C21.3379 5.63182 22.395 8.2091 22.395 11.2485C22.395 12.7323 22.1224 14.1253 21.5772 15.4274C21.0321 16.7296 20.2663 17.865 19.2798 18.8339V27.4068C19.2798 27.8263 19.1106 28.1669 18.772 28.4285C18.4335 28.6902 18.0649 28.7499 17.6662 28.6077L11.4919 26.7651ZM11.4919 20.5939C14.0879 20.5939 16.2945 19.6853 18.1116 17.8682C19.9288 16.051 20.8374 13.8444 20.8374 11.2485C20.8374 8.65249 19.9288 6.44592 18.1116 4.62874C16.2945 2.81157 14.0879 1.90298 11.4919 1.90298C8.89595 1.90298 6.68938 2.81157 4.87221 4.62874C3.05503 6.44592 2.14645 8.65249 2.14645 11.2485C2.14645 13.8444 3.05503 16.051 4.87221 17.8682C6.68938 19.6853 8.89595 20.5939 11.4919 20.5939ZM5.2616 26.8928L11.4919 25.1467L17.7222 26.8928V20.1485C16.8541 20.7871 15.889 21.2803 14.8267 21.6282C13.7665 21.9771 12.6549 22.1515 11.4919 22.1515C10.3289 22.1515 9.21734 21.9776 8.15714 21.6297C7.09695 21.2819 6.13177 20.7881 5.2616 20.1485V26.8928Z"
            fill="#947005"
          />
        </svg>
      ),
    },
    {
      name: "Manager Account",
      description: "Best for Agencies or self-managed service providers",
      price: "NGN 8,000",
      period: "/Talent/Month",
      setupFee: null,
      icon: (
        <svg
          width="23"
          height="29"
          viewBox="0 0 23 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4919 13.8574L9.05431 15.7623C8.91828 15.8527 8.78744 15.8542 8.6618 15.767C8.53615 15.6798 8.49929 15.5655 8.55121 15.4243L9.4733 12.3325L7.04659 10.5725C6.91679 10.4821 6.88304 10.3627 6.94535 10.2142C7.00765 10.0657 7.10941 9.99097 7.25063 9.98993H10.2708L11.1929 6.91682C11.2448 6.7756 11.3445 6.70499 11.4919 6.70499C11.6394 6.70499 11.7391 6.7756 11.791 6.91682L12.7146 9.98993H15.7239C15.8661 9.98993 15.97 10.0642 16.0354 10.2127C16.1008 10.3611 16.0681 10.4806 15.9373 10.5709L13.5028 12.3325L14.4248 15.4243C14.4768 15.5655 14.4399 15.6798 14.3143 15.767C14.1886 15.8542 14.0578 15.8527 13.9217 15.7623L11.4919 13.8574ZM11.4919 26.7651L5.31923 28.6092C4.91946 28.7515 4.55031 28.6918 4.2118 28.4301C3.87328 28.1684 3.70403 27.8278 3.70403 27.4083V18.8354C2.71756 17.8656 1.95175 16.7296 1.4066 15.4274C0.861444 14.1253 0.588867 12.7323 0.588867 11.2485C0.588867 8.2091 1.64594 5.63234 3.7601 3.51819C5.87425 1.40403 8.45153 0.346437 11.4919 0.345399C14.5323 0.34436 17.1096 1.40144 19.2237 3.51663C21.3379 5.63182 22.395 8.2091 22.395 11.2485C22.395 12.7323 22.1224 14.1253 21.5772 15.4274C21.0321 16.7296 20.2663 17.865 19.2798 18.8339V27.4068C19.2798 27.8263 19.1106 28.1669 18.772 28.4285C18.4335 28.6902 18.0649 28.7499 17.6662 28.6077L11.4919 26.7651ZM11.4919 20.5939C14.0879 20.5939 16.2945 19.6853 18.1116 17.8682C19.9288 16.051 20.8374 13.8444 20.8374 11.2485C20.8374 8.65249 19.9288 6.44592 18.1116 4.62874C16.2945 2.81157 14.0879 1.90298 11.4919 1.90298C8.89595 1.90298 6.68938 2.81157 4.87221 4.62874C3.05503 6.44592 2.14645 8.65249 2.14645 11.2485C2.14645 13.8444 3.05503 16.051 4.87221 17.8682C6.68938 19.6853 8.89595 20.5939 11.4919 20.5939ZM5.2616 26.8928L11.4919 25.1467L17.7222 26.8928V20.1485C16.8541 20.7871 15.889 21.2803 14.8267 21.6282C13.7665 21.9771 12.6549 22.1515 11.4919 22.1515C10.3289 22.1515 9.21734 21.9776 8.15714 21.6297C7.09695 21.2819 6.13177 20.7881 5.2616 20.1485V26.8928Z"
            fill="#947005"
          />
        </svg>
      ),
    },
    {
      name: "Agency's Account",
      description: "Best for Bigger Agencies or self-managed service providers",
      price: "NGN 7,500",
      period: "/Talent/Month",
      setupFee: "NGN 2,000",
      setupPeriod: "/Sub-Manager/Month",
      icon: (
        <svg
          width="23"
          height="29"
          viewBox="0 0 23 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4919 13.8574L9.05431 15.7623C8.91828 15.8527 8.78744 15.8542 8.6618 15.767C8.53615 15.6798 8.49929 15.5655 8.55121 15.4243L9.4733 12.3325L7.04659 10.5725C6.91679 10.4821 6.88304 10.3627 6.94535 10.2142C7.00765 10.0657 7.10941 9.99097 7.25063 9.98993H10.2708L11.1929 6.91682C11.2448 6.7756 11.3445 6.70499 11.4919 6.70499C11.6394 6.70499 11.7391 6.7756 11.791 6.91682L12.7146 9.98993H15.7239C15.8661 9.98993 15.97 10.0642 16.0354 10.2127C16.1008 10.3611 16.0681 10.4806 15.9373 10.5709L13.5028 12.3325L14.4248 15.4243C14.4768 15.5655 14.4399 15.6798 14.3143 15.767C14.1886 15.8542 14.0578 15.8527 13.9217 15.7623L11.4919 13.8574ZM11.4919 26.7651L5.31923 28.6092C4.91946 28.7515 4.55031 28.6918 4.2118 28.4301C3.87328 28.1684 3.70403 27.8278 3.70403 27.4083V18.8354C2.71756 17.8656 1.95175 16.7296 1.4066 15.4274C0.861444 14.1253 0.588867 12.7323 0.588867 11.2485C0.588867 8.2091 1.64594 5.63234 3.7601 3.51819C5.87425 1.40403 8.45153 0.346437 11.4919 0.345399C14.5323 0.34436 17.1096 1.40144 19.2237 3.51663C21.3379 5.63182 22.395 8.2091 22.395 11.2485C22.395 12.7323 22.1224 14.1253 21.5772 15.4274C21.0321 16.7296 20.2663 17.865 19.2798 18.8339V27.4068C19.2798 27.8263 19.1106 28.1669 18.772 28.4285C18.4335 28.6902 18.0649 28.7499 17.6662 28.6077L11.4919 26.7651ZM11.4919 20.5939C14.0879 20.5939 16.2945 19.6853 18.1116 17.8682C19.9288 16.051 20.8374 13.8444 20.8374 11.2485C20.8374 8.65249 19.9288 6.44592 18.1116 4.62874C16.2945 2.81157 14.0879 1.90298 11.4919 1.90298C8.89595 1.90298 6.68938 2.81157 4.87221 4.62874C3.05503 6.44592 2.14645 8.65249 2.14645 11.2485C2.14645 13.8444 3.05503 16.051 4.87221 17.8682C6.68938 19.6853 8.89595 20.5939 11.4919 20.5939ZM5.2616 26.8928L11.4919 25.1467L17.7222 26.8928V20.1485C16.8541 20.7871 15.889 21.2803 14.8267 21.6282C13.7665 21.9771 12.6549 22.1515 11.4919 22.1515C10.3289 22.1515 9.21734 21.9776 8.15714 21.6297C7.09695 21.2819 6.13177 20.7881 5.2616 20.1485V26.8928Z"
            fill="#947005"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-primary-gray py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white/80 font-bold mb-4">
            Choose a plan that is right for you
          </h1>
          <p className="font-medium text-lg md:text-2xl lg:text-3xl">
            Take advantage of our 7-days free trial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-primary-black h-fit rounded-2xl p-4 border border-[#BABABA]/20"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#6A6A6A] text-sm leading-relaxed w-5/6">
                    {plan.description}
                  </p>
                </div>
                {plan.icon}
              </div>

              <div className="mb-6 font-bold">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl">{plan.price}</span>
                  <span className="text-sm ml-1">{plan.period}</span>
                </div>

                {plan.setupFee && (
                  <div className="flex items-baseline text-[#CDD1D6A1] font-bold">
                    <span className="text-xl">{plan.setupFee}</span>
                    <span className="text-xs ml-1">{plan.setupPeriod}</span>
                  </div>
                )}
              </div>
              <Button className="w-full opacity-80 hover:opacity-100 transition-opacity">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Feature {
  name: string;
  talents: boolean;
  managers: boolean;
  agencies: boolean;
}

interface Plan {
  name: string;
  key: keyof Omit<Feature, "name">;
}

function FeaturesComparison(): React.JSX.Element {
  const features: Feature[] = [
    {
      name: "Bookings Management",
      talents: true,
      managers: true,
      agencies: true,
    },
    {
      name: "Proposal Management",
      talents: true,
      managers: true,
      agencies: true,
    },
    {
      name: "Collaboration Management",
      talents: true,
      managers: true,
      agencies: true,
    },
    {
      name: "Calendar Management",
      talents: true,
      managers: true,
      agencies: true,
    },
    {
      name: "Communication Management",
      talents: true,
      managers: true,
      agencies: true,
    },
    {
      name: "Sub Managers",
      talents: false,
      managers: false,
      agencies: true,
    },
  ];

  const plans: Plan[] = [
    { name: "Talents' Account", key: "talents" },
    { name: "Managers' Account", key: "managers" },
    { name: "Agencies Account", key: "agencies" },
  ];

  const FeatureIcon = ({ available }: { available: boolean }) => (
    <div className="flex justify-center">
      {available ? (
        <CircleCheck className="w-6 h-6" />
      ) : (
        <CircleX className="w-6 h-6" />
      )}
    </div>
  );

  return (
    <div className="py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="hidden lg:block">
          <div className="rounded-lg overflow-hidden">
            <div className="grid grid-cols-4">
              <div className="py-6">
                <h3 className="text-2xl font-medium text-primary-dark-yellow">
                  Features
                </h3>
              </div>
              {plans.map((plan, index) => (
                <div key={index} className="py-6 text-center">
                  <h3 className="text-2xl font-medium text-white/60">
                    {plan.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Features Rows */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-4 border-t border-gray-700"
              >
                <div className="py-6">
                  <span className="text-primary-dark-yellow/60 font-medium">
                    {feature.name}
                  </span>
                </div>
                <div className="py-6">
                  <FeatureIcon available={feature.talents} />
                </div>
                <div className="py-6">
                  <FeatureIcon available={feature.managers} />
                </div>
                <div className="py-6">
                  <FeatureIcon available={feature.agencies} />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-4 border-t border-gray-700 bg-gray-850">
              <div className="py-6"></div>
              {plans.map((plan: Plan, index: number) => (
                <div key={index} className="py-6 px-4">
                  <Button className="w-full opacity-80 hover:opacity-100 transition-opacity">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {plans.map((plan: Plan, planIndex: number) => (
            <div key={planIndex} className="bg-primary-gray rounded-lg ">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white text-center">
                  {plan.name}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                {features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-primary-dark-yellow/60 font-medium">
                      {feature.name}
                    </span>
                    <FeatureIcon available={feature[plan.key]} />
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-700">
                <Button className="w-full opacity-80 hover:opacity-100 transition-opacity">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
