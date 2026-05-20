import type { Metadata } from "next";
import Script from "next/script";
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
  alternates: {
    canonical: "https://www.jogpro.net",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1333558018471897');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
