/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.120.147.238:8000/:path*", // HTTP proxy
      },
    ];
  },
};

module.exports = nextConfig;
