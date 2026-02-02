import ReactQueryProvider from "./lib/react-query";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crypto Assets Dashboard",
  description:
    "View and track cryptocurrency prices. Monitor digital assets and market trends in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ReactQueryProvider>
          {children}
          <Toaster />
        </ReactQueryProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
