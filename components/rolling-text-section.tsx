"use client"

import { useEffect, useRef } from "react"

export function RollingTextSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scroll = () => {
      scrollAmount += 0.5
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
      }
    }

    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  const items = [
    "Custom Decks",
    "Swimming Pools",
    "Outdoor Kitchens",
    "Fences & Gates",
    "Patios & Hardscapes",
    "Fire Features",
    "Retaining Walls",
    "Solar Integration",
  ]

  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 py-3 overflow-hidden">
      <div ref={scrollRef} className="flex gap-8 whitespace-nowrap overflow-hidden">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-sm sm:text-base font-sans font-bold text-white">{item}</span>
            <span className="text-white text-xl">{"•"}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
