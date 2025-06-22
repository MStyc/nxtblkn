"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  X,
  Send,
  User,
  Phone,
  Mail,
  HelpCircle,
  Search,
  Paperclip,
  Smile,
  Star,
  Clock,
  CheckCircle,
  Headphones,
  Music,
  Users,
  Settings,
  ArrowLeft,
  Video,
  MoreHorizontal,
} from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "agent"
  timestamp: Date
  type?: "text" | "image" | "file"
  status?: "sent" | "delivered" | "read"
}

interface SupportAgent {
  id: number
  name: string
  avatar: string
  status: "online" | "away" | "busy"
  role: string
  rating: number
  responseTime: string
}

export function LiveSupportSystem() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentView, setCurrentView] = useState<"main" | "chat" | "faq" | "contact" | "agents">("main")
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<SupportAgent | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const supportAgents: SupportAgent[] = [
    {
      id: 1,
      name: "Marija Petrović",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      role: "Senior Support Specialist",
      rating: 4.9,
      responseTime: "< 2 min",
    },
    {
      id: 2,
      name: "Stefan Jovanović",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      role: "Technical Support",
      rating: 4.8,
      responseTime: "< 5 min",
    },
    {
      id: 3,
      name: "Ana Nikolić",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "away",
      role: "Artist Relations",
      rating: 5.0,
      responseTime: "< 10 min",
    },
  ]

  const faqs = [
    {
      category: "Getting Started",
      icon: Music,
      questions: [
        {
          q: "How do I submit my demo?",
          a: "You can submit your demo through our 'Join Us' page. Upload your best tracks and tell us your story. We review all submissions within 48 hours.",
        },
        {
          q: "What genres do you accept?",
          a: "We welcome all genres that incorporate Balkan elements, from traditional folk to modern electronic fusion.",
        },
      ],
    },
    {
      category: "Services",
      icon: Headphones,
      questions: [
        {
          q: "What production services do you offer?",
          a: "We offer professional recording, mixing, mastering, beat production, and vocal coaching in our state-of-the-art studios.",
        },
        {
          q: "How does artist management work?",
          a: "Our management includes career strategy, brand building, tour booking, contract negotiation, and financial planning.",
        },
      ],
    },
    {
      category: "Technical",
      icon: Settings,
      questions: [
        {
          q: "What audio formats do you accept?",
          a: "We accept MP3, WAV, FLAC, and AIFF formats. For best quality, we recommend 24-bit/48kHz WAV files.",
        },
        {
          q: "How can I track my submission?",
          a: "After submitting, you'll receive a tracking ID via email. You can use this to check your submission status.",
        },
      ],
    },
  ]

  const quickActions = [
    { icon: MessageCircle, label: "Start Chat", action: () => setCurrentView("chat") },
    { icon: HelpCircle, label: "Browse FAQ", action: () => setCurrentView("faq") },
    { icon: Users, label: "Our Agents", action: () => setCurrentView("agents") },
    { icon: Mail, label: "Contact Form", action: () => setCurrentView("contact") },
  ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Lock body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      document.documentElement.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      document.documentElement.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false)
      const agentResponse: Message = {
        id: Date.now() + 1,
        text: getAgentResponse(inputValue),
        sender: "agent",
        timestamp: new Date(),
        status: "delivered",
      }
      setMessages((prev) => [...prev, agentResponse])
    }, 2000)
  }

  const getAgentResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    if (input.includes("demo") || input.includes("submit")) {
      return "Great! I'd be happy to help you with demo submission. You can upload your tracks through our 'Join Us' page. What genre are you working with?"
    } else if (input.includes("price") || input.includes("cost")) {
      return "Our pricing varies based on the services you need. I can connect you with our team for a personalized quote. What specific services are you interested in?"
    } else if (input.includes("studio") || input.includes("recording")) {
      return "Our Belgrade studio is equipped with industry-leading technology. We offer recording, mixing, and mastering services. Would you like to schedule a tour?"
    } else {
      return "Thanks for reaching out! I'm here to help with any questions about our services, artists, or how to get started with NXT Balkan. What would you like to know more about?"
    }
  }

  const startChatWithAgent = (agent: SupportAgent) => {
    setSelectedAgent(agent)
    setCurrentView("chat")
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: `Hi! I'm ${agent.name}, your ${agent.role}. How can I help you today?`,
        sender: "agent",
        timestamp: new Date(),
        status: "delivered",
      }
      setMessages([welcomeMessage])
    }
  }

  const renderMainView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      {/* Header */}
      <div className="p-4 sm:p-6 lg:p-8 text-center border-b border-white/10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
        >
          <Headphones className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
        </motion.div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 gradient-text">Live Support</h1>
        <p className="text-sm sm:text-base text-gray-300">We're here to help you 24/7</p>
      </div>

      {/* Quick Actions */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6">How can we help you?</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={action.action}
              className="p-3 sm:p-4 lg:p-6 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group text-left"
            >
              <action.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white">{action.label}</h3>
            </motion.button>
          ))}
        </div>

        {/* Mobile-specific quick help text */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-white/10">
          <h3 className="text-xs sm:text-sm font-semibold text-white mb-2">💡 Quick Tips</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Tap "Start Chat" for instant help, browse our FAQ for quick answers, or use the contact form for detailed
            inquiries.
          </p>
        </div>

        {/* Online Agents */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-3 sm:mb-4">Available Agents</h3>
          <div className="space-y-2 sm:space-y-3">
            {supportAgents
              .filter((agent) => agent.status === "online")
              .slice(0, 2)
              .map((agent, index) => (
                <motion.button
                  key={agent.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onClick={() => startChatWithAgent(agent)}
                  className="w-full flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/5 rounded-lg lg:rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={agent.avatar || "/placeholder.svg"}
                      alt={agent.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-green-400 rounded-full border-2 border-black"></div>
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-white truncate">{agent.name}</h4>
                    <p className="text-xs text-gray-400 truncate">{agent.role}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-white">{agent.rating}</span>
                    </div>
                    <p className="text-xs text-gray-400">{agent.responseTime}</p>
                  </div>
                </motion.button>
              ))}
          </div>
        </div>

        {/* Support Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl lg:rounded-2xl border border-white/10"
        >
          <div className="text-center">
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">24/7</div>
            <div className="text-xs text-gray-300">Available</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">&lt; 2min</div>
            <div className="text-xs text-gray-300">Response</div>
          </div>
          <div className="text-center">
            <div className="text-base sm:text-lg lg:text-2xl font-bold text-white">98%</div>
            <div className="text-xs text-gray-300">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  const renderChatView = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 relative z-10">
        <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView("main")}
            className="text-white hover:bg-white/10 p-2 flex-shrink-0"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          {selectedAgent && (
            <>
              <div className="relative flex-shrink-0">
                <img
                  src={selectedAgent.avatar || "/placeholder.svg"}
                  alt={selectedAgent.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-black"></div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-white truncate">{selectedAgent.name}</h3>
                <p className="text-xs text-green-400 truncate">
                  Online • Typically replies in {selectedAgent.responseTime}
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 ml-2 sm:ml-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1.5 sm:p-2">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1.5 sm:p-2">
            <Video className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1.5 sm:p-2">
            <MoreHorizontal className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-end space-x-2 max-w-[85%] sm:max-w-[80%]`}>
                {message.sender === "agent" && selectedAgent && (
                  <img
                    src={selectedAgent.avatar || "/placeholder.svg"}
                    alt={selectedAgent.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div
                  className={`p-3 sm:p-4 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-white text-black rounded-br-sm"
                      : "bg-white/10 text-white rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                    {message.sender === "user" && (
                      <div className="flex items-center space-x-1">
                        {message.status === "sent" && <Clock className="h-3 w-3 opacity-60" />}
                        {message.status === "delivered" && <CheckCircle className="h-3 w-3 opacity-60" />}
                        {message.status === "read" && <CheckCircle className="h-3 w-3 text-blue-400" />}
                      </div>
                    )}
                  </div>
                </div>
                {message.sender === "user" && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-start"
            >
              <div className="flex items-center space-x-2">
                {selectedAgent && (
                  <img
                    src={selectedAgent.avatar || "/placeholder.svg"}
                    alt={selectedAgent.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                )}
                <div className="bg-white/10 p-3 sm:p-4 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-4 sm:p-6 border-t border-white/10">
        <div className="flex items-end space-x-2 sm:space-x-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 bg-white/10 rounded-2xl border border-white/20 focus-within:border-white/40 transition-colors">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2 sm:p-3">
                <Paperclip className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none text-sm sm:text-base"
              />
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2 sm:p-3">
                <Smile className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-white text-black hover:bg-gray-200 p-2 sm:p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Press Enter to send • We typically reply within 2 minutes
        </p>
      </div>
    </motion.div>
  )

  const renderFAQView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      {/* FAQ Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView("main")}
            className="text-white hover:bg-white/10 p-2"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-gray-400">Find quick answers to common questions</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 sm:p-6 border-b border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <category.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{category.category}</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + faqIndex * 0.05 }}
                    className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                  >
                    <details className="group">
                      <summary className="flex items-center justify-between p-3 sm:p-4 cursor-pointer hover:bg-white/5 transition-colors">
                        <h4 className="font-medium text-white pr-4 text-sm sm:text-base">{faq.q}</h4>
                        <HelpCircle className="h-4 w-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const renderContactView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      {/* Contact Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView("main")}
            className="text-white hover:bg-white/10 p-2"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Contact Us</h2>
            <p className="text-xs sm:text-sm text-gray-400">Send us a detailed message</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <form className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-2">First Name</label>
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 text-sm"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-white mb-2">Last Name</label>
              <Input
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 text-sm"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-white mb-2">Email Address</label>
            <Input
              type="email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-white mb-2">Subject</label>
            <select className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-white/40 text-sm">
              <option value="" className="bg-black">
                Select a subject
              </option>
              <option value="general" className="bg-black">
                General Inquiry
              </option>
              <option value="demo" className="bg-black">
                Demo Submission
              </option>
              <option value="technical" className="bg-black">
                Technical Support
              </option>
              <option value="billing" className="bg-black">
                Billing Question
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-white mb-2">Message</label>
            <Textarea
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 resize-none text-sm"
              placeholder="Please describe your inquiry in detail..."
            />
          </div>

          <Button
            size="lg"
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3 text-sm sm:text-base font-semibold"
          >
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  )

  const renderAgentsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-full flex flex-col"
    >
      {/* Agents Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView("main")}
            className="text-white hover:bg-white/10 p-2"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Our Support Team</h2>
            <p className="text-xs sm:text-sm text-gray-400">Meet our expert support agents</p>
          </div>
        </div>
      </div>

      {/* Agents List */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {supportAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="relative">
                  <img
                    src={agent.avatar || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-black ${
                      agent.status === "online"
                        ? "bg-green-400"
                        : agent.status === "away"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                    }`}
                  ></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{agent.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs sm:text-sm text-white">{agent.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-3 text-xs sm:text-sm">{agent.role}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{agent.responseTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            agent.status === "online"
                              ? "bg-green-400"
                              : agent.status === "away"
                                ? "bg-yellow-400"
                                : "bg-red-400"
                          }`}
                        ></div>
                        <span className="capitalize">{agent.status}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => startChatWithAgent(agent)}
                      size="sm"
                      disabled={agent.status === "busy"}
                      className="bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                    >
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      {/* Support Icon - Fixed to Right Border */}
      <motion.div
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ scale: 0, x: "50%" }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-black border border-white/20 text-white p-3 sm:p-4 rounded-l-2xl shadow-2xl hover:shadow-white/10 hover:border-white/40 transition-all duration-300 group relative overflow-hidden"
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 flex flex-col items-center space-y-1 sm:space-y-2">
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <Headphones className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.div>
            <span className="text-xs font-semibold whitespace-nowrap writing-mode-vertical transform rotate-180 hidden sm:block">
              Live Support
            </span>
            <span className="text-xs font-semibold whitespace-nowrap writing-mode-vertical transform rotate-180 sm:hidden">
              Help
            </span>
          </div>

          <motion.div
            className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-full border border-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.button>
      </motion.div>

      {/* Full Screen Support Panel - ALWAYS FULL SCREEN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl"
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full w-full relative overflow-hidden"
              style={{
                background: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Enhanced Glass Effect Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.02]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_50%)]" />

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setIsOpen(false)
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              {/* Content */}
              <div className="relative z-10 h-full">
                <AnimatePresence mode="wait">
                  {currentView === "main" && renderMainView()}
                  {currentView === "chat" && renderChatView()}
                  {currentView === "faq" && renderFAQView()}
                  {currentView === "contact" && renderContactView()}
                  {currentView === "agents" && renderAgentsView()}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
