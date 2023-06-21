/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    WORDPRESS_URL: process.env.WORDPRESS_URL,
  },
};

module.exports = nextConfig;
