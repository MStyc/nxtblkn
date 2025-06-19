"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
}

export function HolographicCard({ children, className = "" }: HolographicCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(255, 255, 255, 0.1) 0%, 
          transparent 50%),
          linear-gradient(135deg, 
          rgba(255, 255, 255, 0.05) 0%, 
          rgba(255, 255, 255, 0.02) 100%)
        `,
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
            #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #ff006e)
          `,
          filter: "blur(20px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </Card>
  )
}
