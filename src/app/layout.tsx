import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";

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
  metadataBase: new URL('https://fivestarscleaning.co.nz'),
  title: {
    default: "Five Stars Cleaning - Professional Cleaning Services in Queenstown",
    template: "%s | Five Stars Cleaning",
  },
  description: "Professional residential and commercial cleaning services in Queenstown, New Zealand. Fully insured, eco-friendly, and 100% satisfaction guaranteed. Call +64 22 503 0102.",
  keywords: ["cleaning services", "Queenstown cleaning", "house cleaning", "commercial cleaning", "eco-friendly cleaning", "New Zealand", "professional cleaners", "Airbnb cleaning", "deep cleaning"],
  authors: [{ name: "Five Stars Cleaning" }],
  creator: "Five Stars Cleaning",
  publisher: "Five Stars Cleaning",
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
    url: 'https://fivestarscleaning.co.nz',
    siteName: 'Five Stars Cleaning',
    title: 'Five Stars Cleaning - Professional Cleaning Services in Queenstown',
    description: 'Professional residential and commercial cleaning services in Queenstown, New Zealand. Fully insured, eco-friendly, and 100% satisfaction guaranteed.',
    images: [
      {
        url: '/images/move-in-out.jpg',
        width: 1200,
        height: 630,
        alt: 'Five Stars Cleaning Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Five Stars Cleaning - Professional Cleaning Services in Queenstown',
    description: 'Professional residential and commercial cleaning services in Queenstown, New Zealand.',
    images: ['/images/move-in-out.jpg'],
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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
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
        {/* Top Banner with Contact Info */}
        <TopBanner />
        
        {/* Sticky Navigation Bar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Floating Call Button - Mobile Only */}
        <FloatingCallButton />
      </body>
    </html>
  );
}
