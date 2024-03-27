import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/assets/scss/main.scss";

export const metadata: Metadata = {
  title: "VpPizza",
  description: "VpPizza - delicious pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
