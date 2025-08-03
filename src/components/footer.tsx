import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-gray text-white py-8 px-4 md:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={300}
                height={150}
                className="w-28 mb-5"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Do more in less with Husridge
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@husridge.com"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  contact@husridge.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Chat with Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} Husridge. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
