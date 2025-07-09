import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Nathaniel Idyege - Frontend Developer",
  description: "Portfolio of a Frontend Developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords: ['Frontend Developer', 'Software Engineer', 'React Developer', 'Next.js', 'Javascript', 'Portfolio', 'Web Developer', 'Nathaniel Idyege'],
  authors: [{ name: 'Nathaniel Idyege', }],
  creator: 'Nathaniel Idyege',
  publisher: 'Nathaniel Idyege',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://idyege-portfolio.vercel.app/',
    title: 'Nathaneiel Idyege - Frontend Developer Portfolio',
    description: 'Frontend Developer with experience in building fast, responsive, accessible web applications.', 
    siteName: 'Nathaniel Idyege Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nathaniel Idyege - Frontend Developer',
      }
    ],
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
  }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
