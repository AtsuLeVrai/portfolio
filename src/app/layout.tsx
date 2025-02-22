import "./globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "AtsuLeVrai | Portfolio",
  description: "AtsuLeVrai's portfolio",
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
