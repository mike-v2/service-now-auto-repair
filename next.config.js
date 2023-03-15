/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/service-now-auto-repair' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
