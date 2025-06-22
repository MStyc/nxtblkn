"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Music, Users, Megaphone, Globe, Mic, Headphones, Radio, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Music,
      title: "Music Production",
      description: "State-of-the-art recording, mixing, and mastering services",
      features: [
        "Professional recording studios",
        "Expert mixing and mastering",
        "Beat production and composition",
        "Vocal coaching and direction",
        "Live session recording",
      ],
      color: "from-white to-gray-300",
    },
    {
      icon: Users,
      title: "Artist Management",
      description: "Comprehensive career development and strategic planning",
      features: [
        "Career strategy development",
        "Brand building and image consulting",
        "Tour booking and management",
        "Contract negotiation",
        "Financial planning and budgeting",
      ],
      color: "from-gray-300 to-white",
    },
    {
      icon: Megaphone,
      title: "Music Promotion",
      description: "Digital marketing and promotional campaigns",
      features: [
        "Spotify playlist placement",
        "Social media marketing",
        "YouTube channel optimization",
        "TikTok viral campaigns",
        "Press and media relations",
      ],
      color: "from-white to-gray-400",
    },
    {
      icon: Globe,
      title: "Balkan Music Portal",
      description: "Your gateway to discovering and promoting Balkan talent",
      features: [
        "Artist discovery platform",
        "Music streaming integration",
        "Cultural event promotion",
        "Industry networking",
        "Educational resources",
      ],
      color: "from-gray-400 to-white",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your vision, goals, and unique sound.",
      icon: Mic,
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive plan tailored to your artistic journey.",
      icon: TrendingUp,
    },
    {
      step: "03",
      title: "Production",
      description: "Bring your music to life with our world-class production team.",
      icon: Headphones,
    },
    {
      step: "04",
      title: "Promotion",
      description: "Launch your music to the world with strategic marketing campaigns.",
      icon: Radio,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ScrollProgress />
      <AnimatedBackground />

      <div className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">OUR SERVICES</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From studio to stage, we provide comprehensive solutions for every aspect of your musical journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="professional-card p-8 rounded-2xl hover-lift glow-border h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 glow-border">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 glow-text">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-alt">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="professional-card p-16 rounded-2xl glow-border">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-neon">Ready to Elevate Your Music?</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Whether you're an emerging artist or an established act, we have the expertise and resources to take
                your music to the next level.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/join-us">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold bg-transparent"
                  >
                    Submit Your Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
