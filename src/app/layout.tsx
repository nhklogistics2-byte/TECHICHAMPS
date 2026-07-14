import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Techi Champs — Digital Solutions That Drive Real Business Growth",
  description:
    "Techi Champs is a premium digital agency helping businesses grow through branding, website development, mobile apps, digital marketing, and AI automation.",
  keywords: [
    "Techi Champs",
    "digital agency",
    "website development",
    "branding",
    "mobile app development",
    "digital marketing",
    "AI automation",
  ],
  authors: [{ name: "Techi Champs" }],
  openGraph: {
    title: "Techi Champs — Digital Solutions That Drive Real Business Growth",
    description:
      "Branding, websites, mobile apps, digital marketing, and AI automation for ambitious businesses.",
    siteName: "Techi Champs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techi Champs — Premium Digital Agency",
    description:
      "Branding, websites, mobile apps, digital marketing, and AI automation for ambitious businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-right" richColors />
      </body>
    </html>
  );
}
