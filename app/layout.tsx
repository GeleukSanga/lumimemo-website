import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LumiMemo — Kenangan dalam Cahaya",
  description: "Ubah foto orang tersayang jadi lampu tidur custom. Mulai Rp99.000, proses 3–5 hari, kirim se-Indonesia.",
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: "LumiMemo — Kenangan dalam Cahaya",
    description: "Ubah foto orang tersayang jadi lampu tidur custom. Mulai Rp99.000, proses 3–5 hari, kirim se-Indonesia.",
    url: "https://www.jogpro.net",
    siteName: "LumiMemo",
    images: [
      {
        url: "https://www.jogpro.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LumiMemo — Lampu Kenangan dari Fotomu",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumiMemo — Kenangan dalam Cahaya",
    description: "Ubah foto orang tersayang jadi lampu tidur custom. Mulai Rp99.000, kirim se-Indonesia.",
    images: ["https://www.jogpro.net/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
