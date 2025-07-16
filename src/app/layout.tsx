import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Section_Header from "@/components/shared/Section_Header";
import { Section_Footer } from "@/components/shared/Section_Footer";
import Script from "next/script";

export const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roboflow for Startups",
  description: "Roboflow supports startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVH03VCFTF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NVH03VCFTF');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Section_Header />
        {children}
        <Section_Footer />
      </body>
    </html>
  );
}
