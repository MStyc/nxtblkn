"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ShoppingCart, Shirt, Star, PackageCheck } from "lucide-react"

export default function ShopPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen pt-20 animated-bg">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Shop NXT Balkan</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our exclusive collection of premium merchandise that represents the essence of Balkan music culture.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-6 hover:neon-glow"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <Image
                    src={`/products/product${item}.webp`}
                    alt={`Product ${item}`}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-[300px]"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Product Name {item}</h3>
                <p className="text-gray-400 mb-4">High quality merchandise designed for fans of Balkan beats and style.</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">€29.99</span>
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-md">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto text-center fade-in opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Shop With Us?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We bring you quality, style, and a touch of the Balkans in every piece.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Star size={48} />, title: "Premium Quality",
              desc: "We use only the finest materials to ensure every item feels as good as it looks."
            }, {
              icon: <PackageCheck size={48} />, title: "Fast Delivery",
              desc: "Worldwide shipping and quick handling so you can enjoy your gear sooner."
            }, {
              icon: <Shirt size={48} />, title: "Authentic Style",
              desc: "Unique designs inspired by the sounds, culture and vibes of the Balkans."
            }].map((info, index) => (
              <Card
                key={index}
                className="glass-effect border-white/20 p-8 text-center fade-in opacity-0 translate-y-10 transition-all duration-1000"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-white mb-6 mx-auto">{info.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{info.title}</h3>
                <p className="text-gray-400">{info.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
