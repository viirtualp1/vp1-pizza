import type { Metadata } from "next"
import { ReactNode } from "react"
import { Inter } from "next/font/google"

import { AppNav } from "@/components/AppNav"
import "@/assets/scss/main.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VpPizza",
  description: "VpPizza - delicious pizza",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppNav />
        {children}
      </body>
    </html>
  )
}
