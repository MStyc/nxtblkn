"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import { AdBanner } from "@/components/AdBanner"

export default function ArtistsPage() {
  const [selectedGenre, setSelectedGenre] = useState("All")

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

  const genres = ["All", "Folk Fusion", "Electronic", "Hip-Hop", "Pop", "Traditional"]


  const artists = [
    {
      name: "Crni Stojke",
      image: "https://media.discordapp.net/attachments/1329893059147862109/1385981143601385623/image.jpg?ex=68580b06&is=6856b986&hm=4f7b227f2567bf8ef5b7fd04b1503e0d6742731792a48a70132f3b71c89268b2&=&format=webp&width=498&height=885",
      bio: "Blending traditional Serbian folk with modern electronic elements",
      streams: "No Data Yet",
      followers: "3.5K",
    },
  ]

  const filteredArtists = selectedGenre === "All" ? artists : artists.filter((artist) => artist.genre === selectedGenre)

  return (
    <div className="min-h-screen pt-20 animated-bg">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Future Artists</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the talented artists who are shaping the future of Balkan music
            </p>
          </div>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                onClick={() => setSelectedGenre(genre)}
                className={
                  selectedGenre === genre
                    ? "bg-white text-black"
                    : "border-white text-white hover:bg-white hover:text-black"
                }
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 overflow-hidden hover:neon-glow group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                      <Play size={16} className="mr-2" />
                      Listen
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{artist.name}</h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{artist.genre}</span>
                  </div>

                  <p className="text-gray-400 mb-4">{artist.bio}</p>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm">
                      <div className="text-white font-semibold">{artist.streams} streams</div>
                      <div className="text-gray-400">{artist.followers} followers</div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="p-2 text-white hover:bg-white/10">
                        <Instagram size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 text-white hover:bg-white/10">
                        <Youtube size={16} />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2 text-white hover:bg-white/10">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <AdBanner />
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto text-center">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Join Our Roster?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented artists who share our vision for the future of Balkan music.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 min-w-[200px] !border-4 !border-white !rounded-lg shadow-lg"
            >
              <a href="/join">Submit Your Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
