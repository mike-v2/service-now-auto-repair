/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/service-now-auto-repair' : '',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
