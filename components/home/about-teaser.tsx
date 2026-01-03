import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Shield } from "lucide-react"

export function AboutTeaser() {
  const stats = [
    { icon: Users, value: "100+", label: "Satisfied Clients" },
    { icon: Award, value: "5.0", label: "Average Rating" },
    { icon: CheckCircle, value: "20+", label: "Years Experience" },
    { icon: Shield, value: "100%", label: "Licensed & Insured" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-primary mb-6">{"Expert Craftsmanship You Can Trust"}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {
                "Family-owned with over 20 years of expert craftsmanship in Northern Virginia. We specialize in transforming ordinary backyards into extraordinary outdoor living spaces."
              }
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {
                "Licensed, insured, and committed to quality, we bring your outdoor dreams to life with personalized designs and exceptional attention to detail."
              }
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{"50+ 5-Star Reviews on Thumbtack"}</span>
              </div>
              <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{"14+ 5-Star Google Reviews"}</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
              <Link href="/about">{"Learn More About Us"}</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-surface p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
