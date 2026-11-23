import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0038ff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.zeroij.workers.dev"),
  title: "Sujal Birwadkar — Data Engineer & Vibe Coder",
  description:
    "Data Engineer, Data Analyst & Vibe Coder — Sujal Birwadkar. Data pipelines, CLI tools and AI/ML experiments at the edge of reliable systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Sujal Birwadkar — Data Engineer & Vibe Coder",
    description:
      "Data pipelines, CLI tools and AI/ML experiments at the edge of reliable systems.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Sujal Birwadkar — Data Engineer & Vibe Coder" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Birwadkar — Data Engineer & Vibe Coder",
    description:
      "Data pipelines, CLI tools and AI/ML experiments at the edge of reliable systems.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
      { url: "/legacy-favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}