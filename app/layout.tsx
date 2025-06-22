import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { LoadingScreen } from "@/components/loading-screen"
import { NotificationToasts } from "@/components/notification-toasts"
import { LiveSupportSystem } from "@/components/live-support-system"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NXT Balkan - Revolutionizing Balkan Music",
  description: "Music production, artist management, and promotion agency specializing in Balkan music.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          <CustomCursor />
          <ScrollToTop />
          <Navigation />
          <main>{children}</main>
          <NotificationToasts />
          <LiveSupportSystem />
        </ThemeProvider>
      </body>
    </html>
  )
}
