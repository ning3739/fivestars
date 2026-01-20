import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FiveStars - Professional Cleaning Services in Queenstown",
  description: "Professional residential and commercial cleaning services in Queenstown, New Zealand. Fully insured, eco-friendly, and 100% satisfaction guaranteed.",
  icons: {
    icon: '/favicon.svg',
  },
};

/**
 * Root Layout Component
 * 
 * Provides the base layout structure for all pages including:
 * - Navbar at the top (fixed position)
 * - Main content area with proper spacing for fixed navbar
 * - Footer at the bottom
 * 
 * @validates Requirements 1.1 - Navigation bar displayed at top of all pages
 * @validates Requirements 8.1 - Footer displayed at bottom of all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Material Symbols - using display=swap for better performance */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Fixed Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area with padding-top for fixed navbar */}
        {/* Navbar height: h-16 (64px) on mobile, h-20 (80px) on md+ */}
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
