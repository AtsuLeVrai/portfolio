import "./globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: {
    default: "AtsuLeVrai | Full Stack Developer Portfolio",
    template: "%s | AtsuLeVrai",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Crafting digital experiences with a focus on performance and user experience.",
  keywords: [
    "AtsuLeVrai",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "AtsuLeVrai" }],
  creator: "AtsuLeVrai",
  publisher: "AtsuLeVrai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atsule-vrai.com",
    siteName: "AtsuLeVrai Portfolio",
    title: "AtsuLeVrai | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
