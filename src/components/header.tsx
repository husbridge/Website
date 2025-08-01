"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./button";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/sign-in", label: "Sign In" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary-black text-white py-4 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <LinkItem
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary-yellow transition-colors font-medium"
              >
                {link.label}
              </LinkItem>
            ))}
          </nav>

          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={300}
                height={150}
                className="w-28"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <LinkItem
              href="/sign-in"
              className="text-white hover:text-primary-yellow transition-colors font-medium"
            >
              Sign In
            </LinkItem>
            <Link href="/register">
              <Button variant="outlined">Get Started</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Sliding Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-primary-black z-50 p-6 space-y-4"
            >
              <div className="flex justify-end">
                <button onClick={closeMenu} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>

              {navLinks.map((link) => (
                <LinkItem
                  key={link.href}
                  href={link.href}
                  className="block text-white hover:text-primary-yellow transition-colors font-medium py-2"
                  onClick={closeMenu}
                >
                  {link.label}
                </LinkItem>
              ))}

              <Link href="/register">
                <Button
                  className="w-full"
                  onClick={closeMenu}
                  variant="outlined"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function LinkItem({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div>
      <Link href={href}>
        <span className={className} onClick={onClick}>
          {children}
        </span>
      </Link>
    </div>
  );
}
