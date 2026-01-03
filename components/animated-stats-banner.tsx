"use client"

import { useEffect, useState } from "react"
import { Award, Users, Home, Star } from "lucide-react"

export function AnimatedStatsBanner() {
  const stats = [
    { icon: Home, end: 500, suffix: "+", label: "Projects Completed", color: "text-orange-600" },
    { icon: Users, end: 400, suffix: "+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Award, end: 15, suffix: "+", label: "Years Experience", color: "text-orange-600" },
    { icon: Star, end: 5, suffix: ".0", label: "Average Rating", color: "text-blue-600" },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-600 py-6 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-[10px] sm:text-xs text-white/90 mt-1">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end])

  return <div className="text-2xl sm:text-3xl font-sans font-bold text-white">{`${count}${suffix}`}</div>
}
