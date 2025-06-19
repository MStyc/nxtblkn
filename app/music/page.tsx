"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  Share2,
  Download,
  MoreHorizontal,
  Shuffle,
  Repeat,
} from "lucide-react"
import { AudioVisualizer } from "@/components/audio-visualizer"
import { InteractiveWaveform } from "@/components/interactive-waveform"
import { VoiceControl } from "@/components/voice-control"
import { DynamicBackground } from "@/components/dynamic-background"
import { GestureControls } from "@/components/gesture-controls"
import { HolographicCard } from "@/components/holographic-card"

interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  genre: string
  releaseDate: string
  coverUrl: string
  audioUrl: string
  plays: string
  likes: string
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Noćni Raj",
    artist: "Crni Stojke",
    album: "/",
    duration: "3:10",
    genre: "Folk Fusion",
    releaseDate: "2024-01-15",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "/music/nocni-raj.mp3",
    plays: "2.5M",
    likes: "45K",
  },
  {
    id: 2,
    title: "Balkan Nights",
    artist: "Marko Petrović",
    album: "Modern Folk",
    duration: "4:12",
    genre: "Folk Fusion",
    releaseDate: "2024-01-10",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "#",
    plays: "1.8M",
    likes: "32K",
  },
  {
    id: 3,
    title: "Electronic Folklore",
    artist: "Ana Stojanović",
    album: "Digital Traditions",
    duration: "3:28",
    genre: "Electronic",
    releaseDate: "2024-01-05",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "#",
    plays: "3.2M",
    likes: "67K",
  },
  {
    id: 4,
    title: "Urban Balkan",
    artist: "Nikola Jovanović",
    album: "Street Stories",
    duration: "3:56",
    genre: "Hip-Hop",
    releaseDate: "2023-12-20",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "#",
    plays: "4.1M",
    likes: "89K",
  },
  {
    id: 5,
    title: "Mountain Echoes",
    artist: "Stefan Milosević",
    album: "Ancient Sounds",
    duration: "5:23",
    genre: "Traditional",
    releaseDate: "2023-12-15",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "#",
    plays: "1.2M",
    likes: "28K",
  },
  {
    id: 6,
    title: "Fusion Dreams",
    artist: "Jovana Nikolić",
    album: "Crossroads",
    duration: "4:08",
    genre: "Folk Fusion",
    releaseDate: "2023-12-10",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "#",
    plays: "2.9M",
    likes: "54K",
  },
]

export default function MusicPage() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(225) // 3:45 in seconds
  const [volume, setVolume] = useState(75)
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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

  // Simulate time progress
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, duration])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
    setCurrentTime(0)
  }

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
    setCurrentTime(0)
  }

  const handleTrackSelect = (index: number) => {
    setCurrentTrack(index)
    setCurrentTime(0)
    setIsPlaying(true)
  }

  const genres = ["All", "Folk Fusion", "Electronic", "Hip-Hop", "Pop", "Traditional"]
  const filteredTracks = selectedGenre === "All" ? tracks : tracks.filter((track) => track.genre === selectedGenre)

  const track = tracks[currentTrack]

  if (isMobile) {
    return (
      <div className="min-h-screen animated-bg">
        <DynamicBackground currentGenre={track.genre} />

        {/* Mobile Header */}
        <div className="sticky top-16 bg-black/90 backdrop-blur-lg border-b border-white/10 px-4 py-4 z-10">
          <h1 className="text-xl font-bold text-white">Your Music</h1>
        </div>

        {/* Mobile Player Card */}
        <div className="p-4 pt-6">
          <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20 shadow-2xl">
            {/* Album Art */}
            <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 mb-6 relative group shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl opacity-80">🎵</div>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-active:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <Button
                  onClick={handlePlayPause}
                  className="w-16 h-16 rounded-full bg-white text-black hover:bg-gray-200 shadow-lg"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
              </div>
            </div>

            {/* Track Info */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2 truncate">{track.title}</h2>
              <p className="text-lg text-gray-300 mb-1 truncate">{track.artist}</p>
              <p className="text-sm text-gray-400 truncate">{track.album}</p>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <span className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-full border border-white/20">
                  {track.genre}
                </span>
                <span className="text-xs text-gray-300">{track.plays} plays</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <InteractiveWaveform
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                onSeek={(time) => setCurrentTime(time)}
              />
              <div className="flex justify-between text-sm text-gray-300 mt-2">
                <span>{formatTime(currentTime)}</span>
                <span>{track.duration}</span>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3">
                <Shuffle size={20} />
              </Button>

              <div className="flex items-center space-x-6">
                <Button variant="ghost" size="sm" onClick={handlePrevious} className="text-white hover:bg-white/10 p-3">
                  <SkipBack size={24} />
                </Button>

                <Button
                  onClick={handlePlayPause}
                  className="w-16 h-16 rounded-full bg-white text-black hover:bg-gray-200 shadow-lg"
                >
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </Button>

                <Button variant="ghost" size="sm" onClick={handleNext} className="text-white hover:bg-white/10 p-3">
                  <SkipForward size={24} />
                </Button>
              </div>

              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3">
                <Repeat size={20} />
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-8">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3">
                <Heart size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3">
                <Share2 size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-3">
                <MoreHorizontal size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Genre Filter - Mobile */}
        <div className="px-4 mb-6">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedGenre(genre)}
                className={`whitespace-nowrap flex-shrink-0 ${
                  selectedGenre === genre
                    ? "bg-white text-black border-white shadow-lg"
                    : "border-white/40 text-white hover:bg-white/10 bg-black/40 backdrop-blur-sm"
                }`}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Track List - Mobile */}
        <div className="px-4 pb-24">
          <h3 className="text-xl font-bold mb-4 text-white">All Tracks</h3>
          <div className="space-y-3">
            {filteredTracks.map((track, index) => (
              <div
                key={track.id}
                className={`flex items-center space-x-3 p-4 rounded-xl transition-colors border backdrop-blur-sm ${
                  tracks.findIndex((t) => t.id === track.id) === currentTrack
                    ? "bg-white/10 border-white/30 shadow-lg"
                    : "bg-black/40 border-white/20 hover:bg-white/5 active:bg-white/10"
                }`}
                onClick={() => handleTrackSelect(tracks.findIndex((t) => t.id === track.id))}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                  {tracks.findIndex((t) => t.id === track.id) === currentTrack && isPlaying ? (
                    <Pause size={16} className="text-white" />
                  ) : (
                    <Play size={16} className="text-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate text-sm">{track.title}</h4>
                  <p className="text-xs text-gray-300 truncate">{track.artist}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-gray-300">{track.duration}</p>
                  <p className="text-xs text-gray-400">{track.plays}</p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 p-2 flex-shrink-0 hover:text-white hover:bg-white/10"
                >
                  <MoreHorizontal size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Playlists - Mobile */}
        <div className="px-4 pb-8">
          <h3 className="text-xl font-bold mb-4 text-white">Featured Playlists</h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Balkan Hits 2024",
                description: "The biggest Balkan songs of the year",
                trackCount: "25 tracks",
                duration: "1h 45m",
                plays: "2.1M",
              },
              {
                title: "Electronic Balkans",
                description: "Modern electronic takes on traditional sounds",
                trackCount: "18 tracks",
                duration: "1h 12m",
                plays: "1.5M",
              },
              {
                title: "Folk Fusion",
                description: "Where tradition meets innovation",
                trackCount: "22 tracks",
                duration: "1h 38m",
                plays: "1.8M",
              },
            ].map((playlist, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                    <div className="text-2xl">🎶</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate text-sm">{playlist.title}</h4>
                    <p className="text-xs text-gray-300 truncate mb-1">{playlist.description}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <span>{playlist.trackCount}</span>
                      <span>•</span>
                      <span>{playlist.duration}</span>
                      <span>•</span>
                      <span>{playlist.plays} plays</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voice and Gesture Controls */}
        <VoiceControl
          onCommand={(command) => {
            if (command.includes("play")) handlePlayPause()
            if (command.includes("next")) handleNext()
            if (command.includes("previous")) handlePrevious()
          }}
        />

        <GestureControls
          onGesture={(gesture) => {
            if (gesture === "swipe-right") handleNext()
            if (gesture === "swipe-left") handlePrevious()
            if (gesture === "swipe-up") setVolume(Math.min(100, volume + 10))
            if (gesture === "swipe-down") setVolume(Math.max(0, volume - 10))
          }}
        />
      </div>
    )
  }

  // Desktop version remains the same
  return (
    <div className="min-h-screen pt-20 animated-bg">
      <DynamicBackground currentGenre={track.genre} />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Listen to Our Music</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the sound of modern Balkan music. Stream our latest releases and explore the rich musical
              heritage of the Balkans.
            </p>
          </div>
        </div>
      </section>

      {/* Main Music Player */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <HolographicCard className="p-8 mb-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Album Art */}
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-800 relative group">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-8xl">🎵</div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={handlePlayPause}
                      className="w-16 h-16 rounded-full bg-white text-black hover:bg-gray-200"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <AudioVisualizer isPlaying={isPlaying} />
                </div>
              </div>

              {/* Track Info & Controls */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{track.title}</h2>
                  <p className="text-xl text-gray-400 mb-2">{track.artist}</p>
                  <p className="text-gray-500 mb-4">
                    {track.album} • {track.releaseDate}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{track.genre}</span>
                    <span className="text-sm text-gray-500">{track.plays} plays</span>
                    <span className="text-sm text-gray-500">{track.likes} likes</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <InteractiveWaveform
                    isPlaying={isPlaying}
                    currentTime={currentTime}
                    duration={duration}
                    onSeek={(time) => setCurrentTime(time)}
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{track.duration}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" onClick={handlePrevious} className="text-white hover:bg-white/10">
                      <SkipBack size={20} />
                    </Button>

                    <Button
                      onClick={handlePlayPause}
                      className="w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </Button>

                    <Button variant="ghost" size="sm" onClick={handleNext} className="text-white hover:bg-white/10">
                      <SkipForward size={20} />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Heart size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Share2 size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <Download size={16} />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Volume2 size={16} className="text-gray-400" />
                    <div className="w-24 bg-gray-800 rounded-full h-1 cursor-pointer">
                      <div className="bg-white h-1 rounded-full" style={{ width: `${volume}%` }} />
                    </div>
                  </div>
                </div>
                <VoiceControl
                  onCommand={(command) => {
                    if (command.includes("play")) handlePlayPause()
                    if (command.includes("next")) handleNext()
                    if (command.includes("previous")) handlePrevious()
                  }}
                />

                <GestureControls
                  onGesture={(gesture) => {
                    if (gesture === "swipe-right") handleNext()
                    if (gesture === "swipe-left") handlePrevious()
                    if (gesture === "swipe-up") setVolume(Math.min(100, volume + 10))
                    if (gesture === "swipe-down") setVolume(Math.max(0, volume - 10))
                  }}
                />
              </div>
            </div>
          </HolographicCard>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-8 fade-in">
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

      {/* Track List */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <HolographicCard className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">All Tracks</h3>
            <div className="space-y-3">
              {filteredTracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    tracks.findIndex((t) => t.id === track.id) === currentTrack ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                  onClick={() => handleTrackSelect(tracks.findIndex((t) => t.id === track.id))}
                >
                  <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                    {tracks.findIndex((t) => t.id === track.id) === currentTrack && isPlaying ? (
                      <Pause size={16} className="text-white" />
                    ) : (
                      <Play size={16} className="text-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate">{track.title}</h4>
                    <p className="text-sm text-gray-400 truncate">
                      {track.artist} • {track.album}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <span className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded">{track.genre}</span>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-400">{track.plays}</p>
                    <p className="text-sm text-gray-500">{track.duration}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Heart size={14} />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Share2 size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </HolographicCard>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Playlists</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Curated collections of the best Balkan music for every mood and occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Balkan Hits 2024",
                description: "The biggest Balkan songs of the year",
                trackCount: "25 tracks",
                duration: "1h 45m",
                plays: "2.1M",
              },
              {
                title: "Electronic Balkans",
                description: "Modern electronic takes on traditional sounds",
                trackCount: "18 tracks",
                duration: "1h 12m",
                plays: "1.5M",
              },
              {
                title: "Folk Fusion",
                description: "Where tradition meets innovation",
                trackCount: "22 tracks",
                duration: "1h 38m",
                plays: "1.8M",
              },
            ].map((playlist, index) => (
              <HolographicCard
                key={index}
                className="fade-in p-6 hover:neon-glow group cursor-pointer transition-all duration-300"
              >
                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <div className="text-4xl">🎶</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{playlist.title}</h3>
                <p className="text-gray-400 mb-4">{playlist.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{playlist.trackCount}</span>
                  <span>{playlist.duration}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{playlist.plays} plays</p>
              </HolographicCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Love What You Hear?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Follow us on your favorite streaming platforms and never miss a new release from NXT Balkan artists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 min-w-[180px] !border-4 !border-white !rounded-lg shadow-lg"
              >
                Follow on Spotify
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="!border-4 !border-white text-white hover:bg-white hover:text-black min-w-[180px] !rounded-lg shadow-lg"
              >
                Subscribe on YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
