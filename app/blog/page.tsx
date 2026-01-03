import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog - Empire Contracting Outdoors | Outdoor Living Tips & Ideas",
  description:
    "Expert tips and ideas for your outdoor living space. Learn about decks, pools, fences, and more from Northern Virginia's trusted outdoor contractors.",
}

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Top Backyard Essentials for Northern Virginia Homeowners",
      slug: "top-backyard-essentials-northern-virginia",
      excerpt:
        "Discover the must-have features for creating the perfect outdoor living space in Northern Virginia. From functional elements to luxurious additions that enhance your backyard experience.",
      content: `Creating an exceptional outdoor living space in Northern Virginia requires careful consideration of our unique climate and lifestyle needs. Here are the essential elements every homeowner should consider:

**1. Quality Decking**
A well-designed deck serves as the foundation of your outdoor living space. Whether you choose natural wood or low-maintenance composite materials, proper deck construction is crucial for longevity and enjoyment.

**2. Outdoor Seating Areas**
Comfortable seating arrangements create inviting spaces for relaxation and entertainment. Consider built-in benches, lounge areas, or dedicated dining spaces.

**3. Shade Structures**
Northern Virginia summers can be intense. Pergolas, awnings, or covered patios provide essential shade while adding architectural interest to your outdoor space.

**4. Outdoor Kitchen**
Take entertaining to the next level with a built-in grill, prep station, and storage. An outdoor kitchen extends your living space and makes hosting effortless.

**5. Proper Lighting**
Strategic lighting transforms your outdoor space for evening enjoyment. Combine ambient, task, and accent lighting for functionality and atmosphere.

**6. Privacy Features**
Fencing, screening, or strategic landscaping creates intimate spaces where you can relax without feeling exposed to neighbors.

**7. Water Features**
From swimming pools to fountains, water features add tranquility and visual interest to any backyard.

Contact Empire Contracting Outdoors to discuss which essentials would work best for your outdoor space!`,
      image: "/blog-backyard-essentials.jpg",
      author: "Robert Martinez",
      date: "December 15, 2025",
      readTime: "5 min read",
      category: "Design Ideas",
    },
    {
      id: 2,
      title: "How to Choose the Right Deck Material for Your Home",
      slug: "choosing-right-deck-material",
      excerpt:
        "Wood or composite? Cedar or pressure-treated? We break down the pros and cons of popular decking materials to help you make the best choice for your home and budget.",
      content: `Selecting the right deck material is one of the most important decisions you'll make for your outdoor project. Let's explore your options:

**Wood Decking**

*Pressure-Treated Pine:*
- Most affordable option
- Requires regular maintenance (staining every 2-3 years)
- Can last 15-20 years with proper care
- Natural appearance that weathers to gray

*Cedar:*
- Naturally resistant to rot and insects
- Beautiful warm tones and grain patterns
- Requires annual sealing
- Premium wood option with 25+ year lifespan

*Exotic Hardwoods (Ipe, Tigerwood):*
- Extremely durable (40+ year lifespan)
- Naturally resistant to decay and insects
- Rich colors and dense grain
- Higher cost but minimal maintenance

**Composite Decking**

*Advantages:*
- Low maintenance (no staining or sealing)
- Resistant to fading, staining, and scratching
- Won't splinter, crack, or warp
- 25-30 year warranty typical
- Eco-friendly options using recycled materials

*Considerations:*
- Higher upfront cost than pressure-treated wood
- Can retain heat in direct sunlight
- Limited natural wood aesthetics

**Making Your Decision**

Consider these factors:
- Budget (initial and long-term maintenance)
- Aesthetic preferences
- Maintenance commitment
- Climate and exposure
- Expected lifespan

Our team at Empire Contracting Outdoors can help you evaluate options and choose the perfect material for your specific needs and budget.`,
      image: "/blog-deck-materials.jpg",
      author: "Jennifer Chen",
      date: "November 28, 2025",
      readTime: "7 min read",
      category: "Materials Guide",
    },
    {
      id: 3,
      title: "Complete Pool Maintenance Guide for Virginia Homeowners",
      slug: "pool-maintenance-guide-virginia",
      excerpt:
        "Keep your swimming pool crystal clear and ready for enjoyment all season long. Our comprehensive maintenance guide covers everything from chemistry to cleaning.",
      content: `Proper pool maintenance ensures safe, clean water and extends the life of your investment. Here's your essential guide:

**Daily Maintenance**
- Check water level and adjust if needed
- Skim debris from surface
- Empty skimmer baskets
- Run pool pump 8-12 hours daily

**Weekly Maintenance**
- Test and balance water chemistry
  - pH: 7.2-7.6
  - Alkalinity: 80-120 ppm
  - Chlorine: 1-3 ppm
- Vacuum pool floor and walls
- Brush walls and steps
- Clean tile line
- Backwash filter if needed

**Monthly Maintenance**
- Deep clean filters
- Test for metals and phosphates
- Check equipment for leaks or damage
- Inspect pool cover (if applicable)

**Seasonal Tasks**

*Spring Opening:*
- Remove winter cover
- Clean and store cover properly
- Fill to proper level
- Start equipment and check for issues
- Shock pool and balance chemistry

*Fall Closing:*
- Deep clean pool
- Balance chemistry
- Lower water level
- Drain equipment
- Install winter cover

**Common Issues and Solutions**

*Cloudy Water:*
- Check and adjust pH
- Shock pool
- Clean or replace filter

*Algae Growth:*
- Brush affected areas
- Shock treatment
- Algaecide application
- Increase filtration time

*Equipment Problems:*
- Regular inspection prevents major issues
- Professional servicing recommended annually

Contact Empire Contracting Outdoors for pool maintenance services or equipment upgrades!`,
      image: "/blog-pool-maintenance.jpg",
      author: "Michael Thompson",
      date: "November 10, 2025",
      readTime: "8 min read",
      category: "Maintenance",
    },
    {
      id: 4,
      title: "Eco-Friendly Outdoor Upgrades: Solar Integration Tips",
      slug: "eco-friendly-solar-integration-outdoors",
      excerpt:
        "Discover how to make your outdoor space more sustainable with solar panels, energy-efficient lighting, and eco-friendly materials that reduce your carbon footprint.",
      content: `Making your outdoor space eco-friendly benefits both the environment and your wallet. Here's how to integrate sustainable solutions:

**Solar Panel Integration**

*Pergola Solar Panels:*
- Generate electricity while providing shade
- Perfect for powering outdoor lights and features
- Reduces dependence on grid power
- Can significantly lower electric bills

*Pool Solar Heating:*
- Extends swimming season by months
- Free heating after installation
- Reduces carbon footprint
- ROI typically within 3-5 years

**Energy-Efficient Lighting**

*LED Landscape Lighting:*
- Uses 75% less energy than traditional bulbs
- Lasts 25+ times longer
- Available in warm, natural tones
- Perfect for pathways, decks, and features

*Solar-Powered Lights:*
- No wiring required
- Zero operating cost
- Easy installation and relocation
- Ideal for garden beds and walkways

**Sustainable Materials**

*Composite Decking:*
- Often made from recycled materials
- Eliminates need for chemical treatments
- Long lifespan reduces replacement waste
- No harmful preservatives or stains

*Permeable Pavers:*
- Allow water drainage to reduce runoff
- Prevents erosion and flooding
- Filters pollutants naturally
- Cooler surface temperatures

*Reclaimed Wood:*
- Gives new life to old materials
- Unique character and patina
- Reduces demand for new lumber
- Often more affordable than new exotic woods

**Water Conservation**

*Rainwater Collection:*
- Harvest rain for irrigation
- Reduces water bills
- Decreases stormwater runoff
- Simple barrel systems or elaborate cisterns

*Native Plantings:*
- Requires less water once established
- Supports local ecosystem
- Naturally pest-resistant
- Lower maintenance needs

**Smart Automation**

*Pool Automation:*
- Optimizes pump run times
- Reduces energy consumption
- Monitors chemical levels efficiently
- Remote control via smartphone

*Irrigation Controllers:*
- Weather-based watering schedules
- Prevents over-watering
- Can reduce water use by 50%
- Adjusts for seasonal changes

**Making the Transition**

Start with one or two eco-friendly upgrades and expand over time. Many improvements pay for themselves through energy savings, making sustainability both practical and affordable.

Empire Contracting Outdoors specializes in eco-friendly outdoor solutions. Contact us to discuss sustainable options for your project!`,
      image: "/blog-solar-integration.jpg",
      author: "Robert Martinez",
      date: "October 22, 2025",
      readTime: "6 min read",
      category: "Eco-Friendly",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-6">{"Outdoor Living Blog"}</h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {
                "Expert tips, design ideas, and maintenance guides for your outdoor space from Northern Virginia's trusted contractors."
              }
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={articles[0].image || "/placeholder.svg"}
                    alt={articles[0].title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    {"FEATURED"}
                  </div>
                  <h2 className="text-foreground mb-4 text-2xl lg:text-3xl">{articles[0].title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{articles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary-hover text-white self-start">
                    <Link href={`/blog/${articles[0].slug}`} className="flex items-center gap-2">
                      {"Read Article"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12 text-center">{"Recent Articles"}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.slice(1).map((article) => (
                <div
                  key={article.id}
                  className="bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-surface border border-border text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-foreground mb-3 text-xl font-bold line-clamp-2">{article.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="text-primary hover:text-primary-hover p-0 h-auto">
                      <Link href={`/blog/${article.slug}`} className="flex items-center gap-2 font-semibold">
                        {"Read More"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-white mb-6">{"Need Expert Advice for Your Project?"}</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              {"Our team is here to help you plan and execute your dream outdoor space. Get a free consultation today!"}
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary text-lg px-8">
              <Link href="/contact">{"Schedule Consultation"}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
