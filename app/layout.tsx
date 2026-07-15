import "./globals.css";

import { Providers } from "@/components/ThemeProvider";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
  title: "Sekelilingmu Docs",
  description: "IT Infrastructure & Cloud Engineer",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={GeistSans.className}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}