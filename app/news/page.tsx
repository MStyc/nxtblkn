"use client"

import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
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

  const newsArticles = [
    {
      title: "The Rise of Balkan Electronic Music in 2024",
      excerpt: "How electronic producers are revolutionizing traditional Balkan sounds for global audiences.",
      image: "/placeholder.svg?height=200&width=400",
      author: "NXT Balkan Team",
      date: "2024-01-15",
      category: "Industry News",
      featured: true,
    },
    {
      title: "Artist Spotlight: Marko Petrović's Journey to Success",
      excerpt: "From local folk musician to international sensation - the story behind our latest success.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Ana Milic",
      date: "2024-01-12",
      category: "Artist Feature",
    },
    {
      title: "New Studio Opening in Zagreb",
      excerpt: "NXT Balkan expands with state-of-the-art recording facility in Croatia's capital.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Stefan Jovic",
      date: "2024-01-10",
      category: "Company News",
    },
    {
      title: "Balkan Music Streaming Statistics 2024",
      excerpt: "Latest data shows 300% growth in Balkan music consumption on major platforms.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Data Team",
      date: "2024-01-08",
      category: "Industry Analysis",
    },
    {
      title: "Collaboration: Traditional Meets Modern",
      excerpt: "How we're bridging generations of musicians to create innovative sounds.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Milica Stojanovic",
      date: "2024-01-05",
      category: "Creative Process",
    },
    {
      title: "Upcoming: Balkan Music Festival 2024",
      excerpt: "NXT Balkan announces major festival featuring our top artists and international guests.",
      image: "/placeholder.svg?height=200&width=400",
      author: "Events Team",
      date: "2024-01-03",
      category: "Events",
    },
  ]

  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen pt-20 animated-bg">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">News & Portal</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay updated with the latest from the Balkan music scene and NXT Balkan
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <Card className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 overflow-hidden hover:neon-glow group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="bg-gray-800 px-2 py-1 rounded">{featuredArticle.category}</span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredArticle.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {featuredArticle.author}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-gray-400 text-lg mb-6">{featuredArticle.excerpt}</p>

                  <Button className="w-fit group bg-white text-black hover:bg-gray-200">
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 overflow-hidden hover:neon-glow group cursor-pointer"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{article.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      {article.author}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-gray-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>

                  <div className="flex items-center text-sm text-white group-hover:text-gray-300 transition-colors">
                    Read More
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto text-center">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay in the Loop</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, artist updates, and industry insights.
            </p>

            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <Button className="bg-white text-black hover:bg-gray-200 !border-4 !border-white !rounded-lg shadow-lg px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
