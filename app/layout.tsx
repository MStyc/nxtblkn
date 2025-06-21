import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { AIAssistant } from "@/components/ai-assistant"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ScrollProgress } from "@/components/scroll-progress"
import { SmoothPageTransition } from "@/components/smooth-page-transition"
import { ParticleSystem } from "@/components/particle-system"
import { FloatingElements } from "@/components/floating-elements"
import { Notifications } from "@/components/Notifications"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NXT Balkan - Music Agency",
  description: "Revolutionary music agency specializing in Balkan music production, artist management, and promotion.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden antialiased`}>
        <ScrollProgress />
        <Navigation />
        <SmoothPageTransition />
        <main className="min-h-screen relative z-10">{children}</main>
        <AIAssistant />
        {/* Remove this line to disable the cursor: */}
        <AnimatedCursor />
        <ParticleSystem />
        <FloatingElements />
         <Notifications />
      </body>
    </html>
  )
}
