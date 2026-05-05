import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://la-moto-electrica-web.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Protegemos el panel de administración de los buscadores
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
