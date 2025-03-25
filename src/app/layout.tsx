import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mad-store.com'),
  title: {
    default: 'M.A.D - Most Affordable Designs',
    template: '%s | M.A.D Store'
  },
  description: 'Premium fashion that doesn\'t break the bank. Discover affordable designer clothing at M.A.D.',
  keywords: ['fashion', 'affordable clothing', 'designer wear', 'premium fashion', 'M.A.D store'],
  authors: [{ name: 'M.A.D Store' }],
  creator: 'M.A.D Store',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mad-store.com',
    siteName: 'M.A.D Store',
    title: 'M.A.D - Most Affordable Designs',
    description: 'Premium fashion that doesn\'t break the bank. Discover affordable designer clothing at M.A.D.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'M.A.D Store - Most Affordable Designs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.A.D - Most Affordable Designs',
    description: 'Premium fashion that doesn\'t break the bank. Discover affordable designer clothing at M.A.D.',
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
