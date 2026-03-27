import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Shuman | AE Solutions Hawaii",
  description: "Web Development, SEO, Meta Ads, Email Marketing, Social Media, Shopify, AI Automation",
  openGraph: {
    title: "Josh Shuman | AE Solutions Hawaii",
    description: "Web Development, SEO, Meta Ads, Email Marketing, Social Media, Shopify, AI Automation",
    url: "https://technical-rescue.vercel.app",
    siteName: "Josh Shuman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Shuman | AE Solutions Hawaii",
    description: "Web Development, SEO, Meta Ads, Email Marketing, Social Media, Shopify, AI Automation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
