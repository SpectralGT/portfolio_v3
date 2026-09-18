import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Bebas_Neue, Fira_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// 1. JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// 2. Bebas Neue (Single weight font, explicit '400' required)
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

// 3. Fira Sans
const firaSans = Fira_Sans({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Atharv Singh | AI Researcher",
  description:
    "The portfolio of Atharv Singh, an AI researcher and machine learning engineer building useful intelligent systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${bebasNeue.variable} ${firaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
