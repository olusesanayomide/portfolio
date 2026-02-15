import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactLinks from "@/components/ContactLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Ayomide Olusesan | Full-Stack Software Engineer",
    template: "%s | Ayomide Olusesan",
  },
  description:
    "Final-year Software Engineering student building scalable, secure full-stack web applications with Next.js, Node.js, and modern backend systems. Available for freelance work.",
  keywords: [
    "Ayomide Olusesan",
    "Full-Stack Software Engineer",
    "Software Engineering Student",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Nest.js",
    "PostgreSQL",
    "Portfolio",
  ],
  authors: [{ name: "Ayomide Olusesan" }],
  creator: "Ayomide Olusesan",
  publisher: "Ayomide Olusesan",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Ayomide Olusesan | Full-Stack Software Engineer",
    description:
      "Final-year Software Engineering student building scalable, secure full-stack web applications with Next.js, Node.js, and modern backend systems.",
    url: "/",
    siteName: "Ayomide Olusesan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ayomide Olusesan | Full-Stack Software Engineer",
    description:
      "Final-year Software Engineering student building scalable, secure full-stack web applications with Next.js, Node.js, and modern backend systems.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-24`}
      >
        <Navbar />
        {children}
        <ContactLinks />
        <Footer />
      </body>
    </html>
  );
}
