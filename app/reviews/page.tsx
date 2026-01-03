import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp, Award, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reviews & Testimonials - Empire Contracting Outdoors | 5-Star Rated",
  description:
    "Read 5-star reviews from satisfied clients. Empire Contracting Outdoors has 50+ reviews on Thumbtack and 14+ on Google with perfect ratings.",
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "McLean, VA",
      rating: 5,
      date: "November 2025",
      project: "Pool & Deck Installation",
      text: "Empire Contracting transformed our backyard into an absolute paradise! The custom deck and pool exceeded all our expectations. Their attention to detail and professionalism was outstanding from start to finish. The team was respectful, clean, and always on time.",
      source: "Google",
    },
    {
      name: "Michael Rodriguez",
      location: "Vienna, VA",
      rating: 5,
      date: "October 2025",
      project: "Outdoor Kitchen & Patio",
      text: "We couldn't be happier with our new outdoor kitchen and patio. The team was professional, timely, and the quality is exceptional. They worked with our budget and delivered exactly what we envisioned. Best investment we've made in our home!",
      source: "Thumbtack",
    },
    {
      name: "Jennifer Thompson",
      location: "Fairfax, VA",
      rating: 5,
      date: "September 2025",
      project: "Privacy Fence Installation",
      text: "Outstanding work on our privacy fence! Empire Contracting was responsive, professional, and completed the project on time and within budget. The fence looks beautiful and is exactly what we wanted. Highly recommend!",
      source: "Google",
    },
    {
      name: "David Chen",
      location: "Manassas, VA",
      rating: 5,
      date: "August 2025",
      project: "Custom Composite Deck",
      text: "From design to completion, Empire Contracting was fantastic. Our new composite deck is beautiful and built to last. The crew was respectful and left everything clean each day. Robert was great to work with and very knowledgeable.",
      source: "Thumbtack",
    },
    {
      name: "Lisa Anderson",
      location: "Loudoun County, VA",
      rating: 5,
      date: "July 2025",
      project: "Pool & Hardscape",
      text: "Empire turned our vision into reality with a stunning pool and surrounding hardscape. Their expertise and craftsmanship are second to none. They handled every detail professionally and the result is spectacular. Worth every penny!",
      source: "Angi",
    },
    {
      name: "Robert Kim",
      location: "Prince William County, VA",
      rating: 5,
      date: "June 2025",
      project: "Patio & Retaining Walls",
      text: "The flagstone patio and retaining walls are gorgeous! Empire solved our drainage issues while creating a beautiful outdoor space. The crew was professional, and the project manager kept us informed throughout. Excellent work!",
      source: "Google",
    },
    {
      name: "Amanda Stevens",
      location: "Arlington, VA",
      rating: 5,
      date: "May 2025",
      project: "Deck with Pergola",
      text: "We love our new deck and pergola! Empire Contracting delivered exceptional quality and attention to detail. They were patient with our questions and made great suggestions that improved the design. Highly professional team!",
      source: "Thumbtack",
    },
    {
      name: "James Wilson",
      location: "Alexandria, VA",
      rating: 5,
      date: "April 2025",
      project: "Cedar Fence Installation",
      text: "Quality materials and excellent installation! Our cedar fence is beautiful and sturdy. Empire Contracting was professional, punctual, and their pricing was fair. They cleaned up thoroughly and the fence looks perfect!",
      source: "Google",
    },
    {
      name: "Michelle Harris",
      location: "Reston, VA",
      rating: 5,
      date: "March 2025",
      project: "Patio & Outdoor Fireplace",
      text: "We love spending evenings by our new fireplace and patio! Empire did an amazing job from design to completion. The craftsmanship is top-notch and they were a pleasure to work with. Our backyard is now our favorite room!",
      source: "Thumbtack",
    },
    {
      name: "Kevin Patterson",
      location: "Centreville, VA",
      rating: 5,
      date: "February 2025",
      project: "Pool Deck Renovation",
      text: "The transformation of our pool deck is incredible! Empire replaced our old cracked concrete with beautiful composite decking. The team was efficient, professional, and the quality is outstanding. Thank you!",
      source: "Angi",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-6">{"Client Reviews & Testimonials"}</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              {"5-Star Excellence Across All Platforms"}
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-white/90 text-lg">{"Based on 64+ verified reviews"}</p>
          </div>
        </section>

        {/* Review Platform Stats */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Google Reviews */}
              <div className="bg-background rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-sans font-bold text-3xl text-foreground mb-2">{"Google"}</h3>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{"5.0"}</div>
                <div className="text-muted-foreground mb-4">{"Based on 14+ reviews"}</div>
                <a
                  href="https://www.google.com/search?q=Empire+Contracting+Outdoors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-semibold"
                >
                  {"Read on Google"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Thumbtack Reviews */}
              <div className="bg-background rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-sans font-bold text-3xl text-foreground mb-2">{"Thumbtack"}</h3>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-4xl font-bold text-accent mb-2">{"5.0"}</div>
                <div className="text-muted-foreground mb-4">{"Based on 50+ reviews"}</div>
                <a
                  href="https://www.thumbtack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
                >
                  {"Read on Thumbtack"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Angi/HomeAdvisor */}
              <div className="bg-background rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-sans font-bold text-3xl text-foreground mb-2">{"Angi"}</h3>
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-4xl font-bold text-earth mb-2">{"5.0"}</div>
                <div className="text-muted-foreground mb-4">{"Top Rated Pro"}</div>
                <a
                  href="https://www.angi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-earth hover:underline font-semibold"
                >
                  {"View on Angi"}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary mb-4">{"What Our Clients Say"}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {"Real reviews from real homeowners who trusted us with their outdoor transformations."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reviews.map((review) => (
                <div
                  key={review.name + review.date}
                  className="bg-surface rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.source}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">{`"${review.text}"`}</p>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-sans font-bold text-foreground mb-1">{review.name}</div>
                        <div className="text-sm text-muted-foreground mb-1">{review.location}</div>
                        <div className="text-xs text-primary font-semibold">{review.project}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave Review CTA */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white mb-6">{"Had a Great Experience?"}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              {
                "We'd love to hear about your project! Leave us a review and help other homeowners discover quality outdoor contracting."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary text-lg px-8">
                <a
                  href="https://www.google.com/search?q=Empire+Contracting+Outdoors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Leave Google Review"}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8"
              >
                <a href="https://www.thumbtack.com" target="_blank" rel="noopener noreferrer">
                  {"Leave Thumbtack Review"}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-primary mb-6">{"Join Our Family of Satisfied Clients"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {"Ready to transform your outdoor space? Let's create something amazing together."}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white text-lg px-8">
              <Link href="/contact">{"Get Your Free Quote"}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
