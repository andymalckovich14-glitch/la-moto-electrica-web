/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir el acceso por red local al HMR (Hot Module Replacement)
  allowedDevOrigins: ['192.168.1.8', 'localhost'],

  // Configurar optimización de imágenes de Next.js
  images: {
    // Permitir formatos modernos optimizados
    formats: ['image/avif', 'image/webp'],
    // Tamaños de dispositivo para imágenes responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
