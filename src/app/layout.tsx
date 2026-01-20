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
  metadataBase: new URL('https://fivestars.co.nz'),
  title: {
    default: "FiveStars - Professional Cleaning Services in Queenstown",
    template: "%s | FiveStars Cleaning",
  },
  description: "Professional residential and commercial cleaning services in Queenstown, New Zealand. Fully insured, eco-friendly, and 100% satisfaction guaranteed. Call +64 22 503 0102.",
  keywords: ["cleaning services", "Queenstown cleaning", "house cleaning", "commercial cleaning", "eco-friendly cleaning", "New Zealand", "professional cleaners"],
  authors: [{ name: "FiveStars Cleaning" }],
  creator: "FiveStars Cleaning",
  publisher: "FiveStars Cleaning",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://fivestars.co.nz',
    siteName: 'FiveStars Cleaning',
    title: 'FiveStars - Professional Cleaning Services in Queenstown',
    description: 'Professional residential and commercial cleaning services in Queenstown, New Zealand. Fully insured, eco-friendly, and 100% satisfaction guaranteed.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'FiveStars Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiveStars - Professional Cleaning Services in Queenstown',
    description: 'Professional residential and commercial cleaning services in Queenstown, New Zealand.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
