import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LumiMemo — Kenangan dalam Cahaya",
  description: "Lampu tidur custom dari foto orang tersayangmu. Hadirkan kenangan dalam cahaya yang hangat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
