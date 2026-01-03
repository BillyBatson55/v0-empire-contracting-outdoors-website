import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-luxury-backyard-pool-deck.jpg"
          alt="Luxury outdoor living space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-white mb-3 sm:mb-4 text-balance leading-tight">
            Transform Your Outdoor Dreams into Stunning Realities
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed">
            Serving Northern Virginia with Expert Craftsmanship
          </p>
          <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 leading-relaxed">
            DM us or call{" "}
            <a href="tel:+17035987499" className="text-accent font-bold hover:underline">
              +1 (703) 598-7499
            </a>{" "}
            to start your project today!
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="default" className="bg-accent hover:bg-orange-600 text-white text-sm sm:text-base">
              <Link href="/contact" className="flex items-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="default"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-sm sm:text-base backdrop-blur-sm"
            >
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">5.0/5</span>
            </div>
            <div className="text-white/80 text-xs sm:text-sm">50+ Reviews</div>
            <div className="text-white/80 text-xs sm:text-sm">14+ 5-Star Google Reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}
