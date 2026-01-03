"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send, Award } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const serviceAreas = [
    "Manassas",
    "McLean",
    "Vienna",
    "Fairfax",
    "Arlington",
    "Alexandria",
    "Reston",
    "Herndon",
    "Centreville",
    "Loudoun County",
    "Prince William County",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-6">{"Get Your Free Consultation"}</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {
                "Ready to transform your outdoor space? Contact us today and let's discuss how we can bring your vision to life."
              }
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-surface rounded-2xl p-8 shadow-lg">
                <h2 className="text-primary mb-6">{"Request a Quote"}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {"Fill out the form below and we'll get back to you within 24 hours to discuss your project."}
                </p>

                {isSubmitted ? (
                  <div className="bg-primary/10 border border-primary rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-primary font-bold text-xl mb-2">{"Thank You!"}</h3>
                    <p className="text-muted-foreground">
                      {"We've received your message and will contact you within 24 hours."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        {"Name *"}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        {"Email *"}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        {"Phone *"}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(703) 555-1234"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-foreground mb-2">
                        {"Project Type *"}
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">{"Select a project type"}</option>
                        <option value="deck">{"Custom Deck"}</option>
                        <option value="fence">{"Fence Installation"}</option>
                        <option value="pool">{"Swimming Pool"}</option>
                        <option value="patio">{"Patio & Hardscape"}</option>
                        <option value="kitchen">{"Outdoor Kitchen"}</option>
                        <option value="other">{"Other / Multiple Services"}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        {"Project Details *"}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-hover text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-surface rounded-2xl p-8 shadow-lg">
                  <h3 className="text-foreground mb-6 text-2xl font-bold">{"Contact Information"}</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{"Phone"}</h4>
                        <a
                          href="tel:+17035987499"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {"+1 (703) 598-7499"}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{"Email"}</h4>
                        <a
                          href="mailto:info@empirecontractingoutdoors.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {"info@empirecontractingoutdoors.com"}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{"Address"}</h4>
                        <p className="text-muted-foreground">
                          {"9069 McRae Ct"}
                          <br />
                          {"Manassas, VA 20110"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{"Business Hours"}</h4>
                        <p className="text-muted-foreground">
                          {"Monday - Sunday"}
                          <br />
                          {"8:00 AM - 8:00 PM"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">{"Follow Us"}</h4>
                    <div className="flex gap-3">
                      <a
                        href="https://facebook.com/EmpireContractingDMVCorp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary hover:bg-primary-hover rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Facebook className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="https://instagram.com/empirecontractingoutdoors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary hover:bg-primary-hover rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Instagram className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-primary text-white rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8" />
                    <h3 className="text-white text-xl font-bold">{"Why Choose Us?"}</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90">{"5.0 Rating - 64+ Five-Star Reviews"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90">{"Licensed & Insured Virginia Contractor"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90">{"20+ Years Experience"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90">{"Free Consultations & Quotes"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/90">{"Quality Materials & Craftsmanship"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Map */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-primary mb-4">{"Proudly Serving Northern Virginia"}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {"We provide professional outdoor contracting services throughout the Northern Virginia area."}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-background rounded-2xl overflow-hidden shadow-lg mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.79374098798!2d-77.57943449999999!3d38.7509488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6556def4a8093%3A0x1e5cfe3b32e16a1a!2sManassas%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Empire Contracting Outdoors Service Area"
                />
              </div>

              <div className="bg-background rounded-2xl p-8">
                <h3 className="text-foreground font-bold text-xl mb-4">{"Service Areas Include:"}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  {"Don't see your area? Contact us - we may service your location!"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
