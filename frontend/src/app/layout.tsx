import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MySite",
  description: "My Rest API Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased min-h-screen flex flex-col 
        `}
      >
        <header>
          <nav className="flex gap-4">
            <Link href="/">메인</Link>
            <Link href="/posts">목록</Link>
          </nav>
        </header>
        <main className="flex-grow flex flex-col gap-4 justify-center items-center">
          {children}
        </main>
        <footer>푸터</footer>
      </body>
    </html>
  );
}
