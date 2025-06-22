"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Star, Eye } from "lucide-react"
import { useState } from "react"
import { ProductModal } from "@/components/product-modal"
import { PurchaseModal } from "@/components/purchase-modal"

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)

  const products = [
    {
      id: 1,
      name: "NXT Balkan Classic T-Shirt",
      price: "€25.00",
      image: "/images/tshirt.webp",
      category: "T-Shirts",
      rating: 4.8,
      reviews: 124,
      description:
        "Premium quality black t-shirt featuring the iconic NXT Balkan logo with headphones and sound wave design. Made from 100% organic cotton for maximum comfort and durability.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      features: ["100% Organic Cotton", "Pre-shrunk fabric", "Reinforced seams", "Machine washable", "Unisex fit"],
      colors: ["Black"],
      inStock: true,
    },
    {
      id: 2,
      name: "NXT Balkan Premium Hoodie",
      price: "€45.00",
      image: "/images/hoodie.webp",
      category: "Hoodies",
      rating: 4.9,
      reviews: 89,
      description:
        "Cozy premium hoodie with the signature NXT Balkan design. Perfect for studio sessions or casual wear. Features a spacious front pocket and adjustable drawstring hood.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      features: [
        "80% Cotton, 20% Polyester",
        "Fleece-lined interior",
        "Kangaroo pocket",
        "Adjustable drawstring",
        "Ribbed cuffs and hem",
      ],
      colors: ["Black"],
      inStock: true,
    },
    {
      id: 3,
      name: "Off-White x NXT Balkan Limited Edition",
      price: "€65.00",
      image: "/images/offwhite-x-nxt.webp",
      category: "Limited Edition",
      rating: 5.0,
      reviews: 45,
      description:
        "Exclusive collaboration piece featuring a unique crossed arrows design with the NXT Balkan logo. Limited production run - only 500 pieces available worldwide.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      features: [
        "Premium cotton blend",
        "Limited edition design",
        "Numbered authenticity tag",
        "Collector's packaging",
        "Exclusive collaboration",
      ],
      colors: ["Black"],
      inStock: true,
      isLimited: true,
    },
  ]

  const categories = ["All", "T-Shirts", "Hoodies", "Limited Edition"]

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
  }

  const handleBuyProduct = () => {
    setShowPurchaseModal(true)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ScrollProgress />
      <AnimatedBackground />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">NXT SHOP</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Wear the revolution. Express your passion for Balkan music with our exclusive merchandise collection.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${
                  index === 0
                    ? "bg-white text-black hover:bg-gray-200 glow-button"
                    : "border-white/20 text-white hover:bg-white hover:text-black bg-transparent glow-border"
                } transition-all duration-300 magnetic-button`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="professional-card rounded-2xl overflow-hidden hover-lift glow-border">
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gray-100">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.isLimited && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Limited Edition
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm">
                        {product.category}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          onClick={() => handleViewProduct(product)}
                          size="lg"
                          className="bg-white text-black hover:bg-gray-200 rounded-full"
                        >
                          <Eye className="h-5 w-5 mr-2" />
                          View Product
                        </Button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">{product.category}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                          <span className="text-sm text-gray-400">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 glow-text">{product.name}</h3>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold glow-text">{product.price}</span>
                        <Button
                          onClick={() => handleViewProduct(product)}
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="professional-card p-16 rounded-2xl glow-border">
              <ShoppingBag className="h-16 w-16 mx-auto mb-6 glow-text" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-alt">Join the NXT Family</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Every purchase supports our artists and helps us continue revolutionizing the Balkan music scene. Wear
                your passion, support the movement.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  Browse All Products
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Size Guide
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onBuy={handleBuyProduct}
        />
      )}

      {/* Purchase Modal */}
      <PurchaseModal isOpen={showPurchaseModal} onClose={() => setShowPurchaseModal(false)} product={selectedProduct} />
    </div>
  )
}
