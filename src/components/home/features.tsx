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
      label: (
        <p>
          Inquiry <br /> Management
        </p>
      ),
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
      label: (
        <p>
          Calendar <br /> Management
        </p>
      ),
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
      label: (
        <p>
          Easy <br /> Management
        </p>
      ),
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
      label: (
        <p>
          Talent <br /> Management
        </p>
      ),
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
        <div className="-mx-4 text-xs md:text-sm lg:text-base font-medium max-w-4xl md:mx-auto flex justify-between md:gap-10 md:mb-10 md:px-20 lg:px-0">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`md:w-20 space-y-2 flex flex-col items-center text-center cursor-pointer transition ${activeTab === tab.key ? "text-primary-yellow" : ""}`}
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
