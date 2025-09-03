"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import Link from "next/link";
import { ProfileIcon, IdCardIcon, UserGroupIcon } from "../icons";

interface FAQItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  isExpanded?: boolean;
}

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<string>("agencies");

  const faqItems: FAQItem[] = [
    {
      id: "agencies",
      icon: (
        <IdCardIcon
          width={30}
          height={30}
          {...(activeItem === "agencies" && { fillOpacity: 1 })}
        />
      ),
      title: "Talent Management Agencies",
      description:
        "Husride is a talent management platform designed for easy flow and modern management, enabling talent agencies to centralise their talent rosters and bookings, streamline workflows, and automate client proposals. Talent management agencies can also allocate talents under different agents based on expertise or recommendation for direct management.",
      image: "/faq-image-1.svg",
    },
    {
      id: "managers",
      icon: (
        <UserGroupIcon
          width={30}
          height={30}
          {...(activeItem === "managers" && { fillOpacity: 1 })}
        />
      ),
      title: "Talent Managers",
      description:
        "Freelance and non-agency managers can easily manage talent, coordinate schedules and client communication all in one place.",
      image: "/faq-image-2.svg",
    },
    {
      id: "talents",
      icon: (
        <ProfileIcon
          width={30}
          height={30}
          {...(activeItem === "talents" && { fillOpacity: 1 })}
        />
      ),
      title: "Talents",
      description:
        "As independent creators, creatives and freelancers, Husride is the self-management platform that puts you in control of your career, helps you to fine-tune booking processes, discover new talent recruiters, track business conversations, book your own gigs, send professional proposals, showcase your portfolio and manage your calendar.",
      image: "/faq-image-3.svg",
    },
  ];

  const toggleAccordion = (itemId: string) => {
    setActiveItem(activeItem === itemId ? "" : itemId);
  };

  const accordionVariants = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    visible: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % faqItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [faqItems.length]);

  const getCurrentImage = () => {
    return faqItems[currentImageIndex].image;
  };

  return (
    <div className="text-white py-16 md:py-32 lg:py-40 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Who can use Husridge?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`border-b transition-colors duration-300 ${
                  activeItem === item.id
                    ? "border-primary-yellow"
                    : "border-gray-700"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <motion.button
                  className={`w-full py-6 flex items-center justify-between text-left transition-colors duration-300 ${
                    activeItem === item.id
                      ? "text-primary-yellow"
                      : "text-white"
                  }`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="flex items-center space-x-4">
                    {item.icon}
                    <span className="text-lg md:text-2xl font-semibold">
                      {item.title}
                    </span>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-4">
                        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                          {item.description}
                        </p>
                        <Link
                          href=""
                          className="inline-flex items-center text-primary-yellow hover:text-primary-yellow/90 font-semibold transition-colors duration-300"
                        >
                          Learn More
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={getCurrentImage()}
                alt={faqItems[currentImageIndex]?.title || "FAQ Image"}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
