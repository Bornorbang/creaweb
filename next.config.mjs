/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/insights/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "pngimg.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "brandlogos.net" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "www.citypng.com" },
      { protocol: "https", hostname: "cdn.freebiesupply.com" },
      { protocol: "https", hostname: "www.vhv.rs" },
      { protocol: "https", hostname: "w7.pngwing.com" },
      { protocol: "https", hostname: "www.websitedesigner.ng" },
    ],
  },
};

export default nextConfig;
