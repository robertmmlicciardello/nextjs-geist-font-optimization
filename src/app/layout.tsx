import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "vPan VPN - Secure VPN with Rewards",
  description: "Protect your privacy, unlock content, and earn rewards while you browse. Join thousands of satisfied users worldwide.",
  keywords: "vpn, security, privacy, rewards, gaming, points, secure browsing",
  authors: [{ name: "vPan VPN" }],
  openGraph: {
    title: "vPan VPN - Secure VPN with Rewards",
    description: "Protect your privacy, unlock content, and earn rewards while you browse.",
    type: "website",
    locale: "en_US",
    siteName: "vPan VPN"
  },
  twitter: {
    card: "summary_large_image",
    title: "vPan VPN - Secure VPN with Rewards",
    description: "Protect your privacy, unlock content, and earn rewards while you browse."
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#1E293B" // dark blue/gray to match our theme
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
