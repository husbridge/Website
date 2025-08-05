import Button from "@/components/button";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Husridge",
  description: "Do more in less with Husridge",
};

export default function page() {
  return (
    <main>
      <div className="bg-primary-gray bg-[url(/Blocks.png)] text-white py-20 md:py-36 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Need Help?
            <br />
            We&apos;re Always Here
          </h2>
          <p className="font-semibold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Contact us if you have any questions, information, or simply need
            assistance.
          </p>
        </div>
      </div>
      <div className="text-white py-20 md:py-28 lg:py-36 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            <div className="bg-primary-gray rounded-2xl p-8">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
                Send an Email
              </h3>
              <p className="mb-6 leading-relaxed">
                Reach out to us via our email address for support
              </p>
              <Button variant="outlined">contactus@husridge.com</Button>
            </div>

            {/* FAQs Card */}
            <div className="bg-primary-gray rounded-2xl p-8">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
                FAQs
              </h3>
              <p className="mb-6 leading-relaxed">
                Do you have questions? See our frequently asked questions
              </p>
              <Link
                href=""
                className="pb-4 border-b border-white text-primary-yellow hover:text-primary-yellow/80 font-medium transition-colors duration-300"
              >
                Go to FAQs
              </Link>
            </div>

            {/* Help Center Card */}
            <div className="bg-primary-gray rounded-2xl p-8">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
                Help Center
              </h3>
              <p className="mb-6 leading-relaxed">
                Do you have questions? See our frequently asked questions
              </p>
              <Button variant="outlined">Go to Help Center</Button>
            </div>
            <div className="bg-primary-gray rounded-2xl p-8">
              <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-white">
                Follow us on Socials
              </h3>
              <p className="mb-6 leading-relaxed">
                Follow us on our socials to stay up-to-date on latest news and
                information
              </p>
              <div className="flex space-x-4">
                <Link
                  href=""
                  className="hover:text-primary-yellow  transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href=""
                  className="hover:text-primary-yellow  transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href=""
                  className="hover:text-primary-yellow  transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href=""
                  className="hover:text-primary-yellow  transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
