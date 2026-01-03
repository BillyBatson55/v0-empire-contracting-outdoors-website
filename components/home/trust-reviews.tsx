import { Star, ThumbsUp, Award } from "lucide-react"

export function TrustReviews() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">{"Trusted by Homeowners Across Northern Virginia"}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Our 5-star ratings speak for themselves. See what your neighbors are saying about our work."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Google Reviews */}
          <div className="bg-surface rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sans font-bold text-2xl text-foreground mb-2">{"Google"}</h3>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{"5.0"}</div>
            <div className="text-sm text-muted-foreground">{"Based on 14+ reviews"}</div>
            <a
              href="https://www.google.com/search?q=Empire+Contracting+Outdoors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary hover:underline font-semibold"
            >
              {"Read Reviews →"}
            </a>
          </div>

          {/* Thumbtack Reviews */}
          <div className="bg-surface rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sans font-bold text-2xl text-foreground mb-2">{"Thumbtack"}</h3>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-3xl font-bold text-accent mb-1">{"5.0"}</div>
            <div className="text-sm text-muted-foreground">{"Based on 50+ reviews"}</div>
            <a
              href="https://www.thumbtack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-accent hover:underline font-semibold"
            >
              {"Read Reviews →"}
            </a>
          </div>

          {/* HomeAdvisor/Angi */}
          <div className="bg-surface rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-sans font-bold text-2xl text-foreground mb-2">{"Angi"}</h3>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-3xl font-bold text-earth mb-1">{"5.0"}</div>
            <div className="text-sm text-muted-foreground">{"Top Rated Pro"}</div>
            <a
              href="https://www.angi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-earth hover:underline font-semibold"
            >
              {"View Profile →"}
            </a>
          </div>
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-muted-foreground">{"Licensed & Insured"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-muted-foreground">{"20+ Years Experience"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-muted-foreground">{"100% Satisfaction Guaranteed"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
