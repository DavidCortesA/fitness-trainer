import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitPro Trainer - Transforma Tu Cuerpo y Mente",
  description: "Entrenador personal profesional. Planes personalizados, nutrición y transformación completa.",
  keywords: ["entrenador personal", "fitness", "gym", "nutrición", "transformación", "salud", "bienestar", "entrenamiento", "coaching", "planes personalizados", "rutinas de ejercicio", "dieta saludable", "vida sana", "motivación fitness"],
  authors: [{ name: "FitPro Trainer", url: "https://fitness-trainer-rouge.vercel.app/" }],
  openGraph: {
    title: "FitPro Trainer - Transforma Tu Cuerpo y Mente",
    description: "Entrenador personal profesional. Planes personalizados, nutrición y transformación completa.",
    url: "https://fitness-trainer-rouge.vercel.app/",
    siteName: "FitPro Trainer",
    images: [
      {
        url: "./og-image.png",
        width: 1200,
        height: 630,
        alt: "FitPro Trainer",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitPro Trainer - Transforma Tu Cuerpo y Mente",
    description: "Entrenador personal profesional. Planes personalizados, nutrición y transformación completa.",
    images: ["https://fitness-trainer-rouge.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://fitness-trainer-rouge.vercel.app/",
  },
  manifest: "/manifest.json",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
