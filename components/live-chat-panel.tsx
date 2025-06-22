"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, User, Bot, Music, Users, Headphones, ShoppingBag } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function LiveChatPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! 👋 Welcome to NXT Balkan. I'm your AI assistant here to help you with anything about our music services, artists, or how to get started. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickActions = [
    { icon: Music, text: "Submit Demo", action: "I'd like to submit my demo" },
    { icon: Users, text: "Find Artists", action: "Show me Balkan artists" },
    { icon: Headphones, text: "Our Services", action: "Tell me about your services" },
    { icon: ShoppingBag, text: "Shop Merch", action: "Show me your merchandise" },
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickAction = (action: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: action,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(action),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    if (input.includes("demo") || input.includes("submit")) {
      return "Great! You can submit your demo through our 'Join Us' page. We review all submissions within 48 hours and provide feedback. Would you like me to guide you through the process?"
    } else if (input.includes("artist") || input.includes("balkan")) {
      return "We work with amazing Balkan artists across various genres! Check out our Artists page to discover incredible talent like Milica Todorović, Balkan Beats Collective, and more. Are you looking for a specific style or interested in becoming an artist yourself?"
    } else if (input.includes("service") || input.includes("production") || input.includes("management")) {
      return "We offer three main services: Music Production (state-of-the-art recording and mixing), Artist Management (career development and branding), and Music Promotion (digital marketing across all platforms). Which service interests you most?"
    } else if (input.includes("shop") || input.includes("merch") || input.includes("buy")) {
      return "Check out our exclusive NXT Balkan merchandise in our Shop section! We have t-shirts, hoodies, and limited edition items. You can purchase directly through WhatsApp, email, or Instagram."
    } else if (input.includes("price") || input.includes("cost")) {
      return "Our pricing varies based on the services you need. We offer flexible packages for music production, artist management, and promotion. Would you like to schedule a consultation to discuss your specific needs and get a custom quote?"
    } else if (input.includes("contact") || input.includes("call") || input.includes("phone")) {
      return "You can reach us through multiple channels! Visit our Contact page for phone numbers (+381 11 123 4567), email addresses (info@nxtbalkan.com), and our studio location in Belgrade. We're also available on WhatsApp and social media."
    } else if (input.includes("location") || input.includes("studio") || input.includes("belgrade")) {
      return "Our main studio is located in the heart of Belgrade, Serbia at Knez Mihailova 42. We're open Mon-Fri 9:00-18:00, Sat 10:00-16:00. You can schedule a visit to see our facilities!"
    } else {
      return "That's a great question! I'd love to help you with that. For detailed information, I recommend checking out our website sections or contacting our team directly. Is there anything specific about our services you'd like to know more about?"
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-white text-black hover:bg-gray-200 shadow-2xl animated-button group"
        >
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
        </Button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full md:w-96 bg-black/95 backdrop-blur-md border-l border-white/20 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">NXT Assistant</h3>
                    <p className="text-xs text-green-400 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                      Online
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0 animated-button"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="p-6 border-b border-white/20">
                  <p className="text-sm text-gray-300 mb-4">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleQuickAction(action.action)}
                        className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 text-left animated-button"
                      >
                        <action.icon className="h-4 w-4 text-white" />
                        <span className="text-xs text-white">{action.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%]`}>
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-black" />
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-white text-black rounded-br-sm"
                            : "bg-white/10 text-white rounded-bl-sm"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-60 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-6 border-t border-white/20">
                <div className="flex space-x-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-white text-black hover:bg-gray-200 px-4 animated-button group"
                  >
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Press Enter to send • Powered by NXT AI</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
