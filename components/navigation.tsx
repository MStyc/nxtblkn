"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Info, Briefcase, Users, ShoppingBag, Mail, UserPlus } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Artists", href: "/artists", icon: Users },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Join Us", href: "/join-us", icon: UserPlus },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  // Add this function for animated hamburger toggle
  const toggleMobileMenu = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsOpen(!isOpen)
    setTimeout(() => setIsAnimating(false), 300)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleLinkClick = () => {
    setIsOpen(false)
    // Small delay to ensure navigation happens before scroll
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }, 100)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <motion.img
                src="/images/nxt-balkan-logo.png"
                alt="NXT Balkan"
                className="h-8 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`relative text-sm font-medium transition-colors hover:text-white group ${
                    pathname === item.href ? "text-white" : "text-gray-300"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </span>
                  {pathname === item.href && (
                    <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white" />
                  )}
                </Link>
              ))}
            </div>

            {/* Animated Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10 animated-button p-2 w-10 h-10"
              onClick={toggleMobileMenu}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="absolute w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 0 : -6,
                    opacity: isOpen ? 1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? -10 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute w-6 h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 0 : 6,
                    opacity: isOpen ? 1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />

            <div className="flex flex-col items-center justify-center h-full space-y-6 px-8 relative z-10">
              {/* Logo in mobile menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-8"
              >
                <img src="/images/nxt-balkan-logo.png" alt="NXT Balkan" className="h-16 w-auto" />
              </motion.div>

              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.8 }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-4 text-2xl font-bold transition-all duration-300 group relative ${
                      pathname === item.href ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                    onClick={handleLinkClick}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-7 w-7" />
                      {pathname === item.href && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="absolute -inset-2 bg-white/10 rounded-full border border-white/20"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    <span className="relative">
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          layoutId="activeMobileUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Menu Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute bottom-8 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">NXT Balkan - Revolutionizing Music</p>
                <div className="flex items-center justify-center space-x-4">
                  <motion.div
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-white/40 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  />
                </div>
              </motion.div>

              {/* Swipe indicator for mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute top-8 right-8 text-gray-400"
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="text-xs"
                >
                  Swipe to close →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
