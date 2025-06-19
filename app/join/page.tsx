"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, CheckCircle, Music, Users, Zap } from "lucide-react"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    artistName: "",
    realName: "",
    email: "",
    phone: "",
    genre: "",
    location: "",
    experience: "",
    socialMedia: "",
    demoLink: "",
    message: "",
  })

  const [step, setStep] = useState(1)
  const totalSteps = 3

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Handle final submission
      console.log("Form submitted:", formData)
      // Reset form
      setFormData({
        artistName: "",
        realName: "",
        email: "",
        phone: "",
        genre: "",
        location: "",
        experience: "",
        socialMedia: "",
        demoLink: "",
        message: "",
      })
      setStep(1)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const requirements = [
    "Original music with Balkan influences or themes",
    "Professional quality recordings or demos",
    "Active social media presence",
    "Commitment to artistic development",
    "Willingness to collaborate and tour",
  ]

  const faqs = [
    {
      question: "What genres do you work with?",
      answer:
        "We work with all genres that incorporate Balkan elements - from traditional folk to electronic fusion, hip-hop, and pop.",
    },
    {
      question: "Do I need professional recordings?",
      answer:
        "While professional quality is preferred, we also consider high-quality demos that showcase your potential and unique sound.",
    },
    {
      question: "What does the selection process involve?",
      answer:
        "Our A&R team reviews all submissions. Selected artists are invited for a meeting to discuss collaboration opportunities.",
    },
    {
      question: "Do you work with international artists?",
      answer:
        "Yes! While we focus on Balkan music, we welcome artists from anywhere who are passionate about this musical heritage.",
    },
  ]

  return (
    <div className="min-h-screen pt-20 animated-bg">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Roster</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to take your music career to the next level? Submit your demo and join the NXT Balkan family.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">
                  Step {step} of {totalSteps}
                </span>
                <span className="text-sm text-gray-400">{Math.round((step / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Basic Information</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="artistName" className="block text-sm font-medium mb-2">
                        Artist/Band Name *
                      </label>
                      <Input
                        id="artistName"
                        name="artistName"
                        value={formData.artistName}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-white/20 focus:border-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="realName" className="block text-sm font-medium mb-2">
                        Real Name *
                      </label>
                      <Input
                        id="realName"
                        name="realName"
                        value={formData.realName}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-white/20 focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-white/20 focus:border-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-transparent border-white/20 focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="genre" className="block text-sm font-medium mb-2">
                        Primary Genre *
                      </label>
                      <select
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md text-white focus:border-white focus:outline-none"
                      >
                        <option value="" className="bg-black">
                          Select Genre
                        </option>
                        <option value="folk-fusion" className="bg-black">
                          Folk Fusion
                        </option>
                        <option value="electronic" className="bg-black">
                          Electronic
                        </option>
                        <option value="hip-hop" className="bg-black">
                          Hip-Hop
                        </option>
                        <option value="pop" className="bg-black">
                          Pop
                        </option>
                        <option value="traditional" className="bg-black">
                          Traditional
                        </option>
                        <option value="rock" className="bg-black">
                          Rock
                        </option>
                        <option value="other" className="bg-black">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Location *
                      </label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, Country"
                        className="bg-transparent border-white/20 focus:border-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Experience & Links</h2>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium mb-2">
                      Musical Experience *
                    </label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your musical background, previous releases, performances, etc."
                      className="bg-transparent border-white/20 focus:border-white resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="socialMedia" className="block text-sm font-medium mb-2">
                      Social Media Links
                    </label>
                    <Textarea
                      id="socialMedia"
                      name="socialMedia"
                      value={formData.socialMedia}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Instagram, YouTube, TikTok, etc. (one per line)"
                      className="bg-transparent border-white/20 focus:border-white resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="demoLink" className="block text-sm font-medium mb-2">
                      Demo/Music Links *
                    </label>
                    <Input
                      id="demoLink"
                      name="demoLink"
                      value={formData.demoLink}
                      onChange={handleChange}
                      required
                      placeholder="SoundCloud, YouTube, Spotify, etc."
                      className="bg-transparent border-white/20 focus:border-white"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Additional Information</h2>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Vision
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="What makes your music unique? What are your goals? Why do you want to work with NXT Balkan?"
                      className="bg-transparent border-white/20 focus:border-white resize-none"
                    />
                  </div>

                  {/* File Upload Placeholder */}
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-white/40 transition-colors">
                    <Upload size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-400 mb-2">Upload Additional Files (Optional)</p>
                    <p className="text-sm text-gray-500">Press kit, photos, additional demos (Max 10MB)</p>
                    <Button variant="outline" className="mt-4 border-white/20 hover:bg-white hover:text-black">
                      Choose Files
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="!border-4 !border-white/80 hover:bg-white hover:text-black text-white !rounded-lg shadow-lg"
                  >
                    Previous
                  </Button>
                )}

                <Button
                  type="submit"
                  className={`bg-white text-black hover:bg-gray-200 !border-4 !border-white !rounded-lg shadow-lg ${step === 1 ? "ml-auto" : ""}`}
                >
                  {step === totalSteps ? "Submit Application" : "Next Step"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in opacity-0 translate-x-[-50px] transition-all duration-1000">
              <h2 className="text-4xl font-bold mb-6">What We're Looking For</h2>
              <p className="text-gray-400 text-lg mb-8">
                We're seeking talented artists who share our passion for Balkan music and are ready to take their
                careers to the next level.
              </p>

              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-in opacity-0 translate-x-[50px] transition-all duration-1000">
              <h2 className="text-4xl font-bold mb-6">What We Offer</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Music size={40} />,
                    title: "Professional Production",
                    description: "Access to world-class studios and production teams",
                  },
                  {
                    icon: <Users size={40} />,
                    title: "Artist Development",
                    description: "Comprehensive support for your artistic growth",
                  },
                  {
                    icon: <Zap size={40} />,
                    title: "Global Promotion",
                    description: "Strategic marketing to reach international audiences",
                  },
                ].map((offer, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-white">{offer.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-gray-400">{offer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="fade-in opacity-0 translate-y-10 transition-all duration-1000 glass-effect border-white/20 p-6"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
