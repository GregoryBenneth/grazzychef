import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grazielle Gabriela | Personal Chef",
  description:
    "Experiências gastronômicas únicas no conforto da sua casa. Cardápios sob medida, eventos e jantares memoráveis com Personal Chef Grazielle Gabriela.",
  openGraph: {
    title: "Grazielle Gabriela | Personal Chef",
    description:
      "Experiências gastronômicas únicas no conforto da sua casa. Cardápios sob medida, eventos e jantares memoráveis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
