import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LiveChatWidget } from "@/components/live-chat-widget"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Empire Contracting Outdoors | Premier Outdoor Contractor in Northern Virginia",
  description:
    "Transform your outdoor dreams into stunning realities. Expert deck, pool, fence, patio, and outdoor kitchen installation serving Northern Virginia. Licensed & insured with 5-star ratings.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`font-sans antialiased`}>
        {children}
        <LiveChatWidget />
        <Analytics />
      </body>
    </html>
  )
}
