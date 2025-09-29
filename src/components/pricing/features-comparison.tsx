"use client";

import { CircleCheck, CircleX } from "lucide-react";
import Button from "../button";
import { useWaitlist } from "@/contexts/waitlist-context";
import { Feature, Plan } from "@/types";

export function FeaturesComparison() {
  const { toggleModal } = useWaitlist();

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
                  <Button
                    className="w-full opacity-80 hover:opacity-100 transition-opacity"
                    onClick={toggleModal}
                  >
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
                <Button
                  className="w-full opacity-80 hover:opacity-100 transition-opacity"
                  onClick={toggleModal}
                >
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
