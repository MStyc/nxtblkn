"use client"

import { useEffect, useState } from "react"

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseOut = () => setIsVisible(false)

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseOut)

    // Add hover listeners to interactive elements
    const updateHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, [role="button"], .cursor-pointer')
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter, { passive: true })
        el.addEventListener("mouseleave", handleMouseLeave, { passive: true })
      })
    }

    updateHoverListeners()

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(updateHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseOut)
      observer.disconnect()
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x - (isHovering ? 20 : 10),
        top: position.y - (isHovering ? 20 : 10),
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    >
      <div
        className="w-full h-full rounded-full border-2 border-white transition-all duration-200 ease-out"
        style={{
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.2)" : "transparent",
          mixBlendMode: "difference",
          transform: isHovering ? "scale(1.1)" : "scale(1)",
        }}
      />
    </div>
  )
}
