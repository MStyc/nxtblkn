"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { ShoppingCart, Star, PackageCheck, Shirt, X } from "lucide-react"

const products = [
  {
    id: 1,
    name: "NXT Balkan X Off White T-Shirt",
    description: "High quality merchandise designed for fans of Balkan beats and style.",
    price: "€49.99",
    image: "https://media.discordapp.net/attachments/1329893059147862109/1386035625760788685/716AC4D5-AE2F-48E8-9612-78D3CF0F5241.png?ex=68583dc4&is=6856ec44&hm=46baa76b084d2e0a32cdb588e8707af1b2e0f393b5310169ef8c6bdf9f4a4915&=&format=webp&quality=lossless&width=781&height=781",
    info: "Size: M, L, XL\nMaterial: 100% Cotton\nLimited edition print",
  },
  {
    id: 2,
    name: "NXT Balkan T-Shirt",
    description: "Exclusive design inspired by Balkan culture.",
    price: "€19.99",
    image: "https://media.discordapp.net/attachments/1329893059147862109/1386035625446084660/761C6F02-65DA-4F49-BE05-3301FBBF49BE.png?ex=68583dc4&is=6856ec44&hm=05aa76851c216aa1cf9c77e4fcaaa89f14e4d600378528d5b3a9b203a8143d94&=&format=webp&quality=lossless&width=520&height=781",
    info: "Size: S, M, L\nMaterial: Polyester blend\nUnisex style",
  },
  {
    id: 3,
    name: "NXT Balkan Hoodie",
    description: "Comfortable and stylish for everyday wear.",
    price: "€34.99",
    image: "https://media.discordapp.net/attachments/1329893059147862109/1386036263479541941/CEE37965-F3DA-44C7-873F-DC644A6AF32C.png?ex=68583e5c&is=6856ecdc&hm=8ddd3d44ba7afbb137ad4f692a607b24992169d8bac74328d8b6f96f3cc79497&=&format=webp&quality=lossless&width=590&height=885",
    info: "Size: M, L\nMaterial: Cotton mix\nAvailable in multiple colors",
  },
  // Add more products here...
]

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showBuyModal, setShowBuyModal] = useState(false)

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

  const openInfoModal = (product) => {
    setSelectedProduct(product)
    setShowInfoModal(true)
  }

  const closeInfoModal = () => {
    setShowInfoModal(false)
    setSelectedProduct(null)
  }

  const openBuyModal = () => {
    setShowBuyModal(true)
  }

  const closeBuyModal = () => {
    setShowBuyModal(false)
  }

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
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-6 hover:neon-glow cursor-pointer"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="rounded-xl object-cover w-full h-[300px]"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">{product.price}</span>
                  <Button
                    className="bg-white text-black hover:bg-gray-200 rounded-md"
                    onClick={() => openInfoModal(product)}
                  >
                    Info
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
            {[
              {
                icon: <Star size={48} />,
                title: "Premium Quality",
                desc: "We use only the finest materials to ensure every item feels as good as it looks.",
              },
              {
                icon: <PackageCheck size={48} />,
                title: "Fast Delivery",
                desc: "Worldwide shipping and quick handling so you can enjoy your gear sooner.",
              },
              {
                icon: <Shirt size={48} />,
                title: "Authentic Style",
                desc: "Unique designs inspired by the sounds, culture and vibes of the Balkans.",
              },
            ].map((info, index) => (
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

      {/* Info Modal */}
      {showInfoModal && selectedProduct && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
            onClick={closeInfoModal}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[110] p-4">
            <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-xl max-w-lg w-full p-6 relative glass-effect border border-white/20 shadow-lg">
              <button
                onClick={closeInfoModal}
                className="absolute top-4 right-4 text-white hover:text-gray-400"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-white">{selectedProduct.name}</h2>
              <p className="text-gray-300 whitespace-pre-line mb-4">{selectedProduct.info}</p>
              <p className="text-white font-semibold mb-6">{selectedProduct.price}</p>
              <Button className="bg-white text-black rounded-md" onClick={() => { closeInfoModal(); openBuyModal(); }}>
                Buy
              </Button>
            </div>
          </div>
        </>
      )}

      {/* Buy Modal */}
      {showBuyModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-[100]"
            onClick={closeBuyModal}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[110] p-4">
            <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-xl max-w-md w-full p-6 relative glass-effect border border-white/20 shadow-lg text-center">
              <button
                onClick={closeBuyModal}
                className="absolute top-4 right-4 text-white hover:text-gray-400"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-6 text-white">Request Buy</h2>
              <p className="text-gray-400 mb-8">Choose your preferred contact method:</p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/nxtbalkan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  Instagram
                </a>
                <a
                  href="mailto:contact@nxtbalkan.com"
                  className="bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
