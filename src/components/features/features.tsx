// "use client";

// import React, { useEffect, useRef, useState } from "react";

// // Move/type interfaces before sectionsData so we can annotate the data properly
// interface Feature {
//   title: string;
//   description: string;
//   fullWidth?: boolean;
// }

// interface SectionData {
//   id: string;
//   title?: string;
//   subtitle?: string;
//   features?: Feature[];
//   hasButton?: boolean;
//   className?: string;
// }

// // Annotate sectionsData with SectionData[] to ensure theme is typed as "dark" | "light"
// const sectionsData: SectionData[] = [
//   {
//     id: "inquiry",
//     title: "Inquiry Management",
//     subtitle:
//       "Simply sign up, set up your team, and see the difference in how you work together.",
//     features: [
//       {
//         title: "Bookings Management",
//         description:
//           "Jump into pre-built layouts and start crafting faster than any other templates.",
//       },
//       {
//         title: "Proposal Management",
//         description:
//           "Jump into pre-built layouts and start crafting faster than any other templates.",
//       },
//       {
//         title: "Collaboration Management",
//         description:
//           "Jump into pre-built layouts and start crafting faster than any other templates.",
//         fullWidth: true,
//       },
//     ],
//     hasButton: true,
//   },
//   {
//     id: "middle",
//     subtitle:
//       "Simply sign up, set up your team, and see the difference in how you work together.",
//     hasButton: true,
//   },
//   {
//     id: "payment",
//     title: "Payment Management",
//     subtitle:
//       "Simply sign up, set up your team, and see the difference in how you work together.",
//     features: [
//       {
//         title: "Invoice Generation",
//         description:
//           "Jump into pre-built layouts and start crafting faster than any other templates.",
//       },
//       {
//         title: "Request Payment",
//         description:
//           "Jump into pre-built layouts and start crafting faster than any other templates.",
//       },
//     ],
//     hasButton: true,
//   },
//   {
//     id: "communication",
//     title: "Robust COmmunicaton",
//     subtitle:
//       "Simply sign up, set up your team, and see the difference in how you work together.",
//     features: [
//       {
//         title: "Messaging",
//         description:
//           "Jump into pre-built layouts and start crafting faster than any other templates.",
//         fullWidth: true,
//       },
//     ],
//     hasButton: true,
//   },
// ];

// interface SectionProps {
//   section: SectionData;
//   index: number;
//   isSticky: boolean;
// }

// const Section: React.FC<SectionProps> = ({ section, isSticky }) => {
//   return (
//     <div
//       className={`transition-all duration-300 ${
//         isSticky ? "sticky top-0" : ""
//       }`}
//     >
//       <div className="container mx-auto px-8 py-16 min-h-screen flex flex-col justify-center">
//         <div className="max-w-6xl mx-auto w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Left column */}
//             <div>
//               {section.title && (
//                 <h2 className="text-5xl font-light mb-6 leading-tight">
//                   {section.title}
//                 </h2>
//               )}
//               {section.subtitle && (
//                 <p className={`${subtitleColor} text-lg leading-relaxed`}>
//                   {section.subtitle}
//                 </p>
//               )}
//             </div>

//             {/* Right column - Features */}
//             <div className="space-y-8">
//               {section.features && (
//                 <div
//                   className={`grid gap-8 ${section.features.some((f) => f.fullWidth) ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}
//                 >
//                   {section.features.map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className={feature.fullWidth ? "md:col-span-2" : ""}
//                     >
//                       <h3 className="text-xl font-medium mb-3">
//                         {feature.title}
//                       </h3>
//                       <p className={`leading-relaxed`}>
//                         {feature.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {section.hasButton && (
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-full transition-colors duration-200">
//                   Get Started
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function StackedScrollSections() {
//   const [activeSection, setActiveSection] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const scrollTop = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       const sectionIndex = Math.floor(scrollTop / viewportHeight);

//       setActiveSection(Math.min(sectionIndex, sectionsData.length - 1));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={containerRef} className="relative min-h-screen">
//       {sectionsData.map((section, index) => (
//         <section
//           key={index}
//           className="grid grid-cols-1 lg:grid-cols-[441px_1fr] gap-12 items-start max-w-7xl mx-auto px-8 py-16"
//         >
//           <div className="text-white">
//             <h2>{section.title}</h2>
//             <p>{section.subtitle}</p>
//           </div>
//         </section>
//         // <Section
//         //   key={section.id}
//         //   section={section}
//         //   index={index}
//         //   isSticky={index < sectionsData.length - 1}
//         // />
//       ))}
//     </section>
//   );
// }
