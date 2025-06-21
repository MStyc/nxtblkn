"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdBanner2() {
  return (
    <section className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl my-20 fade-in">
      {/* Background Image */}
      <div
        className="h-[240px] w-full bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: "url('https://media.discordapp.net/attachments/1329893059147862109/1386024580140896297/standard_1.gif?ex=6858337a&is=6856e1fa&hm=7315a1ffead04343dfa70769fd47935e956e1dbc952bda622d474a66ca29ad0b&=')",
        }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col sm:flex-row items-center justify-between px-6 py-6">
        <div className="text-white max-w-xl">
          <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">🔥 Devito Album (Nema Spavanja)</h3>
          <p className="text-sm text-gray-200">
            Devito drop his new (2025) album "Nema Spavanja"! 
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="mt-4 sm:mt-0 bg-white text-black hover:bg-gray-200 font-bold shadow-lg transition-all"
        >
          <Link href="/merch">Check Album</Link>
        </Button>
      </div>
    </section>
  )
}
