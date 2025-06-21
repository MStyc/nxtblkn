"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/artists", label: "Artists" },
  { href: "/music", label: "Music" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/join", label: "Join Us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer z-60">
              <Image src="/logo.webp" alt="NXT Balkan" width={120} height={40} className="h-8 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-gray-300 relative group cursor-pointer ${
                    pathname === item.href ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.label}
                  {!scrolled && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden cursor-pointer z-60 relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 top-3" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-3" : ""
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-all duration-700 ${
            isOpen ? "scale-100" : "scale-110"
          }`}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full opacity-20 transition-all duration-1000 ${
                isOpen ? "animate-pulse" : ""
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex flex-col justify-center items-center px-8">
          <div
            className={`mb-16 transition-all duration-700 delay-200 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            <Image
              src="/logo.webp"
              alt="NXT Balkan"
              width={200}
              height={60}
              className="h-12 w-auto filter drop-shadow-2xl"
            />
          </div>

          <div className="space-y-8 text-center">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`transition-all duration-700 ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >
                <Link
                  href={item.href}
                  className={`block text-3xl font-bold transition-all duration-300 hover:scale-110 cursor-pointer relative group ${
                    pathname === item.href ? "text-white drop-shadow-lg" : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>

                  <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                  {pathname === item.href && (
                    <span className="absolute inset-0 bg-white opacity-10 blur-xl rounded-lg animate-pulse" />
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
          </div>
        </div>

        <div
          className={`absolute top-6 right-6 text-gray-400 text-sm transition-all duration-700 delay-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Tap to close
        </div>
      </div>
    </>
  )
}
