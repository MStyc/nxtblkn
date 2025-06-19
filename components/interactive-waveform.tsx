"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface WaveformProps {
  isPlaying: boolean
  currentTime: number
  duration: number
  onSeek: (time: number) => void
}

export function InteractiveWaveform({ isPlaying, currentTime, duration, onSeek }: WaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [waveformData] = useState(() => Array.from({ length: 200 }, () => Math.random() * 0.8 + 0.2))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 100

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const barWidth = canvas.width / waveformData.length
      const progress = currentTime / duration

      waveformData.forEach((amplitude, index) => {
        const x = index * barWidth
        const height = amplitude * canvas.height * 0.8
        const y = (canvas.height - height) / 2

        // Color based on progress
        const isPlayed = index / waveformData.length < progress
        ctx.fillStyle = isPlayed ? "#ffffff" : "rgba(255, 255, 255, 0.3)"

        ctx.fillRect(x, y, barWidth - 1, height)
      })

      // Progress line
      const progressX = progress * canvas.width
      ctx.strokeStyle = "#ff006e"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(progressX, 0)
      ctx.lineTo(progressX, canvas.height)
      ctx.stroke()
    }

    draw()
  }, [currentTime, duration, waveformData])

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const progress = x / canvas.width
    const newTime = progress * duration

    onSeek(newTime)
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-16 cursor-pointer rounded-lg"
      onClick={handleClick}
      style={{ background: "rgba(0, 0, 0, 0.2)" }}
    />
  )
}
