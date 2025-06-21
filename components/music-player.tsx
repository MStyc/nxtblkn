"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

interface Track {
  id: number
  title: string
  artist: string
  duration: string
  genre: string
  coverUrl: string
  audioUrl: string
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Noćni Raj",
    artist: "Crni Stojke",
    duration: "3:10",
    genre: "Folk Fusion",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "/music/nocni-raj.mp3",
  },
  {
    id: 2,
    title: "Electronic Folklore",
    artist: "Ana Stojanović",
    duration: "4:12",
    genre: "Electronic",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "/music/nocni-raj.mp3",
  },
  {
    id: 3,
    title: "Urban Balkan",
    artist: "Nikola Jovanović",
    duration: "3:28",
    genre: "Hip-Hop",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "/music/nocni-raj.mp3",
  },
  {
    id: 4,
    title: "Modern Tradition",
    artist: "Milica Radić",
    duration: "3:56",
    genre: "Pop",
    coverUrl: "/placeholder.svg?height=300&width=300",
    audioUrl: "/music/nocni-raj.mp3",
  },
]

export function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState("0:00")

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const track = tracks[currentTrack]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Player */}
      <Card className="glass-effect border-white/20 p-6 mb-8">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Album Art */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-800">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl">🎵</div>
              </div>
            </div>
          </div>

          {/* Track Info & Controls */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{track.title}</h3>
              <p className="text-gray-400">{track.artist}</p>
              <span className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded">{track.genre}</span>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-1/3 transition-all duration-300" />
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{currentTime}</span>
                <span>{track.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handlePrevious} className="text-white hover:bg-white/10">
                <SkipBack size={20} />
              </Button>

              <Button
                onClick={handlePlayPause}
                className="bg-white text-black hover:bg-gray-200 w-12 h-12 rounded-full"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </Button>

              <Button variant="ghost" size="sm" onClick={handleNext} className="text-white hover:bg-white/10">
                <SkipForward size={20} />
              </Button>

              <div className="flex items-center space-x-2 ml-4">
                <Volume2 size={16} className="text-gray-400" />
                <div className="w-20 bg-gray-800 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Playlist */}
      <Card className="glass-effect border-white/20 p-6">
        <h4 className="text-xl font-bold mb-4 text-white">Featured Tracks</h4>
        <div className="space-y-3">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                index === currentTrack ? "bg-white/10" : "hover:bg-white/5"
              }`}
              onClick={() => setCurrentTrack(index)}
            >
              <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center">
                {index === currentTrack && isPlaying ? (
                  <Pause size={16} className="text-white" />
                ) : (
                  <Play size={16} className="text-white" />
                )}
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-white">{track.title}</h5>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{track.genre}</span>
                <p className="text-sm text-gray-400">{track.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
