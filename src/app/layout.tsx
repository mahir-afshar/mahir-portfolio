import type { Metadata, Viewport } from "next";
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
  title: "Mahir Afshar Rohan | Aspiring Full-Stack Developer",
  description:
    "Personal developer portfolio of Mahir Afshar Rohan, based in Chattogram, Bangladesh. Focused on building modern web applications, responsive user interfaces, and full-stack solutions with Next.js, TypeScript, and React.",
  keywords: [
    "Mahir Afshar Rohan",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Chattogram",
    "Web Developer Bangladesh",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Mahir Afshar Rohan", url: "https://github.com/mahir-afshar" }],
  creator: "Mahir Afshar Rohan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/mahir-afshar",
    title: "Mahir Afshar Rohan | Aspiring Full-Stack Developer",
    description:
      "Building ideas into digital experiences. Explore projects, skills, and code crafted by Mahir Afshar Rohan.",
    siteName: "Mahir Afshar Rohan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahir Afshar Rohan | Aspiring Full-Stack Developer",
    description:
      "Building ideas into digital experiences with Next.js, React, TypeScript, and modern web technologies.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0c10] text-zinc-100 antialiased selection:bg-violet-600/30 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
