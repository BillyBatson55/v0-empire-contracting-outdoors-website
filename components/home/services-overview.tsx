import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Hammer, Fence, Waves, Mountain, Flame, Sun } from "lucide-react"

export function ServicesOverview() {
  const services = [
    {
      icon: Hammer,
      title: "Custom Decks",
      description:
        "Beautiful, durable decks designed for your lifestyle. Wood, composite, and multi-level options with custom railings and lighting.",
      image: "modern custom composite deck with built-in lighting and seating in Northern Virginia",
      href: "/services#decks",
    },
    {
      icon: Fence,
      title: "Fences",
      description:
        "Privacy, security, and style. Wood, vinyl, aluminum, and chain link fences meeting all Virginia codes and HOA requirements.",
      image: "elegant white privacy fence around backyard in Virginia",
      href: "/services#fences",
    },
    {
      icon: Waves,
      title: "Swimming Pools",
      description:
        "Breathtaking inground pools with waterfalls, spas, and custom features. Turn your backyard into a private resort.",
      image: "stunning inground swimming pool with waterfall feature and lounge chairs",
      href: "/services#pools",
    },
    {
      icon: Mountain,
      title: "Patios & Hardscapes",
      description:
        "Paver patios, flagstone walkways, and retaining walls that add beauty and functionality to your outdoor space.",
      image: "beautiful paver patio with natural stone and outdoor furniture",
      href: "/services#patios",
    },
    {
      icon: Flame,
      title: "Outdoor Kitchens & Fireplaces",
      description:
        "Entertain in style with custom outdoor kitchens, grills, counters, and cozy fire pits for year-round enjoyment.",
      image: "luxury outdoor kitchen with grill, counters, and fire pit",
      href: "/services#kitchens",
    },
    {
      icon: Sun,
      title: "Retaining Walls & Solar",
      description:
        "Functional retaining walls and eco-friendly solar panel installation for energy-efficient outdoor living.",
      image: "decorative retaining wall with solar panels on outdoor structure",
      href: "/services#solar",
    },
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">{"Our Comprehensive Services"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "From custom decks to complete outdoor living transformations, we bring your vision to life with expert craftsmanship and attention to detail."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`/service-${service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}.jpg`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-primary hover:text-primary-hover p-0 h-auto font-semibold"
                  >
                    <Link href={service.href} className="flex items-center gap-2">
                      {"Learn More"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
            <Link href="/services">{"View All Services"}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
