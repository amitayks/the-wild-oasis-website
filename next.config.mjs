/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tvgfuvybatpoonhnwnqy.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // export: {
  //   type: "static",
  //   outdir: "dist",
  // },
  // output: "export",
};

export default nextConfig;
