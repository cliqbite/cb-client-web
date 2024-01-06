/** @type {import('next').NextConfig} */
const path = require('path')
const withPWA = require('next-pwa')

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true
    // disable: process.env.NODE_ENV === 'development',
  }),
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/splash',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
