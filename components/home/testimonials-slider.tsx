"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "McLean, VA",
      rating: 5,
      text: "Empire Contracting transformed our backyard into an absolute paradise! The custom deck and pool exceeded all our expectations. Their attention to detail and professionalism was outstanding.",
      project: "Pool & Deck Installation",
    },
    {
      name: "Michael Rodriguez",
      location: "Vienna, VA",
      rating: 5,
      text: "We couldn't be happier with our new outdoor kitchen and patio. The team was professional, timely, and the quality is exceptional. Best investment we've made in our home!",
      project: "Outdoor Kitchen & Patio",
    },
    {
      name: "Jennifer Thompson",
      location: "Fairfax, VA",
      rating: 5,
      text: "Outstanding work on our privacy fence! Empire Contracting was responsive, professional, and completed the project on time and within budget. Highly recommend!",
      project: "Privacy Fence Installation",
    },
    {
      name: "David Chen",
      location: "Manassas, VA",
      rating: 5,
      text: "From design to completion, Empire Contracting was fantastic. Our new composite deck is beautiful and built to last. The crew was respectful and left everything clean.",
      project: "Custom Composite Deck",
    },
    {
      name: "Lisa Anderson",
      location: "Loudoun County, VA",
      rating: 5,
      text: "Empire turned our vision into reality with a stunning pool and surrounding hardscape. Their expertise and craftsmanship are second to none. Worth every penny!",
      project: "Pool & Hardscape",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">{"What Our Clients Say"}</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {"Join hundreds of satisfied homeowners who have transformed their outdoor spaces with Empire Contracting."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-xl md:text-2xl text-white/95 text-center mb-8 leading-relaxed italic">
                      {`"${testimonial.text}"`}
                    </p>

                    {/* Author Info */}
                    <div className="text-center">
                      <div className="font-sans font-bold text-lg text-white mb-1">{testimonial.name}</div>
                      <div className="text-sm text-white/80 mb-2">{testimonial.location}</div>
                      <div className="text-xs text-white/70">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-8" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
