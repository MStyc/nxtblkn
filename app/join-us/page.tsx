"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Music, Users, Award, CheckCircle, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function JoinUsPage() {
  const [activeTab, setActiveTab] = useState("artist")

  const requirements = [
    "Original music compositions",
    "High-quality audio recordings",
    "Professional attitude and commitment",
    "Willingness to collaborate and grow",
    "Passion for Balkan music and culture",
  ]

  const process = [
    {
      step: "01",
      title: "Submit Your Demo",
      description: "Upload your best tracks and tell us your story",
    },
    {
      step: "02",
      title: "Initial Review",
      description: "Our A&R team evaluates your submission within 48 hours",
    },
    {
      step: "03",
      title: "Interview Process",
      description: "Selected artists are invited for a detailed discussion",
    },
    {
      step: "04",
      title: "Welcome to NXT",
      description: "Begin your journey with personalized development plan",
    },
  ]

  const faqs = [
    {
      question: "What genres do you accept?",
      answer:
        "We welcome all genres that incorporate Balkan elements, from traditional folk to modern electronic fusion.",
    },
    {
      question: "Do I need professional recordings?",
      answer:
        "While professional quality is preferred, we also consider high-quality demos that showcase your potential.",
    },
    {
      question: "What does the management contract include?",
      answer:
        "Our contracts are artist-friendly and include career development, promotion, distribution, and creative support.",
    },
    {
      question: "How long does the review process take?",
      answer: "We review all submissions within 48 hours and respond with next steps or feedback.",
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text">JOIN THE REVOLUTION</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to take your music to the next level? Join the NXT Balkan family and let's create the future of
              music together.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-white/5 p-2 rounded-2xl border border-white/20">
              <div className="flex space-x-2">
                {[
                  { id: "artist", label: "Artists", icon: Music },
                  { id: "producer", label: "Producers", icon: Users },
                  { id: "songwriter", label: "Songwriters", icon: Award },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id ? "bg-white text-black" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="font-semibold">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Submission Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Submit Your Demo</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Artist/Stage Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Your stage name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Real Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Your real name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="+381 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Genre/Style</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-white/40">
                    <option value="" className="bg-black">
                      Select your primary genre
                    </option>
                    <option value="traditional" className="bg-black">
                      Traditional Balkan
                    </option>
                    <option value="modern-folk" className="bg-black">
                      Modern Folk
                    </option>
                    <option value="electronic" className="bg-black">
                      Electronic Fusion
                    </option>
                    <option value="pop" className="bg-black">
                      Contemporary Pop
                    </option>
                    <option value="hip-hop" className="bg-black">
                      Hip-Hop Fusion
                    </option>
                    <option value="indie" className="bg-black">
                      Indie/Alternative
                    </option>
                    <option value="other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell Us Your Story</label>
                  <Textarea
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 resize-none"
                    placeholder="Share your musical journey, influences, and what makes you unique..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Upload Your Demo</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors duration-300">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-300 mb-2">Drag and drop your files here, or click to browse</p>
                    <p className="text-gray-500 text-sm">Supported formats: MP3, WAV, FLAC (Max 50MB per file)</p>
                    <Button
                      variant="outline"
                      className="mt-4 border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                    >
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Social Media Links</label>
                  <div className="space-y-3">
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Instagram URL (optional)"
                    />
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="YouTube URL (optional)"
                    />
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Spotify URL (optional)"
                    />
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3 text-lg font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            </motion.div>

            {/* Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-12"
            >
              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold mb-6">What We're Looking For</h3>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-gray-300 text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                      className="bg-white/5 p-4 rounded-lg border border-white/20"
                    >
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-gray-300 text-sm">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
