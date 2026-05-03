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
  title: "La Moto Eléctrica",
  description: "Shoegaze / Post-Rock desde Anaco, Venezuela. Banda originaria de Anaco, Venezuela.",
  openGraph: {
    title: "La Moto Eléctrica",
    description: "Shoegaze / Post-Rock desde Anaco, Venezuela.",
    type: "website",
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
