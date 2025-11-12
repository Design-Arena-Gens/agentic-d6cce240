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
  title: "Ink & Impact | Conversion Copywriting for SaaS & DTC",
  description:
    "Conversion copywriting studio crafting high-performing landing pages, lifecycle emails, and positioning systems for modern growth teams.",
  openGraph: {
    title: "Ink & Impact | Conversion Copywriting",
    description:
      "Launch campaigns, lifecycle sequences, and product stories built from voice of customer research.",
    url: "https://agentic-d6cce240.vercel.app",
    siteName: "Ink & Impact",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://agentic-d6cce240.vercel.app"),
  alternates: {
    canonical: "https://agentic-d6cce240.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
