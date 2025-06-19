"use client"

import { useEffect, useRef } from "react"

export function AudioVisualizer({ isPlaying }: { isPlaying: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 200

    const bars = 64
    const barWidth = canvas.width / bars

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const barHeight = isPlaying
          ? Math.random() * canvas.height * 0.8 + 10
          : Math.sin(Date.now() * 0.001 + i * 0.1) * 20 + 30

        const hue = (i * 360) / bars + Date.now() * 0.1
        ctx.fillStyle = `hsl(${hue % 360}, 70%, 60%)`

        ctx.fillRect(i * barWidth, canvas.height - barHeight, barWidth - 2, barHeight)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-32 rounded-lg opacity-80"
      style={{ background: "rgba(0, 0, 0, 0.3)" }}
    />
  )
}
