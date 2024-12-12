import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import "./embla.css"
import "aos/dist/aos.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MD RIEAD MIA - Frontend Developer",
  description: "Personal portfolio website of MD RIEAD MIA, Frontend Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

