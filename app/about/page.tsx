"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Music, Users, Award, Globe, Heart, Star } from "lucide-react"

export default function AboutPage() {
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

  return (
    <div className="min-h-screen pt-20 animated-bg">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About NXT Balkan</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a revolutionary music agency dedicated to bringing Balkan music to the global stage while
              preserving its rich cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in opacity-0 translate-x-[-50px] transition-all duration-1000">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg mb-6">
                At NXT Balkan, we believe that music transcends borders and connects cultures. Our mission is to elevate
                Balkan artists and their unique sounds to international recognition while maintaining the authenticity
                and soul of traditional Balkan music.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                We combine cutting-edge technology with deep cultural understanding to create opportunities for artists
                who represent the next generation of Balkan music.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 border-2 border-white rounded-lg">
                Learn More About Our Vision
              </Button>
            </div>

            <div className="fade-in opacity-0 translate-x-[50px] transition-all duration-1000">
              <Card className="glass-effect border-white/20 p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Music size={48} className="mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2">50+</h3>
                    <p className="text-gray-400">Artists Managed</p>
                  </div>
                  <div className="text-center">
                    <Globe size={48} className="mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2">100M+</h3>
                    <p className="text-gray-400">Global Streams</p>
                  </div>
                  <div className="text-center">
                    <Award size={48} className="mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2">25+</h3>
                    <p className="text-gray-400">Awards Won</p>
                  </div>
                  <div className="text-center">
                    <Users size={48} className="mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2">15+</h3>
                    <p className="text-gray-400">Countries Reached</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at NXT Balkan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={48} />,
                title: "Authenticity",
                description:
                  "We preserve the soul and tradition of Balkan music while embracing innovation and modern production techniques.",
              },
              {
                icon: <Star size={48} />,
                title: "Excellence",
                description:
                  "We strive for the highest quality in everything we do, from artist development to music production and promotion.",
              },
              {
                icon: <Globe size={48} />,
                title: "Global Vision",
                description:
                  "We connect Balkan artists with worldwide audiences, breaking down cultural barriers through the universal language of music.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-8 text-center hover:neon-glow"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-white mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The passionate professionals behind NXT Balkan's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aleksandar Petrović",
                role: "Founder & CEO",
                bio: "Music industry veteran with 15+ years of experience in artist management and music production.",
              },
              {
                name: "Milica Stojanović",
                role: "Head of A&R",
                bio: "Former recording artist turned talent scout, discovering the next generation of Balkan music stars.",
              },
              {
                name: "Stefan Nikolić",
                role: "Creative Director",
                bio: "Award-winning producer and sound engineer specializing in modern Balkan music production.",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-6 hover:neon-glow"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <Users size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto text-center">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you're an artist, industry professional, or music lover, there's a place for you in the NXT Balkan
              family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-200 min-w-[150px] !border-4 !border-white !rounded-lg shadow-lg">
                Work With Us
              </Button>

              <Button
                variant="outline"
                className="!border-4 !border-white text-white hover:bg-white hover:text-black min-w-[150px] !rounded-lg shadow-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
