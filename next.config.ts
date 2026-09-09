import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Portfolio media and profile photos are uploaded to Cloudinary by
    // husridge-server (see src/services/cloudinary.ts there) — needed for
    // next/image on the public profile page (Phase 1 Step 6).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
