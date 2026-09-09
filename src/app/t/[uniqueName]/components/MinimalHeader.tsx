import Image from "next/image";
import Link from "next/link";

// Public profile pages are what buyers land on directly (shared links,
// QR codes, etc.) — the marketing nav (Pricing/Contact/Features/Sign
// In/Get Started) doesn't belong here, so this route gets its own
// minimal header instead of reusing the marketing Header component.
export default function MinimalHeader() {
  return (
    <header className="py-6 px-4 md:px-8">
      <Link href="/" className="inline-block">
        <Image
          src="/logo.svg"
          alt="Husridge"
          width={300}
          height={150}
          className="w-20"
        />
      </Link>
    </header>
  );
}
