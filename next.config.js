// const withPWA = require('next-pwa')
// const settings = {
//     env: {
//         WORDPRESS_URL: process.env.WORDPRESS_URL
//     }
// }

// module.exports = process.env.NODE_ENV !== 'production' ? settings: withPWA(settings)

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WORDPRESS_URL: process.env.WORDPRESS_URL,
  },
};

module.exports = nextConfig;
