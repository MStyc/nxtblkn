"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Music, Users, Zap, Radio, Mic, Headphones, TrendingUp, Globe } from "lucide-react"

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Music size={60} />,
      title: "Music Production",
      description: "Professional studio work, beatmaking, mixing, and mastering",
      features: [
        "State-of-the-art recording studios",
        "Professional mixing and mastering",
        "Beat production and composition",
        "Sound design and audio engineering",
      ],
    },
    {
      icon: <Users size={60} />,
      title: "Artist Management",
      description: "Complete artist development and career guidance",
      features: [
        "Career strategy and planning",
        "Brand development and image consulting",
        "Tour booking and event management",
        "Contract negotiation and legal support",
      ],
    },
    {
      icon: <Zap size={60} />,
      title: "Music Promotion",
      description: "Strategic promotion across all major platforms",
      features: [
        "Spotify playlist placement",
        "YouTube channel optimization",
        "TikTok viral marketing",
        "Social media management",
      ],
    },
    {
      icon: <Radio size={60} />,
      title: "Portal Services",
      description: "Gateway to the Balkan music scene",
      features: [
        "Artist discovery platform",
        "Music blog and news coverage",
        "Industry networking events",
        "Collaboration opportunities",
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-20 animated-bg">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive music services designed to elevate Balkan artists to the global stage
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-8 hover:neon-glow group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-lg mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-white rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">How we work with artists to achieve success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Mic size={40} />,
                title: "Discovery",
                description: "We identify and evaluate talented artists with unique potential",
              },
              {
                icon: <Headphones size={40} />,
                title: "Development",
                description: "Comprehensive artist development including sound, image, and brand",
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Production",
                description: "Professional recording, mixing, and mastering of high-quality music",
              },
              {
                icon: <Globe size={40} />,
                title: "Promotion",
                description: "Strategic marketing and promotion to reach global audiences",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 text-center"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 rounded-full glass-effect border-white/20 flex items-center justify-center mx-auto mb-6 hover:neon-glow transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help elevate your music career to the next level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 min-w-[150px] !border-4 !border-white !rounded-lg shadow-lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="!border-4 !border-white text-white hover:bg-white hover:text-black min-w-[150px] !rounded-lg shadow-lg"
              >
                <Link href="/join">Submit Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
