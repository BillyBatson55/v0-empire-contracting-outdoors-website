import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/cta-beautiful-backyard-dusk.jpg" alt="Contact us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-6">{"Ready to Transform Your Space?"}</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {"Contact us today for a free consultation and let's discuss how we can bring your outdoor dreams to life."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6">
            <Link href="/contact" className="flex items-center gap-2">
              {"Get Free Quote"}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white hover:bg-white/90 text-foreground text-lg px-8 py-6"
          >
            <a href="tel:+17035987499" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {"Call (703) 598-7499"}
            </a>
          </Button>
        </div>

        <p className="text-white/80 text-sm">{"Available Monday - Sunday, 8am - 8pm"}</p>
      </div>
    </section>
  )
}
