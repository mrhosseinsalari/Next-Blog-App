/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.next-blog-app.ir",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // experimental: {
  //   ppr: true, => STATIC + DYNAMIC => PPR
  // },
};

export default nextConfig;
