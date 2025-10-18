const withContentlayer = require('next-contentlayer').withContentlayer
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true }
module.exports = withContentlayer(nextConfig)
