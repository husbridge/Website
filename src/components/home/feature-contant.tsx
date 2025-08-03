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
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
    },
    {
      icon: (
        <Image src="/tabler_2.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Proposal Management",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
    },
    {
      icon: (
        <Image src="/tabler_3.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Collaboration Management",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
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
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra
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
        <h3 className="font-semibold mb-2">Messaging</h3>
        <p className="text-neutral-400 text-sm">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra
        </p>
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
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
    },
    {
      icon: (
        <Image src="/tabler_2.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Manager Talent Management",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
    },
    {
      icon: (
        <Image src="/tabler_3.png" alt="Inquiry Icon" width={60} height={60} />
      ),
      title: "Self Talent Management",
      description:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et",
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
