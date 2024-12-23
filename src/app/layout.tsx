import type { Metadata } from "next"
import { ReactNode } from "react"

import { AppNav } from "@/components/AppNav"
import "@/assets/scss/main.scss"

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
      <body>
        <AppNav />
        {children}
      </body>
    </html>
  )
}
