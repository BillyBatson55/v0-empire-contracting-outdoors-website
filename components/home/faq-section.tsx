"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How long does a typical deck installation take?",
    a: "Most deck projects take 2-4 weeks from start to finish, depending on size and complexity. This includes design, permits, and installation.",
  },
  {
    q: "Do you offer financing options?",
    a: "Yes! We partner with several financing companies to offer flexible payment plans. Contact us to discuss the best option for your budget.",
  },
  {
    q: "Are your contractors licensed and insured?",
    a: "Absolutely. All our contractors are fully licensed, insured, and bonded. We carry comprehensive liability and workers' compensation insurance.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Northern Virginia including McLean, Vienna, Fairfax, Arlington, Loudoun County, Prince William County, and surrounding areas.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes! We offer free, no-obligation consultations and estimates for all projects. Schedule yours today!",
  },
  {
    q: "What warranty do you offer?",
    a: "We provide a 5-year craftsmanship warranty on all our work. Material warranties vary by manufacturer and can extend up to 25 years.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-8 sm:py-12 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-primary mb-2">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background rounded-lg border border-border overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-surface/50 transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
