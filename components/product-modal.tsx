"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Star, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"

interface ProductModalProps {
  product: any
  isOpen: boolean
  onClose: () => void
  onBuy: () => void
}

export function ProductModal({ product, isOpen, onClose, onBuy }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")

  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="professional-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto glow-border"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(25px)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <h2 className="text-2xl font-bold text-white">Product Details</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                  {product.isLimited && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Limited Edition
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-400">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-white">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-4 glow-text">{product.name}</h1>
                  <p className="text-3xl font-bold text-white mb-6 glow-text">{product.price}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 glow-text">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{product.description}</p>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 glow-text">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg transition-all duration-300 ${
                          selectedSize === size
                            ? "border-white bg-white text-black"
                            : "border-white/20 text-white hover:border-white/40"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 glow-text">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold">In Stock</span>
                </div>

                {/* Buy Button */}
                <Button
                  onClick={onBuy}
                  disabled={!selectedSize}
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed glow-button magnetic-button"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {selectedSize ? "Buy Now" : "Select Size First"}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
