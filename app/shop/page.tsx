"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Star, PackageCheck, Shirt } from "lucide-react"

type Product = {
  id: number
  name: string
  price: string
  description: string
  image: string
  size: string
  color: string
}

export default function ShopPage() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "NXT Balkan Hoodie",
      price: "€39.99",
      description: "Comfy hoodie with NXT Balkan logo, perfect for chilly nights.",
      image: "/products/hoodie.webp",
      size: "S, M, L, XL",
      color: "Black with holographic print",
    },
    {
      id: 2,
      name: "Balkan Beats T-Shirt",
      price: "€24.99",
      description: "Classic T-shirt featuring Balkan Beats graphic.",
      image: "/products/tshirt.webp",
      size: "S, M, L, XL",
      color: "White or Black",
    },
    {
      id: 3,
      name: "NXT Balkan Cap",
      price: "€19.99",
      description: "Adjustable cap with embroidered logo.",
      image: "/products/cap.webp",
      size: "One size fits all",
      color: "Black",
    },
    // dodaj lahko več produktov tukaj
  ])

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showBuyMenu, setShowBuyMenu] = useState(false)

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

  function openInfo(product: Product) {
    setSelectedProduct(product)
    setShowInfoModal(true)
    setShowBuyMenu(false)
  }

  function closeInfo() {
    setShowInfoModal(false)
    setSelectedProduct(null)
    setShowBuyMenu(false)
  }

  function openBuyMenu() {
    setShowBuyMenu(true)
  }

  function closeBuyMenu() {
    setShowBuyMenu(false)
  }

  return (
    <div className="min-h-screen pt-20 animated-bg relative">
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
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-6 hover:neon-glow"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-[300px]"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">{product.price}</span>
                  <Button
                    onClick={() => openInfo(product)}
                    className="bg-white text-black hover:bg-gray-200 rounded-md"
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
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeInfo}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{selectedProduct.name}</h3>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={400}
              height={400}
              className="rounded-lg mb-4 object-cover w-full h-[300px]"
            />
            <p className="text-gray-400 mb-2">{selectedProduct.description}</p>
            <p className="text-gray-400 mb-2">
              <strong>Size:</strong> {selectedProduct.size}
            </p>
            <p className="text-gray-400 mb-6">
              <strong>Color:</strong> {selectedProduct.color}
            </p>
            <div className="flex justify-end gap-4">
              <Button
                onClick={openBuyMenu}
                className="bg-white text-black hover:bg-gray-200 rounded-md"
              >
                Buy
              </Button>
              <Button
                onClick={closeInfo}
                variant="outline"
                className="!border-white text-white hover:bg-white hover:text-black rounded-md"
              >
                Close
              </Button>
            </div>

            {/* Buy Menu */}
            {showBuyMenu && (
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h4 className="text-white mb-4 font-semibold text-lg">Request Purchase via:</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/1234567890?text=I'm%20interested%20in%20buying%20the%20product%20NXT%20Balkan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-2 rounded-md text-center hover:bg-green-700 transition"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://instagram.com/messages/t/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white py-2 rounded-md text-center hover:bg-pink-700 transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="mailto:sales@nxtbalkan.com?subject=Purchase%20Request%20NXT%20Balkan%20Product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 rounded-md text-center hover:bg-blue-700 transition"
                  >
                    Email
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
