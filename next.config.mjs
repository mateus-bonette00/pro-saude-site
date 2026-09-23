/** @type {import('next').NextConfig} */
const buildStamp = process.env.BUILD_STAMP ?? String(Date.now())

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_STAMP: buildStamp,
  },
}

export default nextConfig
