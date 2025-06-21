"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Megaphone } from "lucide-react"
import Image from "next/image"

export function AdBanner() {
  return (
    <section className="relative my-20 rounded-xl overflow-hidden group shadow-xl">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/merch-banner.jpg" // zamenjaj s tvojo sliko
          alt="Merch Drop"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4] group-hover:scale-105 transition-transform duration-1000 ease-in-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in-up">
        <div className="flex items-center gap-6 text-white max-w-2xl">
          <Megaphone size={48} className="text-cyan-400 animate-pulse shrink-0" />
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">🔥 Limited Edition Drop</h2>
            <p className="text-lg text-gray-300">
              Discover exclusive merch inspired by Balkan beats — available for a short time only.
            </p>
          </div>
        </div>

        <Button
          asChild
          size="lg"
          className="bg-white hover:bg-cyan-300 text-black font-bold text-lg rounded-lg px-8 py-4 shadow-lg transition-all duration-300"
        >
          <Link href="/merch">Shop Now</Link>
        </Button>
      </div>
    </section>
  )
}
