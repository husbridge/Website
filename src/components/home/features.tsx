"use client";

import { useState } from "react";
import FeatureContent from "./feature-contant";
import {
  CalendarIcon,
  ChatQuestionIcon,
  MessageIcon,
  UsersIcon,
} from "../icons";

export default function Features() {
  const [activeTab, setActiveTab] = useState("inquiry");

  const tabs = [
    {
      key: "inquiry",
      label: "Inquiry Management",
      icon: (
        <ChatQuestionIcon
          width={25}
          height={25}
          {...(activeTab === "inquiry" && { fill: "#FFC107" })}
          fillOpacity={1}
        />
      ),
    },
    {
      key: "calendar",
      label: "Calendar Management",
      icon: (
        <CalendarIcon
          width={25}
          height={25}
          {...(activeTab === "calendar" && { fill: "#FFC107" })}
          fillOpacity={1}
        />
      ),
    },
    {
      key: "messaging",
      label: "Easy Messaging",
      icon: (
        <MessageIcon
          width={25}
          height={25}
          {...(activeTab === "messaging" && { stroke: "#FFC107" })}
          strokeOpacity={1}
        />
      ),
    },
    {
      key: "talent",
      label: "Talent Management",
      icon: (
        <UsersIcon
          width={25}
          height={25}
          {...(activeTab === "talent" && { fill: "#FFC107" })}
        />
      ),
    },
  ];

  return (
    <section className="text-white py-16 md:py-32 lg:py-40 bg-primary-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
          With Husridge, it only takes a magic link to manage Talents and
          Businesses
        </h2>

        <div className="text-sm lg:text-base font-medium max-w-4xl mx-auto flex justify-center md:justify-between gap-10 mb-10 flex-wrap md:px-20 lg:px-0">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-20 space-y-2 flex flex-col items-center text-center cursor-pointer transition ${
                activeTab === tab.key ? "text-primary-yellow" : "text-"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <span
                className={`h-[1px] w-24 lg:w-36 ${activeTab === tab.key ? "bg-primary-yellow" : "bg-transparent"} rounded-full`}
              ></span>
            </div>
          ))}
        </div>

        <FeatureContent activeTab={activeTab} />
      </div>
    </section>
  );
}
