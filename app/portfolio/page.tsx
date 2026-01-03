"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "decks", name: "Decks" },
    { id: "pools", name: "Swimming Pools" },
    { id: "fences", name: "Fences" },
    { id: "patios", name: "Patios" },
    { id: "kitchens", name: "Outdoor Kitchens" },
    { id: "other", name: "Other" },
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Pool & Deck Transformation",
      category: "pools",
      location: "McLean, VA",
      description:
        "Complete backyard transformation featuring a custom inground pool with waterfall, composite deck, and integrated spa. 800 sq ft deck with built-in seating.",
      testimonial: "Absolutely stunning work! Our backyard is now our favorite place.",
      client: "Sarah M.",
      image: "luxury inground pool with waterfall feature and composite deck in McLean",
      beforeImage: "before photo of plain grass backyard",
    },
    {
      id: 2,
      title: "Multi-Level Cedar Deck",
      category: "decks",
      location: "Vienna, VA",
      description:
        "Beautiful 500 sq ft multi-level cedar deck with custom railings, built-in planters, and integrated LED lighting system.",
      testimonial: "The craftsmanship is exceptional. They exceeded our expectations!",
      client: "Michael R.",
      image: "stunning multi-level cedar deck with built-in features and lighting",
      beforeImage: "before photo of old worn deck",
    },
    {
      id: 3,
      title: "Modern Privacy Fence",
      category: "fences",
      location: "Fairfax, VA",
      description: "Premium vinyl privacy fence installation, 200 linear feet with decorative posts and custom gates.",
      testimonial: "Professional, timely, and beautiful results. Highly recommend!",
      client: "Jennifer T.",
      image: "modern white privacy fence with decorative elements",
      beforeImage: "before photo of chain link fence",
    },
    {
      id: 4,
      title: "Outdoor Entertainment Paradise",
      category: "kitchens",
      location: "Manassas, VA",
      description:
        "Complete outdoor living space with built-in grill, granite counters, fire pit, and 400 sq ft paver patio.",
      testimonial: "Our dream outdoor kitchen came to life perfectly!",
      client: "David C.",
      image: "luxury outdoor kitchen with grill, counters, and fire pit area",
      beforeImage: "before photo of empty patio area",
    },
    {
      id: 5,
      title: "Resort-Style Pool Installation",
      category: "pools",
      location: "Loudoun County, VA",
      description:
        "Freeform inground pool with beach entry, spa integration, and natural stone coping. 1200 sq ft surrounding deck.",
      testimonial: "It's like having a resort in our backyard!",
      client: "Lisa A.",
      image: "resort style freeform pool with beach entry and spa",
      beforeImage: "before photo of sloped backyard",
    },
    {
      id: 6,
      title: "Flagstone Patio & Retaining Walls",
      category: "patios",
      location: "Prince William County, VA",
      description:
        "600 sq ft flagstone patio with decorative retaining walls, landscape lighting, and built-in fire pit.",
      testimonial: "The attention to detail is remarkable. Beautiful work!",
      client: "Robert K.",
      image: "beautiful flagstone patio with retaining walls and fire pit",
      beforeImage: "before photo of uneven yard with erosion",
    },
    {
      id: 7,
      title: "Composite Deck with Pergola",
      category: "decks",
      location: "Arlington, VA",
      description: "450 sq ft composite deck with custom pergola, privacy screens, and built-in bench seating.",
      testimonial: "Perfect craftsmanship from start to finish!",
      client: "Amanda S.",
      image: "composite deck with pergola and privacy screens",
      beforeImage: "before photo of concrete patio",
    },
    {
      id: 8,
      title: "Custom Wood Fence Installation",
      category: "fences",
      location: "Alexandria, VA",
      description: "Cedar privacy fence, 150 linear feet with decorative lattice tops and custom gate hardware.",
      testimonial: "Quality materials and excellent installation!",
      client: "James W.",
      image: "cedar privacy fence with decorative lattice tops",
      beforeImage: "before photo of old wooden fence",
    },
    {
      id: 9,
      title: "Paver Patio with Outdoor Fireplace",
      category: "patios",
      location: "Reston, VA",
      description: "500 sq ft paver patio with custom outdoor fireplace, seating walls, and landscape integration.",
      testimonial: "We love spending evenings by our new fireplace!",
      client: "Michelle H.",
      image: "paver patio with stone outdoor fireplace and seating",
      beforeImage: "before photo of grass area",
    },
    {
      id: 10,
      title: "Pool Deck Renovation",
      category: "decks",
      location: "Centreville, VA",
      description: "Complete pool deck replacement with composite materials, 700 sq ft with integrated lighting.",
      testimonial: "The transformation is incredible. Thank you!",
      client: "Kevin P.",
      image: "modern composite pool deck with integrated lighting",
      beforeImage: "before photo of cracked concrete pool deck",
    },
    {
      id: 11,
      title: "Outdoor Kitchen & Bar",
      category: "kitchens",
      location: "Herndon, VA",
      description: "Custom outdoor kitchen with grill, refrigerator, sink, bar seating for 6, and granite countertops.",
      testimonial: "Best investment we've made in our home!",
      client: "Nicole B.",
      image: "outdoor kitchen with bar seating and granite counters",
      beforeImage: "before photo of empty deck",
    },
    {
      id: 12,
      title: "Retaining Walls with Solar Pergola",
      category: "other",
      location: "Sterling, VA",
      description: "Tiered retaining walls creating usable space, topped with solar-powered pergola and paver patio.",
      testimonial: "Eco-friendly and beautiful. Exactly what we wanted!",
      client: "Brian M.",
      image: "tiered retaining walls with solar panel pergola",
      beforeImage: "before photo of steep slope",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-white mb-3">Our Portfolio</h1>
            <p className="text-sm sm:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our stunning outdoor transformations across Northern Virginia.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-3 sm:py-4 bg-surface sticky top-16 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-sans font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-8 sm:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-surface rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => setLightboxImage(project.image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/portfolio-project-${project.id}.jpg`}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-sm font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground mb-1 text-base sm:text-lg font-bold">{project.title}</h3>
                    <p className="text-xs text-primary font-semibold mb-2">{project.location}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="border-t border-border pt-3">
                      <p className="text-xs text-muted-foreground italic mb-1 line-clamp-2">"{project.testimonial}"</p>
                      <p className="text-[10px] text-primary font-semibold">- {project.client}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={`/.jpg?height=800&width=1200&query=${lightboxImage}`}
              alt="Project"
              className="max-w-full max-h-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-surface">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary mb-3">Ready for Your Transformation?</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's create something amazing together. Schedule your free consultation today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white text-sm sm:text-base px-6"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
