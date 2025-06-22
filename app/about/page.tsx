"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Calendar, Award, Globe, Zap } from "lucide-react"
import { BannerAd, SquareAd, MobileBannerAd } from "@/components/ad-placeholder"

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "NXT Balkan was founded with a vision to revolutionize the music industry",
    },
    { year: "2021", title: "First Studio", description: "Opened our state-of-the-art recording facility in Belgrade" },
    {
      year: "2022",
      title: "International Expansion",
      description: "Partnered with global streaming platforms and labels",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched our AI-powered music discovery and promotion tools",
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Recognized as the leading Balkan music agency worldwide",
    },
  ]

  const team = [
    {
      name: "Marko Petrović",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in the music industry, passionate about bridging traditional and modern sounds.",
    },
    {
      name: "Ana Nikolić",
      role: "Head of A&R",
      bio: "Talent scout extraordinaire with an ear for discovering the next big Balkan stars.",
    },
    {
      name: "Stefan Jovanović",
      role: "Chief Producer",
      bio: "Award-winning producer who has worked with top artists across the Balkans and beyond.",
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">OUR STORY</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Born from a passion for Balkan music and a vision for its global future, NXT Balkan represents the perfect
              fusion of tradition and innovation.
            </p>
          </motion.div>

          {/* Mobile Banner Ad */}
          <div className="mb-16">
            <MobileBannerAd />
          </div>

          {/* Mission Statement */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-alt">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We believe that Balkan music has the power to unite cultures and transcend boundaries. Our mission is
                  to amplify these incredible sounds and stories, bringing them to audiences worldwide while preserving
                  their authentic essence.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Through cutting-edge technology, strategic partnerships, and unwavering dedication to our artists,
                  we're not just promoting music – we're building bridges between worlds.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: "Global Reach", value: "50+ Countries" },
                  { icon: Award, title: "Awards Won", value: "25+" },
                  { icon: Zap, title: "Artists Managed", value: "100+" },
                  { icon: Calendar, title: "Years Experience", value: "4+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 professional-card rounded-xl hover-lift"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-4" />
                    <div className="text-2xl font-bold mb-2 glow-text">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Banner Ad */}
          <div className="mb-16">
            <BannerAd />
          </div>

          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-neon">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/20"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="professional-card p-6 rounded-xl hover-lift glow-border">
                      <div className="text-2xl font-bold mb-2 glow-text">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center text-4xl font-bold group-hover:bg-white group-hover:text-black transition-all duration-300">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="text-gray-400 mb-4">{member.role}</div>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>

            {/* Square Ad in Team Section */}
            <div className="mt-16 flex justify-center">
              <SquareAd />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
