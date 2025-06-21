"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AdBanner() {
  return (
    <section className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl my-20 fade-in">
      {/* Background Image */}
      <div
        className="h-[240px] w-full bg-cover bg-center animate-fade-in"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542223616-90b42e5a2fba?fit=crop&w=600&h=240&auto=format')",
        }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col sm:flex-row items-center justify-between px-6 py-6">
        <div className="text-white max-w-xl">
          <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">🔥 Limited-Time Offer</h3>
          <p className="text-sm text-gray-200">
            Discover our exclusive Balkan merch drop — premium quality, bold style, and limited stock!
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="mt-4 sm:mt-0 bg-white text-black hover:bg-gray-200 font-bold shadow-lg transition-all"
        >
          <Link href="/merch">Explore Now</Link>
        </Button>
      </div>
    </section>
  )
}
