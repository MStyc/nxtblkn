"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Music, Heart, Star, Zap } from "lucide-react"

interface FloatingElement {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  icon: React.ReactNode
  rotation: number
  rotationSpeed: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const icons = [
      <Music key="music" size={24} />,
      <Heart key="heart" size={24} />,
      <Star key="star" size={24} />,
      <Zap key="zap" size={24} />,
    ]

    const initialElements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      icon: icons[Math.floor(Math.random() * icons.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
    }))

    setElements(initialElements)

    const animate = () => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          x: element.x + element.vx,
          y: element.y + element.vy,
          rotation: element.rotation + element.rotationSpeed,
          vx: element.x <= 0 || element.x >= window.innerWidth ? -element.vx : element.vx,
          vy: element.y <= 0 || element.y >= window.innerHeight ? -element.vy : element.vy,
        })),
      )
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-white opacity-20"
          style={{
            left: element.x,
            top: element.y,
            transform: `rotate(${element.rotation}deg)`,
            transition: "all 0.05s linear",
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  )
}
