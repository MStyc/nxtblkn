"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

interface VoiceControlProps {
  onCommand: (command: string) => void
}

declare global {
  interface Window {
    webkitSpeechRecognition: any
    SpeechRecognition: any
  }
}

export function VoiceControl({ onCommand }: VoiceControlProps) {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onresult = (event: any) => {
        const command = event.results[0][0].transcript.toLowerCase()
        onCommand(command)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      setRecognition(recognition)
    }
  }, [onCommand])

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
    }
  }

  if (!recognition) return null

  return (
    <Button
      onClick={toggleListening}
      variant="outline"
      size="sm"
      className={`border-white/20 hover:bg-white hover:text-black cursor-pointer ${
        isListening ? "bg-red-500 text-white" : ""
      }`}
    >
      {isListening ? <MicOff size={16} /> : <Mic size={16} />}
      <span className="ml-2">{isListening ? "Listening..." : "Voice Control"}</span>
    </Button>
  )
}
