// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
 /** @type{import('next').NextConfig} */
const nextConfig ={
  images : {
    domains : ['cdn.sanity.io'],
  },
  eslint:{
ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig