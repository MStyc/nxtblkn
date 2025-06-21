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
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      setVisible(true)
      setTimeout(() => setVisible(false), 10000) // prikaži 10 sekund
    }

    showNotification()

    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % notifications.length)
      showNotification()
    }, 45000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-xs w-[90vw] sm:w-80 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 
      rounded-xl shadow-xl text-white font-semibold flex items-center gap-3 px-5 py-3
      transition-opacity duration-500 ease-in-out
      ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <Bell className="w-6 h-6 flex-shrink-0" />
      <p className="text-sm sm:text-base">{notifications[current]}</p>
    </div>
  )
}
