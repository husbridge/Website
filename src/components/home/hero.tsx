import Button from "../button";
import Image from "next/image";
import { CalendarIcon, MessageIcon, ChatQuestionIcon } from "../icons";

export default function HeroSection() {
  return (
    <section className="text-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Free Talent Booking &
            <br />
            <span className="text-white">Management platform</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Receive, manage, and automate your bookings with Husridge.
          </p>

          <Button className="mb-12 px-8 py-4 md:px-20">Get Started</Button>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-8 lg:gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <CalendarIcon />
              <span>Calendar Management</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ChatQuestionIcon />
              <span>Inquiry Management</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageIcon />
              <span>Messaging</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Image
            src="/dashboard.svg"
            alt="dashboard"
            width={300}
            height={150}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
