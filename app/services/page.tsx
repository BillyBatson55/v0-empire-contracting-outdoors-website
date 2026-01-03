import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Hammer, Fence, Waves, Mountain, Flame, Sun, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services - Empire Contracting Outdoors | Decks, Pools, Fences & More",
  description:
    "Professional outdoor contracting services in Northern Virginia. Custom decks, swimming pools, fences, patios, outdoor kitchens, and solar integration. Licensed & insured.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "decks",
      icon: Hammer,
      title: "Custom Decks",
      tagline: "Elevate Your Outdoor Living",
      description:
        "Transform your backyard with a custom deck designed for your lifestyle and built to last. We specialize in creating beautiful outdoor spaces perfect for entertaining, relaxing, and enjoying Northern Virginia's seasons.",
      features: [
        "Wood decks (Cedar, Pressure-Treated, Exotic Hardwoods)",
        "Composite decking (Trex, TimberTech, Azek)",
        "Multi-level and tiered designs",
        "Custom railings and balusters",
        "Built-in seating and planters",
        "Integrated LED lighting systems",
        "Pergolas and shade structures",
        "Deck refinishing and restoration",
      ],
      benefits: [
        "Increases home value by 70-80% ROI",
        "Durable materials resistant to Virginia weather",
        "Low-maintenance composite options",
        "Custom designs to match your home's architecture",
      ],
      pricing: "Starting at $8,000 for basic 12x16 deck",
      image: "stunning multi-level composite deck with lighting and built-in features",
    },
    {
      id: "fences",
      icon: Fence,
      title: "Fences",
      tagline: "Privacy, Security & Style",
      description:
        "Quality fencing solutions that enhance privacy, security, and curb appeal. All our fences meet Virginia building codes and HOA requirements, installed by experienced professionals.",
      features: [
        "Privacy fences (wood, vinyl, composite)",
        "Decorative aluminum fencing",
        "Chain link fencing (residential & commercial)",
        "Pool safety fences (VA compliant)",
        "Split rail and ranch fencing",
        "Custom gates and hardware",
        "Fence staining and maintenance",
        "HOA-approved designs",
      ],
      benefits: [
        "Enhances property security and privacy",
        "Defines property boundaries clearly",
        "Pet and child containment",
        "Multiple materials and styles available",
      ],
      pricing: "Starting at $15-$40 per linear foot",
      image: "elegant white vinyl privacy fence with decorative posts",
    },
    {
      id: "pools",
      icon: Waves,
      title: "Swimming Pools",
      tagline: "Your Private Resort",
      description:
        "Create a breathtaking backyard oasis with a custom inground swimming pool. From design to installation, we handle every detail to deliver the pool of your dreams.",
      features: [
        "Inground pool installation (gunite, vinyl, fiberglass)",
        "Freeform and geometric designs",
        "Waterfall and water features",
        "Integrated spa and hot tub options",
        "Pool decking and coping",
        "LED pool lighting systems",
        "Saltwater and traditional chlorine systems",
        "Pool automation and smart controls",
      ],
      benefits: [
        "Increases property value significantly",
        "Year-round entertainment space",
        "Health and fitness benefits",
        "Custom designs for any yard size",
      ],
      pricing: "Starting at $50,000 for basic inground pool",
      image: "resort-style inground pool with waterfall and spa features",
    },
    {
      id: "patios",
      icon: Mountain,
      title: "Patios & Hardscapes",
      tagline: "Functional Beauty",
      description:
        "Professional hardscaping services that add beauty and functionality to your outdoor space. Expert installation of patios, walkways, and retaining walls using premium materials.",
      features: [
        "Paver patios (brick, concrete, natural stone)",
        "Flagstone patios and walkways",
        "Stamped and decorative concrete",
        "Retaining walls (segmented block, natural stone)",
        "Outdoor steps and staircases",
        "Fire pit surrounds and seating walls",
        "Drainage solutions",
        "Landscape edging and borders",
      ],
      benefits: [
        "Durable and low-maintenance surfaces",
        "Improves outdoor functionality",
        "Erosion control with retaining walls",
        "Endless design possibilities",
      ],
      pricing: "Starting at $12-$25 per square foot",
      image: "beautiful paver patio with natural stone and seating area",
    },
    {
      id: "kitchens",
      icon: Flame,
      title: "Outdoor Kitchens & Fireplaces",
      tagline: "Entertain in Style",
      description:
        "Transform your backyard into an entertainment paradise with a custom outdoor kitchen and cozy fireplace. Perfect for year-round gatherings with family and friends.",
      features: [
        "Built-in grills and smokers",
        "Custom countertops (granite, concrete, tile)",
        "Outdoor refrigerators and ice makers",
        "Sink and plumbing installations",
        "Storage cabinets and drawers",
        "Outdoor fireplaces and fire pits",
        "Pizza ovens",
        "Bar seating and dining areas",
      ],
      benefits: [
        "Expands living and entertaining space",
        "Increases home value substantially",
        "Year-round outdoor enjoyment",
        "Custom designs to fit any budget",
      ],
      pricing: "Starting at $15,000 for basic setup",
      image: "luxury outdoor kitchen with grill, counters, and fireplace",
    },
    {
      id: "solar",
      icon: Sun,
      title: "Retaining Walls & Solar Integration",
      tagline: "Sustainability Meets Function",
      description:
        "Eco-friendly outdoor solutions including professional retaining walls for erosion control and solar panel integration for energy-efficient outdoor living.",
      features: [
        "Segmented block retaining walls",
        "Natural stone retaining walls",
        "Tiered wall systems",
        "Garden walls and raised beds",
        "Solar panel installation for pergolas",
        "Solar-powered outdoor lighting",
        "Solar pool heating systems",
        "Energy-efficient outdoor solutions",
      ],
      benefits: [
        "Prevents soil erosion effectively",
        "Creates usable space on slopes",
        "Reduces energy costs with solar",
        "Environmentally friendly options",
      ],
      pricing: "Starting at $3,000 for retaining walls",
      image: "decorative retaining wall with solar panels on pergola",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="/services-various-projects.jpg" alt="Our Services" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-6">{"Our Comprehensive Outdoor Services"}</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {
                "From custom decks to complete outdoor transformations, we bring expertise, quality materials, and exceptional craftsmanship to every project in Northern Virginia."
              }
            </p>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => {
          const Icon = service.icon
          const isEven = index % 2 === 0

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 ${isEven ? "bg-background" : "bg-surface"} scroll-mt-20`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-primary mb-0">{service.title}</h2>
                        <p className="text-sm text-muted-foreground">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h3 className="text-foreground font-bold text-lg mb-3">{"What We Offer:"}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-foreground font-bold text-lg mb-3">{"Benefits:"}</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-surface p-4 rounded-lg mb-6 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">{"Pricing:"}</p>
                      <p className="text-lg font-bold text-primary">{service.pricing}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {"*Final pricing varies based on project scope and materials"}
                      </p>
                    </div>

                    <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
                      <Link href="/contact">{"Request a Free Quote"}</Link>
                    </Button>
                  </div>

                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={`/service-detail-${service.id}.jpg`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white mb-6">{"Ready to Get Started?"}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              {"Schedule a free consultation today and let's discuss how we can transform your outdoor space."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary text-lg px-8">
                <Link href="/contact">{"Get Free Consultation"}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <Link href="/portfolio">{"View Our Portfolio"}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
