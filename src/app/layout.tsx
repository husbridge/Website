import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WaitlistProvider from "@/contexts/waitlist-context";

export const metadata: Metadata = {
  title: "Home | Husridge",
  description: "Do more in less with Husridge",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-primary-black ${montserrat.className}`}>
        <WaitlistProvider>
          <Header />
          {children}
          <Footer />
        </WaitlistProvider>
      </body>
    </html>
  );
}
