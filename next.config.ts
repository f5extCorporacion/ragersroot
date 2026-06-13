import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      // Si también usas GitHub o otras autenticaciones, puedes agregar:
      // {
      //   protocol: "https",
      //   hostname: "avatars.githubusercontent.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "platform-lookaside.fbsbx.com", // Para Facebook
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;
