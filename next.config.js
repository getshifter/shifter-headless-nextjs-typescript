/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    WORDPRESS_URL: process.env.WORDPRESS_URL,
  },
};

module.exports = nextConfig;
