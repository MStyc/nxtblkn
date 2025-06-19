"use client"

import { useEffect, useState } from "react"

interface DynamicBackgroundProps {
  currentGenre?: string
}

export function DynamicBackground({ currentGenre = "default" }: DynamicBackgroundProps) {
  const [gradientImage, setGradientImage] = useState("")

  useEffect(() => {
    const genreGradients = {
      "Folk Fusion": "linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483)",
      Electronic: "linear-gradient(-45deg, #000000, #1a0033, #330066, #4d0099)",
      "Hip-Hop": "linear-gradient(-45deg, #2c1810, #3d2914, #4e3a18, #5f4b1c)",
      Pop: "linear-gradient(-45deg, #1a0d1a, #2d1b2d, #402940, #533753)",
      Traditional: "linear-gradient(-45deg, #0d1b2a, #1b263b, #2d3748, #4a5568)",
      default: "linear-gradient(-45deg, #000000, #1a1a1a, #000000, #2a2a2a)",
    }

    setGradientImage(genreGradients[currentGenre as keyof typeof genreGradients] || genreGradients.default)
  }, [currentGenre])

  return (
    <div
      className="fixed inset-0 z-0 transition-all duration-[2000ms] ease-in-out"
      style={{
        backgroundImage: gradientImage, // <-- use backgroundImage only
        backgroundSize: "400% 400%", // <-- no conflict with shorthand
        animation: "gradient 15s ease infinite",
      }}
    />
  )
}
