import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { AboutTeaser } from "@/components/home/about-teaser"
import { PortfolioHighlights } from "@/components/home/portfolio-highlights"
import { TestimonialsSlider } from "@/components/home/testimonials-slider"
import { TrustReviews } from "@/components/home/trust-reviews"
import { CTASection } from "@/components/home/cta-section"
import { DiscountPopup } from "@/components/discount-popup"
import { CostEstimator } from "@/components/cost-estimator"
import { StatsInfographic } from "@/components/home/stats-infographic"
import { ProjectTimelineTool } from "@/components/project-timeline-tool"
import { BeforeAfterGallery } from "@/components/home/before-after-gallery"
import { FAQSection } from "@/components/home/faq-section"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { RollingTextSection } from "@/components/rolling-text-section"
import { ProcessTimelineInfographic } from "@/components/process-timeline-infographic"
import { AnimatedStatsBanner } from "@/components/animated-stats-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RollingTextSection />
        <AnimatedStatsBanner />
        <ServicesOverview />
        <div className="py-6 sm:py-8 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <CostEstimator />
              <ProjectTimelineTool />
            </div>
          </div>
        </div>
        <ProcessTimelineInfographic />
        <BeforeAfterGallery />
        <StatsInfographic />
        <AboutTeaser />
        <PortfolioHighlights />
        <TestimonialsSlider />
        <TrustReviews />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <DiscountPopup />
      <LiveChatWidget />
    </>
  )
}
