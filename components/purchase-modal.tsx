"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, MessageCircle, Mail, Instagram } from "lucide-react"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  product: any
}

export function PurchaseModal({ isOpen, onClose, product }: PurchaseModalProps) {
  const contactMethods = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-600 hover:bg-green-700",
      action: () => {
        const message = `Hi! I'm interested in purchasing the ${product?.name} for ${product?.price}. Can you help me with the order?`
        window.open(`https://wa.me/381641234567?text=${encodeURIComponent(message)}`, "_blank")
      },
    },
    {
      name: "Gmail",
      icon: Mail,
      color: "bg-red-600 hover:bg-red-700",
      action: () => {
        const subject = `Order Inquiry - ${product?.name}`
        const body = `Hi NXT Balkan team,\n\nI would like to purchase the ${product?.name} for ${product?.price}.\n\nPlease let me know the next steps.\n\nBest regards`
        window.open(
          `mailto:shop@nxtbalkan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
          "_blank",
        )
      },
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      action: () => {
        window.open("https://instagram.com/nxtbalkan", "_blank")
      },
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(15px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(25px)",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white glow-text">Buy via</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Product Summary */}
            {product && (
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-white glow-text">{product.name}</h3>
                    <p className="text-xl font-bold text-white glow-text">{product.price}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Methods */}
            <div className="p-6 space-y-4">
              <p className="text-gray-300 text-center mb-6">Choose your preferred method to complete your purchase:</p>

              {contactMethods.map((method, index) => (
                <motion.button
                  key={method.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={method.action}
                  className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 magnetic-button glow-button ${method.color}`}
                >
                  <method.icon className="h-5 w-5" />
                  <span>Contact via {method.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 pt-0">
              <p className="text-xs text-gray-400 text-center">
                Our team will respond within 24 hours to help you complete your order.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
