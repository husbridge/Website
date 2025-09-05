import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

type FeatureContentProps = {
  activeTab: string;
};

export default function FeatureContent({ activeTab }: FeatureContentProps) {
  return (
    <div className="mt-10">
      {activeTab === "inquiry" && <FeatureContent1 />}
      {activeTab === "calendar" && <FeatureContent2 />}
      {activeTab === "messaging" && <FeatureContent3 />}
      {activeTab === "talent" && <FeatureContent4 />}
    </div>
  );
}

function FeatureContent1() {
  const inquiry = [
    {
      icon: (
        <Image src="/tabler_1.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Bookings Management",
      description:
        "Automate and seamlessly schedule appointments, bookings, events, and clients, and view details on your calendar for every confirmed booking.",
    },
    {
      icon: (
        <Image src="/tabler_2.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Proposal Management",
      description:
        "Receive and access proposals and contracts from clients, generate invoices and automate your booking process.",
    },
    {
      icon: (
        <Image src="/tabler_3.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Collaboration Management",
      description:
        "View and access collaboration requests from clients and colleagues.  Husridge enables you to share files and project updates.",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <Image
          src="/feature-image-4.svg"
          alt="feature"
          width={400}
          height={400}
        />
      </div>

      <div className="space-y-3 lg:space-y-6">
        {inquiry.map((feature) => (
          <div key={feature.title} className="flex gap-4 items-start">
            {feature.icon}
            <div className="md:text-xl">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
        <div className="pt-4">
          <Link
            href=""
            className="text-yellow-400 font-medium flex items-center gap-2 hover:underline"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureContent2() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="relative">
        <Image
          src="/feature-image-3.svg"
          alt="feature"
          width={400}
          height={400}
        />
        <Image
          src="/feature-image-5.svg"
          alt="feature"
          width={400}
          height={400}
          className="h-24 absolute bottom-0 -left-28 md:-left-24 lg:-left-40"
        />
        <Image
          src="/feature-image-6.svg"
          alt="feature"
          width={400}
          height={400}
          className="h-24 absolute top-0 -right-36 md:-right-32 lg:-right-16"
        />
      </div>

      <div className="space-y-6">
        <h3 className="font-semibold mb-2">Manage Schedule</h3>
        <p className="text-neutral-400 text-sm">
          Have total control of your calendar and upcoming events with an
          automated, online-synchronised and central scheduling.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

function FeatureContent3() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <Image
          src="/feature-image-1.svg"
          alt="feature"
          width={400}
          height={400}
        />
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Messaging</h3>
          <p className="text-neutral-400 text-sm">
            Husride enables clients to connect with you directly and use
            one-click messaging for business conversations through our
            simplified in-app messaging feature.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Magic Link</h3>
          <p className="text-neutral-400 text-sm">
            Magic Link is a shareable link that allows clients to reach talents
            and service providers. It also serves as an all-in-one professional
            portfolio and contact card.{" "}
          </p>
        </div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

function FeatureContent4() {
  const inquiry = [
    {
      icon: (
        <Image src="/tabler_1.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Agency Talent Management",
      description:
        "Our platform simplifies roster management and client relations by efficiently organising talent profiles, automating client communications, and generating proposals. Manage all your talent under one umbrella and assign sub-managers to specific talents for direct management.",
    },
    {
      icon: (
        <Image src="/tabler_2.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Manager Talent Management",
      description:
        "We provide a seamless way to collaborate on your talent projects, manage their calendar, and handle their day-to-day operations. We help you stay effortlessly organised and manage the business side of your talent.",
    },
    {
      icon: (
        <Image src="/tabler_3.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Self Talent Management",
      description:
        "An ultimate platform tool for freelancers and independent creators to manage and track their workflow like a pro, maximising revenue, time, and increasing work efficiency. It is a tool to find and book gigs, manage their own bookings, build and share a professional online dashboard through their personal magic link. ",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <Image
          src="/feature-image-2.svg"
          alt="feature"
          width={400}
          height={400}
        />
      </div>

      <div className="space-y-6">
        {inquiry.map((feature) => (
          <div key={feature.title} className="flex gap-4 items-start">
            {feature.icon}
            <div className="md:text-xl">
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
