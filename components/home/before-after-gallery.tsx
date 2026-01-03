"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const beforeAfterProjects = [
  {
    id: 1,
    title: "Pool & Deck Transformation",
    before: "/before-after-1-before.jpg",
    after: "/before-after-1-after.jpg",
  },
  {
    id: 2,
    title: "Backyard Deck Upgrade",
    before: "/before-after-2-before.jpg",
    after: "/before-after-2-after.jpg",
  },
  {
    id: 3,
    title: "Fence Replacement",
    before: "/before-after-3-before.jpg",
    after: "/before-after-3-after.jpg",
  },
  {
    id: 4,
    title: "Patio Renovation",
    before: "/before-after-4-before.jpg",
    after: "/before-after-4-after.jpg",
  },
]

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showBefore, setShowBefore] = useState(true)

  const current = beforeAfterProjects[currentIndex]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterProjects.length)
    setShowBefore(true)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length)
    setShowBefore(true)
  }

  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-primary mb-2">Before & After Transformations</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            See the incredible transformations we've created for homeowners across Northern Virginia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Image Container */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={showBefore ? current.before : current.after}
                alt={`${current.title} - ${showBefore ? "Before" : "After"}`}
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />

              {/* Before/After Label */}
              <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                {showBefore ? "BEFORE" : "AFTER"}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          {/* Toggle Before/After */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button
              variant={showBefore ? "default" : "outline"}
              size="sm"
              onClick={() => setShowBefore(true)}
              className="text-xs sm:text-sm"
            >
              Before
            </Button>
            <Button
              variant={!showBefore ? "default" : "outline"}
              size="sm"
              onClick={() => setShowBefore(false)}
              className="text-xs sm:text-sm"
            >
              After
            </Button>
          </div>

          {/* Title */}
          <h3 className="text-center mt-4 text-base sm:text-lg font-bold text-foreground">{current.title}</h3>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {beforeAfterProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setShowBefore(true)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
