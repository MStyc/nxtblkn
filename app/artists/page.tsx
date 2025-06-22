"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Instagram, Youtube, Music } from "lucide-react"
import { BannerAd, SidebarAd, MobileBannerAd } from "@/components/ad-placeholder"

export default function ArtistsPage() {
  const artists = [
    {
      name: "Milica Todorović",
      genre: "Modern Folk",
      description:
        "Blending traditional Serbian melodies with contemporary production, Milica has captured hearts across the Balkans.",
      image: "/placeholder.svg?height=400&width=400",
      stats: { streams: "2.5M", followers: "150K", releases: "12" },
      social: { instagram: "@milica_music", youtube: "MilicaOfficial" },
    },
    {
      name: "Balkan Beats Collective",
      genre: "Electronic Fusion",
      description: "Revolutionary electronic group mixing traditional Balkan instruments with modern EDM beats.",
      image: "/placeholder.svg?height=400&width=400",
      stats: { streams: "5.2M", followers: "300K", releases: "8" },
      social: { instagram: "@balkanbeats", youtube: "BalkanBeatsOfficial" },
    },
    {
      name: "Aleksandar Petrović",
      genre: "Contemporary Pop",
      description: "Rising star bringing fresh energy to Balkan pop music with his powerful vocals and modern sound.",
      image: "/placeholder.svg?height=400&width=400",
      stats: { streams: "1.8M", followers: "95K", releases: "15" },
      social: { instagram: "@aleks_music", youtube: "AleksandarOfficial" },
    },
    {
      name: "Gypsy Soul",
      genre: "Traditional Fusion",
      description: "Authentic Roma music meets contemporary arrangements in this passionate and energetic ensemble.",
      image: "/placeholder.svg?height=400&width=400",
      stats: { streams: "3.1M", followers: "200K", releases: "10" },
      social: { instagram: "@gypsysoul", youtube: "GypsySoulMusic" },
    },
    {
      name: "Nevena Božović",
      genre: "Indie Folk",
      description:
        "Ethereal voice and poetic lyrics define this emerging artist who represents the new wave of Balkan music.",
      image: "/placeholder.svg?height=400&width=400",
      stats: { streams: "900K", followers: "65K", releases: "7" },
      social: { instagram: "@nevena_music", youtube: "NevenaOfficial" },
    },
    {
      name: "Urban Balkan",
      genre: "Hip-Hop Fusion",
      description: "Pioneering the fusion of Balkan traditional music with modern hip-hop and rap elements.",
      image: "/placeholder.svg?height=400&width=400",
      stats: { streams: "4.3M", followers: "250K", releases: "20" },
      social: { instagram: "@urbanbalkan", youtube: "UrbanBalkanOfficial" },
    },
  ]

  const genres = [
    "All",
    "Modern Folk",
    "Electronic Fusion",
    "Contemporary Pop",
    "Traditional Fusion",
    "Indie Folk",
    "Hip-Hop Fusion",
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">OUR ARTISTS</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the incredible talent that defines the future of Balkan music. Each artist brings their unique
              voice to our diverse musical family.
            </p>
          </motion.div>

          {/* Mobile Banner Ad */}
          <div className="mb-16">
            <MobileBannerAd />
          </div>

          {/* Genre Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {genres.map((genre, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${
                  index === 0
                    ? "primary-button animated-button magnetic-button"
                    : "outline-button animated-button magnetic-button"
                } transition-all duration-300 relative`}
              >
                <span className="shimmer"></span>
                <span className="relative z-10">{genre}</span>
              </Button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Artists Grid */}
              <section className="mb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {artists.map((artist, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-white/5 rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 glow-border">
                        {/* Artist Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button
                              size="lg"
                              className="primary-button animated-button magnetic-button rounded-full w-16 h-16 p-0 relative"
                            >
                              <span className="shimmer"></span>
                              <Play className="h-6 w-6 ml-1 relative z-10" />
                            </Button>
                          </div>
                          <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm">
                            {artist.genre}
                          </div>
                        </div>

                        {/* Artist Info */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">{artist.description}</p>

                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <div className="text-lg font-bold">{artist.stats.streams}</div>
                              <div className="text-xs text-gray-400">Streams</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold">{artist.stats.followers}</div>
                              <div className="text-xs text-gray-400">Followers</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold">{artist.stats.releases}</div>
                              <div className="text-xs text-gray-400">Releases</div>
                            </div>
                          </div>

                          {/* Social Links */}
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-3">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/10 p-2 animated-button magnetic-button"
                              >
                                <Instagram className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/10 p-2 animated-button magnetic-button"
                              >
                                <Youtube className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/10 p-2 animated-button magnetic-button"
                              >
                                <Music className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="outline-button animated-button magnetic-button relative"
                            >
                              <span className="shimmer"></span>
                              <span className="flex items-center relative z-10">
                                View Profile <ExternalLink className="ml-2 h-3 w-3" />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Banner Ad */}
              <div className="mb-16">
                <BannerAd />
              </div>

              {/* CTA Section */}
              <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 p-16 rounded-2xl border border-white/20 glow-border">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-alt">Want to Join Our Roster?</h2>
                  <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                    We're always looking for exceptional talent to join the NXT Balkan family. If you have what it
                    takes, we want to hear from you.
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      className="primary-button animated-button magnetic-button ripple-button px-8 py-4 text-lg font-semibold relative"
                    >
                      <span className="shimmer"></span>
                      <span className="relative z-10">Submit Your Demo</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="outline-button animated-button magnetic-button ripple-button px-8 py-4 text-lg font-semibold relative"
                    >
                      <span className="shimmer"></span>
                      <span className="relative z-10">Learn About Our Process</span>
                    </Button>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Sidebar with Ad */}
            <div className="hidden lg:block">
              <div className="sticky top-32">
                <SidebarAd />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
