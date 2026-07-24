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
  title: "Zedrick S. Espiritu — Developer Portfolio",
  description:
    "Full-stack developer, CS student at OLOPSC. Building with React, Next.js, Supabase, Flutter, and Python.",
  keywords: [
    "Zedrick Espiritu",
    "portfolio",
    "full-stack developer",
    "React",
    "Next.js",
    "Flutter",
    "Python",
    "Supabase",
  ],
  openGraph: {
    title: "Zedrick S. Espiritu — Developer Portfolio",
    description:
      "Full-stack developer, CS student at OLOPSC. Building with React, Next.js, Supabase, Flutter, and Python.",
    type: "website",
  },
  icons: {
    icon: "/favicon.jpg",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
