/** @type {import('next').NextConfig} */
require("dotenv").config

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || "",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

module.exports = nextConfig
