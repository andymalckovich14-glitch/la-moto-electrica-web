import "../index.css";
import "../App.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://la-moto-electrica-web.vercel.app"),
  title: {
    default: "La Moto Eléctrica | Sitio Oficial",
    template: "%s | La Moto Eléctrica",
  },
  description: "Banda de Shoegaze y Post-Rock originaria de Anaco, Venezuela. Explora nuestra discografía, últimas noticias y contrataciones.",
  keywords: ["shoegaze", "post-rock", "banda", "venezuela", "anaco", "la moto electrica", "música independiente", "música venezolana"],
  authors: [{ name: "La Moto Eléctrica" }],
  openGraph: {
    title: "La Moto Eléctrica | Shoegaze & Post-Rock",
    description: "Paisajes sonoros desde Anaco, Venezuela. Escucha nuestros 7 lanzamientos, conoce a la banda y contacta para eventos.",
    url: "https://la-moto-electrica-web.vercel.app",
    siteName: "La Moto Eléctrica",
    images: [
      {
        url: "/images/close.jpg", // Foto que saldrá de portada al compartir el link
        width: 1200,
        height: 630,
        alt: "La Moto Eléctrica - Banda de Shoegaze",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Moto Eléctrica | Oficial",
    description: "Shoegaze y Post-Rock desde Anaco, Venezuela.",
    images: ["/images/close.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
