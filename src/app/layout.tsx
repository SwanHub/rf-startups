import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Section_Header from "@/components/shared/Section_Header";
import { Section_Footer } from "@/components/shared/Section_Footer";

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
      <body className={`${inter.className} antialiased`}>
        <Section_Header />
        {children}
        <Section_Footer />
      </body>
    </html>
  );
}
