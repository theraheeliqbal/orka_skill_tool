import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Oswald } from 'next/font/google';
import { Raleway } from "next/font/google";

import "./globals.css";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'] // Array for multiple weights
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'] // Array for multiple weights
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'] // Array for multiple weights
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway-sans',
  weight: ['400', '500', '600', '700'] // Array for multiple weights
});


export const metadata: Metadata = {
  title: "Take Survey",
  description: "Test your skill level with our survey test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body lang="en"
        className={`${inter.variable} ${openSans.variable} ${raleway.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
