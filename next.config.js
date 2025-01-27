/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  output: 'standalone', // For Docker/Node.js deployments
  images: {
    domains: ['cngcifbnsuwqyuuqzsbs.supabase.co'],
  },
};
