/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  basePath: '/pensjon/kalkulator-uinnlogget',
  experimental: {
    optimizePackageImports: ["@navikt/ds-react", "@navikt/aksel-icons"],

  }

};

export default nextConfig;
