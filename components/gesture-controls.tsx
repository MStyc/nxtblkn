"use client"

import { useEffect, useRef } from "react"

interface GestureControlsProps {
  onGesture: (gesture: string) => void
}

export function GestureControls({ onGesture }: GestureControlsProps) {
  const startPos = useRef({ x: 0, y: 0 })
  const isDrawing = useRef(false)

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 2) {
        // Right click
        e.preventDefault()
        isDrawing.current = true
        startPos.current = { x: e.clientX, y: e.clientY }
      }
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (isDrawing.current) {
        const endPos = { x: e.clientX, y: e.clientY }
        const deltaX = endPos.x - startPos.current.x
        const deltaY = endPos.y - startPos.current.y

        const threshold = 50

        if (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold) {
          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal gesture
            if (deltaX > 0) {
              onGesture("swipe-right")
            } else {
              onGesture("swipe-left")
            }
          } else {
            // Vertical gesture
            if (deltaY > 0) {
              onGesture("swipe-down")
            } else {
              onGesture("swipe-up")
            }
          }
        }

        isDrawing.current = false
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("contextmenu", handleContextMenu)

    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [onGesture])

  return null
}
