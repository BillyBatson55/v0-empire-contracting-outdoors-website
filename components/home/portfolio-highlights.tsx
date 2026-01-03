"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PortfolioHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "Luxury Pool & Deck Combo",
      location: "McLean, VA",
      image: "stunning custom pool with surrounding composite deck and outdoor furniture in McLean Virginia",
      description: "Complete backyard transformation with inground pool, composite deck, and outdoor kitchen.",
    },
    {
      title: "Custom Cedar Deck",
      location: "Vienna, VA",
      image: "beautiful multi-level cedar deck with built-in seating and pergola in Vienna",
      description: "Multi-level cedar deck with built-in seating, pergola, and integrated lighting.",
    },
    {
      title: "Elegant Privacy Fence",
      location: "Fairfax, VA",
      image: "modern white privacy fence with decorative posts around backyard",
      description: "Premium vinyl privacy fence with decorative posts and matching gate.",
    },
    {
      title: "Outdoor Entertainment Space",
      location: "Manassas, VA",
      image: "complete outdoor living space with kitchen, fire pit, and paver patio",
      description: "Full outdoor kitchen with fire pit, paver patio, and ambient lighting.",
    },
    {
      title: "Resort-Style Pool",
      location: "Loudoun County, VA",
      image: "resort style pool with waterfall, spa, and lounging area",
      description: "Freeform pool with waterfall feature, spa, and expansive lounging deck.",
    },
    {
      title: "Hardscape Masterpiece",
      location: "Prince William County, VA",
      image: "beautiful flagstone patio with retaining walls and landscape lighting",
      description: "Flagstone patio with decorative retaining walls and professional landscaping.",
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">{"Portfolio Highlights"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"See how we've transformed outdoor spaces across Northern Virginia into stunning realities."}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative h-[500px]">
                    <img
                      src={`/portfolio-${index + 1}.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-2">{project.location}</p>
                      <p className="text-white/90 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
            <Link href="/portfolio">{"View Full Portfolio"}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
