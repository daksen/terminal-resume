import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Tavares — Terminal Portfolio",
  description: "Frontend Developer. Building responsive and intuitive applications for 6+ years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-terminal-surface text-terminal-text font-mono">
        <a
          href="#main-content"
          className="fixed top-4 left-4 z-50 -translate-y-20 focus-visible:translate-y-0 transition-transform duration-150 ease-out px-4 py-2 bg-terminal-surface text-terminal-cyan text-sm font-mono rounded border border-terminal-cyan outline-none"
        >
          Skip to main content
        </a>
        <main id="main-content" className="flex flex-col flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
