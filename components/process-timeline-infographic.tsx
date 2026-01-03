"use client"

import { CheckCircle2, Phone, Calendar, Hammer, Sparkles } from "lucide-react"

export function ProcessTimelineInfographic() {
  const steps = [
    {
      icon: Phone,
      title: "Contact Us",
      description: "Call or fill out our form",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      title: "Consultation",
      description: "Free on-site assessment",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: CheckCircle2,
      title: "Design & Quote",
      description: "Custom plan & pricing",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Expert craftsmanship",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Sparkles,
      title: "Enjoy",
      description: "Your dream outdoor space",
      color: "from-blue-700 to-blue-800",
    },
  ]

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-sans font-bold text-center mb-2 text-gray-900">
          {"Our Simple Process"}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 text-center mb-6">{"From dream to reality in 5 easy steps"}</p>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-700" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3`}
                  >
                    <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-sans font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
