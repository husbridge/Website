import { SectionData } from "@/types/features";

export const sectionsData: SectionData[] = [
  {
    id: "inquiry",
    title: "Inquiry Management",
    subtitle:
      "Simply sign up, set up your team, and see the difference in how you work together.",
    features: [
      {
        title: "Bookings Management",
        description:
          "Your Digital Booking Hub: Share your personalized Magic Link. Clients can view your profile, check your availability, and send a confirmed booking request directly to you.",
      },
      {
        title: "Proposal Management",
        description:
          "Centralized Proposal Management: Receive and review all incoming project inquiries and collaboration requests in one organized dashboard. Never miss a potential opportunity.",
      },
      {
        title: "Collaboration Management",
        description:
          "Partnership Requests: Use your Magic Link to attract and receive collaboration proposals from brands and other creators, expanding your professional network.",
        fullWidth: true,
      },
    ],
    hasButton: true,
  },
  {
    id: "schedule",
    title: "Schedule Management",
    subtitle:
      "Simply sign up, set up your team, and see the difference in how you work together.",
    features: [
      {
        title: "Calendar Management",
        description:
          "Integrated Calendar System: Automatically add confirmed events to your calendar and receive smart reminders. Sync across devices so you're always on top of your schedule.",
        fullWidth: true,
      },
    ],
    hasButton: true,
  },
  {
    id: "payment",
    title: "Payment Management",
    subtitle:
      "Simply sign up, set up your team, and see the difference in how you work together.",
    features: [
      {
        title: "Invoice Generation",
        description:
          "Instant Invoice Generation: Create and send branded, professional invoices in seconds directly from the platform.",
      },
      {
        title: "Request Payment",
        description:
          "Secure Payment Requests: A streamlined system for talents and their managers to request and track client payments efficiently. (Integrated payment processing coming soon)",
      },
    ],
    hasButton: true,
  },
  {
    id: "communication",
    title: "Robust Communication",
    subtitle:
      "Simply sign up, set up your team, and see the difference in how you work together.",
    features: [
      {
        title: "Messaging",
        description:
          "Unified Messaging: Communicate with all your clients and collaborators in one organized inbox, keeping every project's conversation seamless and searchable.",
        fullWidth: true,
      },
    ],
    hasButton: true,
  },
];
