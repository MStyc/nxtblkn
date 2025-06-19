{/* Music Listening Section */}
"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Play, Music, Users, Zap, Award, Globe, Headphones } from "lucide-react"
import { HolographicCard } from "@/components/holographic-card"
import { MusicPlayer } from "@/components/music-player"

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    const observeElements = () => {
      const elements = document.querySelectorAll(".fade-in")
      elements.forEach((el) => {
        if (!el.classList.contains("animate-in")) {
          observer.observe(el)
        }
      })
    }

    setTimeout(observeElements, 100)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="animated-bg min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-float text-white">
              NXT <span className="text-gray-300">BALKAN</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Revolutionary music agency specializing in Balkan music production, artist management, and promotion
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 min-w-[220px] !border-4 !border-white !rounded-lg shadow-lg"
              >
                <Link href="/artists">
                  Discover Music
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="!border-4 !border-white text-white hover:bg-white hover:text-black min-w-[220px] !rounded-lg shadow-lg"
              >
                <Link href="/join">
                  Submit Demo
                  <Play className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-1/4 left-10 w-20 h-20 border border-white/20 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-20 w-12 h-12 border border-white/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        />
      </section>

      {/* Music Listening Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Listen to Our Music</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the sound of modern Balkan music. Stream our latest releases directly on our platform.
            </p>
          </div>

          <div className="fade-in">
            <MusicPlayer />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive music services for the next generation of Balkan artists
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Music size={40} />,
                title: "Music Production",
                description: "Professional studio work, beatmaking, and sound engineering",
              },
              {
                icon: <Users size={40} />,
                title: "Artist Management",
                description: "Complete artist development, branding, and career guidance",
              },
              {
                icon: <Zap size={40} />,
                title: "Music Promotion",
                description: "Strategic promotion across Spotify, YouTube, TikTok, and more",
              },
            ].map((service, index) => (
              <HolographicCard
                key={index}
                className="fade-in glass-effect border-white/20 p-8 hover:neon-glow group cursor-pointer transition-all duration-300"
              >
                <div className="text-center">
                  <div className="mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </HolographicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that speak for our commitment to Balkan music excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users size={40} />, number: "50+", label: "Artists Signed" },
              { icon: <Music size={40} />, number: "500+", label: "Songs Produced" },
              { icon: <Globe size={40} />, number: "100M+", label: "Total Streams" },
              { icon: <Award size={40} />, number: "25+", label: "Awards Won" },
            ].map((stat, index) => (
              <HolographicCard
                key={index}
                className="fade-in glass-effect border-white/20 p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-white mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </HolographicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Artists</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet some of the incredible talents shaping the future of Balkan music
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marko Petrović", genre: "Folk Fusion", streams: "2.5M" },
              { name: "Ana Stojanović", genre: "Electronic", streams: "1.8M" },
              { name: "Nikola Jovanović", genre: "Hip-Hop", streams: "3.2M" },
            ].map((artist, index) => (
              <Card
                key={index}
                className="fade-in glass-effect border-white/20 p-6 hover:neon-glow group cursor-pointer transition-all duration-300"
              >
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Headphones size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                <p className="text-gray-400 mb-2">{artist.genre}</p>
                <p className="text-sm text-gray-500">{artist.streams} streams</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 min-w-[200px]">
              <Link href="/artists">View All Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Join the Revolution?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the next wave of Balkan music. Submit your demo or explore our artist roster.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 min-w-[220px] !border-4 !border-white !rounded-lg shadow-lg"
              >
                <Link href="/join">Join Our Roster</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="!border-4 !border-white text-white hover:bg-white hover:text-black min-w-[220px] !rounded-lg shadow-lg"
              >
                <Link href="/artists">Meet Our Artists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
