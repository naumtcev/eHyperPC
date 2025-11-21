import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/Header";
import { ReactNode } from "react";
import "./globals.css";
import { WrapperContainer } from "@/components/widgets/WrapperContainer";
import { MobileMenu } from "@/components/widgets/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyperPC",
  description: "Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} pt-[80]`}>
        <Header />
        {children}
        <MobileMenu />
        <Footer />
      </body>
    </html>
  );
}
