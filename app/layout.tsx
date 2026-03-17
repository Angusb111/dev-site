import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
});

export const metadata: Metadata = {
  title: "Angus Bodle",
  description: "Welcome to Angusbodle.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
>
        {children}
      </body>
    </html>
  );
}
