"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Music, Headphones, Mic, Radio, Volume2 } from "lucide-react"

interface AdPlaceholderProps {
  variant?: "banner" | "square" | "native" | "sidebar" | "mobile-banner"
  className?: string
}

export function AdPlaceholder({ variant = "banner", className = "" }: AdPlaceholderProps) {
  const adContent = {
    banner: {
      title: "Premium Audio Equipment",
      subtitle: "Professional Studio Gear",
      description: "Elevate your sound with industry-leading equipment",
      cta: "Shop Now",
      icon: Headphones,
      gradient: "from-purple-600 to-blue-600",
    },
    square: {
      title: "Music Streaming",
      subtitle: "Unlimited Access",
      description: "Stream millions of tracks",
      cta: "Try Free",
      icon: Music,
      gradient: "from-green-600 to-teal-600",
    },
    native: {
      title: "Master Your Craft",
      subtitle: "Online Music Production Course",
      description: "Learn from industry professionals and take your music production skills to the next level",
      cta: "Enroll Today",
      icon: Mic,
      gradient: "from-orange-600 to-red-600",
    },
    sidebar: {
      title: "Radio Station",
      subtitle: "24/7 Balkan Hits",
      description: "Listen to the best Balkan music",
      cta: "Listen Live",
      icon: Radio,
      gradient: "from-pink-600 to-purple-600",
    },
    "mobile-banner": {
      title: "Audio App",
      subtitle: "Mobile Studio",
      description: "Create music on the go",
      cta: "Download",
      icon: Volume2,
      gradient: "from-indigo-600 to-blue-600",
    },
  }

  const content = adContent[variant]
  const IconComponent = content.icon

  const getContainerClasses = () => {
    switch (variant) {
      case "banner":
        return "w-full h-32 md:h-40"
      case "square":
        return "w-full aspect-square max-w-sm mx-auto"
      case "native":
        return "w-full min-h-48 md:min-h-56"
      case "sidebar":
        return "w-full h-80"
      case "mobile-banner":
        return "w-full h-24 md:h-32"
      default:
        return "w-full h-32"
    }
  }

  const getLayoutClasses = () => {
    switch (variant) {
      case "banner":
      case "mobile-banner":
        return "flex-row items-center justify-between px-6 md:px-8"
      case "square":
      case "sidebar":
        return "flex-col items-center justify-center text-center p-6"
      case "native":
        return "flex-col md:flex-row items-center justify-between p-6 md:p-8"
      default:
        return "flex-row items-center justify-between px-6"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${getContainerClasses()} ${className}`}
    >
      <div
        className={`relative w-full h-full bg-gradient-to-r ${content.gradient} rounded-2xl overflow-hidden group cursor-pointer hover-lift`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] animate-pulse" />
        </div>

        {/* Content */}
        <div className={`relative z-10 h-full flex ${getLayoutClasses()}`}>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <IconComponent className="h-4 w-4 md:h-5 md:w-5 text-white/80" />
              <span className="text-xs md:text-sm text-white/60 font-medium">SPONSORED</span>
            </div>

            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 truncate">{content.title}</h3>

            {variant !== "mobile-banner" && (
              <>
                <p className="text-sm md:text-base text-white/80 font-medium mb-2">{content.subtitle}</p>

                {(variant === "native" || variant === "sidebar") && (
                  <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-2">{content.description}</p>
                )}
              </>
            )}
          </div>

          <div
            className={`flex-shrink-0 ${variant === "mobile-banner" ? "ml-4" : variant === "banner" ? "ml-6" : "mt-4 md:mt-0 md:ml-6"}`}
          >
            <Button
              size={variant === "mobile-banner" ? "sm" : "default"}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-black transition-all duration-300 group-hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <span className="text-xs md:text-sm font-semibold">{content.cta}</span>
                <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
              </span>
            </Button>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.div>
  )
}

// Specialized ad components for different use cases
export function BannerAd({ className }: { className?: string }) {
  return <AdPlaceholder variant="banner" className={className} />
}

export function SquareAd({ className }: { className?: string }) {
  return <AdPlaceholder variant="square" className={className} />
}

export function NativeAd({ className }: { className?: string }) {
  return <AdPlaceholder variant="native" className={className} />
}

export function SidebarAd({ className }: { className?: string }) {
  return <AdPlaceholder variant="sidebar" className={className} />
}

export function MobileBannerAd({ className }: { className?: string }) {
  return <AdPlaceholder variant="mobile-banner" className={`md:hidden ${className}`} />
}
