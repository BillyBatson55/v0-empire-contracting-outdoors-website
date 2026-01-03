import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Shield, Heart, Leaf } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us - Empire Contracting Outdoors | Expert Outdoor Contractors in Northern Virginia",
  description:
    "Learn about Empire Contracting Outdoors, a family-owned outdoor living contractor with 20+ years of experience serving Northern Virginia. Licensed, insured, and committed to quality.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description:
        "With over 20 years of experience, our skilled team delivers superior quality in every project, from custom decks to complete outdoor transformations.",
    },
    {
      icon: Heart,
      title: "Customer-First Approach",
      description:
        "Your vision is our priority. We listen, collaborate, and ensure every detail meets your expectations with transparent communication throughout.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description:
        "We offer sustainable solutions including solar panel integration, composite materials, and environmentally conscious practices for greener outdoor living.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description:
        "Fully licensed Virginia contractor with comprehensive insurance coverage. Your property and investment are protected with every project we undertake.",
    },
  ]

  const team = [
    {
      name: "Robert Martinez",
      role: "Owner & Master Contractor",
      image: "professional contractor owner in work attire smiling outdoors",
      bio: "With over 20 years in the outdoor contracting industry, Robert founded Empire Contracting Outdoors to bring exceptional craftsmanship and personalized service to Northern Virginia homeowners.",
    },
    {
      name: "Jennifer Chen",
      role: "Design Specialist",
      image: "professional female design specialist with outdoor plans",
      bio: "Jennifer brings creativity and technical expertise to every project, helping clients visualize and realize their dream outdoor spaces with innovative design solutions.",
    },
    {
      name: "Michael Thompson",
      role: "Project Manager",
      image: "professional male project manager at construction site",
      bio: "Michael ensures every project runs smoothly from start to finish, coordinating teams, managing timelines, and maintaining the highest quality standards throughout construction.",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <img
              src="/about-team-working.jpg"
              alt="Empire Contracting Outdoors Team"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-6">{"Welcome to Empire Contracting Outdoors"}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {"Where Quality Meets Innovation in Northern Virginia"}
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary mb-6">{"Our Story"}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {
                    "Formerly Empire Contracting DMV Corporation, we've rebranded to Empire Contracting Outdoors to better reflect our specialized focus on outdoor living spaces. For over two decades, we've been transforming ordinary backyards into extraordinary outdoor retreats across Northern Virginia."
                  }
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {
                    "As a family-owned business based in Manassas, we take pride in our personalized approach to every project. Whether it's a custom deck, stunning pool, elegant fence, or complete outdoor living transformation, we bring expert craftsmanship and attention to detail that exceeds expectations."
                  }
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {
                    "Our commitment to quality, innovation, and customer satisfaction has earned us hundreds of 5-star reviews and a reputation as Northern Virginia's trusted outdoor contracting experts."
                  }
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-surface px-4 py-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">{"20+ Years"}</div>
                      <div className="text-xs text-muted-foreground">{"Experience"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-surface px-4 py-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">{"500+"}</div>
                      <div className="text-xs text-muted-foreground">{"Projects Completed"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-surface px-4 py-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">{"5.0 Rating"}</div>
                      <div className="text-xs text-muted-foreground">{"64+ Reviews"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/about-team-completed-project.jpg"
                    alt="Empire Contracting Outdoors Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold mb-1">{"100%"}</div>
                  <div className="text-sm">{"Satisfaction Guaranteed"}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary mb-4">{"Our Core Values"}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {"The principles that guide every project we undertake."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="bg-background rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-foreground mb-3 text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary mb-4">{"Meet Our Team"}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {"The experts behind your outdoor transformation."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, idx) => (
                <div
                  key={member.name}
                  className="bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={`/team-member-${idx + 1}.jpg`} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">{"Why Choose Empire Contracting Outdoors?"}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Award className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">{"5.0 on Google"}</h3>
                <p className="text-white/80">{"14+ Five-Star Reviews"}</p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">{"5.0 on Thumbtack"}</h3>
                <p className="text-white/80">{"50+ Five-Star Reviews"}</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">{"Licensed & Insured"}</h3>
                <p className="text-white/80">{"Virginia Contractor License"}</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">{"500+ Projects"}</h3>
                <p className="text-white/80">{"Completed Since 2005"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-primary mb-6">{"Join Our Family of Satisfied Clients"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              {"Ready to transform your outdoor space? Get a free consultation and let's bring your vision to life."}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white text-lg px-8">
              <Link href="/contact">{"Get Your Free Quote Today"}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
