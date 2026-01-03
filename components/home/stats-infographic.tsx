"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Wrench, Star } from "lucide-react"

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Happy Clients", color: "text-primary" },
  { icon: Wrench, value: 3200, suffix: "+", label: "Projects Completed", color: "text-accent" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience", color: "text-primary" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Average Rating", color: "text-accent", decimal: true },
]

function CountUp({ end, duration = 2000, decimal = false }: { end: number; duration?: number; decimal?: boolean }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(progress * end)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return <div ref={ref}>{decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}</div>
}

export function StatsInfographic() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Excellence by the Numbers</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to quality and customer satisfaction speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 rounded-full p-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-baseline justify-center gap-1">
                <CountUp end={stat.value} decimal={stat.decimal} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-white/90 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
