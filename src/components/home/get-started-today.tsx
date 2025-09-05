import Image from "next/image";
import Button from "../button";

export default function GetStartedToday() {
  return (
    <div className="text-white py-16 md:py-32 lg:py-40 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-[32px] font-bold mb-8 leading-tight">
            Get Started Today to begin focusing on{" "}
            <br className="hidden md:block" />
            what Matters
          </h2>
          <Button>Get Started for free</Button>
        </div>

        <div className="flex justify-center items-end space-x-6 md:space-x-10 lg:space-x-16">
          <div className="w-48 h-72 md:w-fit md:h-fit -rotate-3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/get-started-today-1.svg"
              alt="Performer on stage"
              className="w-full h-full object-cover"
              width={300}
              height={150}
            />
          </div>

          <div className="-translate-y-5 w-52 h-80 md:w-fit md:h-fit rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/get-started-today-2.svg"
              alt="Business professional"
              className="w-full h-full object-cover"
              width={300}
              height={150}
            />
          </div>

          <div className="w-48 h-72 md:w-fit md:h-fit rotate-3 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/get-started-today-3.svg"
              alt="Entertainment professional"
              className="w-full h-full object-cover"
              width={300}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
