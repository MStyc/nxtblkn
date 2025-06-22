"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Twitter } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Belgrade, Serbia", "Knez Mihailova 42", "11000 Belgrade"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+381 11 123 4567", "+381 64 123 4567", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@nxtbalkan.com", "artists@nxtbalkan.com", "press@nxtbalkan.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00", "Sun: Closed"],
    },
  ]

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@nxtbalkan", url: "#" },
    { icon: Youtube, name: "YouTube", handle: "NXT Balkan Official", url: "#" },
    { icon: Twitter, name: "Twitter", handle: "@nxtbalkan", url: "#" },
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text-neon">GET IN TOUCH</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to start your musical journey with us? We'd love to hear from you. Let's create something
              extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white focus:outline-none focus:border-white/40">
                    <option value="" className="bg-black">
                      Select a subject
                    </option>
                    <option value="general" className="bg-black">
                      General Inquiry
                    </option>
                    <option value="artist" className="bg-black">
                      Artist Management
                    </option>
                    <option value="production" className="bg-black">
                      Music Production
                    </option>
                    <option value="promotion" className="bg-black">
                      Music Promotion
                    </option>
                    <option value="press" className="bg-black">
                      Press & Media
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 resize-none"
                    placeholder="Tell us about your project, goals, or any questions you have..."
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 py-3 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-gray-400 text-sm">{social.handle}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-white/5 rounded-2xl border border-white/20 p-8 text-center"
              >
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-bold mb-2">Visit Our Studio</h3>
                <p className="text-gray-300 mb-4">
                  Located in the heart of Belgrade, our studio is open for visits by appointment.
                </p>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Schedule a Visit
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
