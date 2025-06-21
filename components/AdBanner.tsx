"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Megaphone } from "lucide-react"

export function AdBanner() {
  return (
    <section className="py-12 px-6 mx-auto max-w-4xl fade-in glass-effect border-white/20 rounded-lg shadow-lg hover:neon-glow transition-all duration-300 my-20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-white">
          <Megaphone size={40} className="text-cyan-400 animate-pulse" />
          <div>
            <h3 className="text-2xl font-bold">Exclusive Offer!</h3>
            <p className="text-gray-400 max-w-md">
              Check out our latest merch drop — limited quantities available. Don’t miss out!
            </p>
          </div>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold min-w-[160px] rounded-lg shadow-md"
        >
          <Link href="/merch">Shop Now</Link>
        </Button>
      </div>
    </section>
  )
}
