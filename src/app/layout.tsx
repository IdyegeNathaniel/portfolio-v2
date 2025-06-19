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
  title: "Nathaniel Idyege",
  description: "Frontend Developer Portfolio",
};

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
