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

export const metadata: Metadata = {
  title: "Ayomide Olusesan | Full-Stack Software Engineer",
  description:
    "Final-year Software Engineering student building scalable full-stack web applications with Next.js, Node.js, and modern backend systems. Available for freelance work.",
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
