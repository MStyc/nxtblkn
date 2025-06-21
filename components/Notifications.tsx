"use client"

import { useEffect, useState } from "react"
import { Bell } from "lucide-react"

const notifications = [
  "Check the new Devito album \"Nema Spavanja\"!",
  "Explore exclusive merch drops – limited time only!",
  "New artist signed: Mila Marković – hear her debut single!",
  "🔥 Balkan Beats playlist updated – tune in now!",
  "Submit your demo and be the next star of NXT Balkan!",
]

export function Notifications() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 8000) // prikaži 8 sekund
    }, 40000) // vsakih 40 sekund nova notifikacija

    return () => clearInterval(interval)
  }, [])

  if (!showNotification) return null

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-6 z-[9999] max-w-xs sm:max-w-sm w-full
                 bg-white/95 backdrop-blur-md border border-gray-300 rounded-xl
                 shadow-lg flex items-center gap-3 px-5 py-3
                 animate-slideInLeft
                 dark:bg-gray-900 dark:border-gray-700"
      style={{ animationDuration: "0.5s" }}
    >
      <Bell className="text-gray-800 dark:text-gray-200 w-6 h-6 flex-shrink-0" />
      <p className="text-gray-900 dark:text-gray-100 text-sm sm:text-base font-medium">
        {notifications[currentNotification]}
      </p>
    </div>
  )
}
