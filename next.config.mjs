/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ve-gallery',
  assetPrefix: '/ve-gallery/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
