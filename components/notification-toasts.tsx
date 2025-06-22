"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface Toast {
  id: number
  message: string
  emoji: string
}

export function NotificationToasts() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [isMounted, setIsMounted] = useState(false)

  const messages = [
    { emoji: "🎧", message: 'Check out the new Devito album – "Nema Spavanja"' },
    { emoji: "☕", message: "Time for a break? Grab a coffee and come back fresh!" },
    { emoji: "🪩", message: "Tonight's vibe: neon lights & deep beats. Stay tuned." },
    { emoji: "🚀", message: "You just unlocked a secret vibe. Don't tell anyone." },
    { emoji: "🔥", message: "Your energy today? 100%. Let's keep it going!" },
    { emoji: "🎉", message: "New features just dropped – scroll down and explore!" },
    { emoji: "🧠", message: "Fun fact: Websites with good music taste load faster." },
    { emoji: "📱", message: "Psst… Try this on mobile. It hits different." },
    { emoji: "🤖", message: "AI is watching, but in a cool way." },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const showRandomToast = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      const newToast: Toast = {
        id: Date.now(),
        message: randomMessage.message,
        emoji: randomMessage.emoji,
      }

      setToasts((prev) => [...prev, newToast])

      // Auto remove after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id))
      }, 5000)
    }

    // Show first toast after 3 seconds
    const initialTimer = setTimeout(showRandomToast, 3000)

    // Then show random toasts every 15-30 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance every interval
        showRandomToast()
      }
    }, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [isMounted])

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none max-w-80">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="mb-3 pointer-events-auto"
          >
            <div className="bg-black/90 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl glow-border">
              <div className="flex items-start space-x-3">
                <span className="text-2xl flex-shrink-0">{toast.emoji}</span>
                <p className="text-white text-sm flex-1 leading-relaxed">{toast.message}</p>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-white/60 hover:text-white transition-colors flex-shrink-0 animated-button magnetic-button"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
