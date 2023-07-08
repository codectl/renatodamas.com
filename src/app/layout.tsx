import "@/app/globals.scss"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `Renato Damas | Software Engineer in US`,
  description: `My name is Renato Damas, I am an experienced SWE proficient in Python, Java an TypeScript`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
