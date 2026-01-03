"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("discountPopupSeen")
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isOpen, timeLeft])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("discountPopupSeen", "true")
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-sm animate-in zoom-in-95 duration-300">
        <div className="relative rounded-xl bg-white shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 z-10 rounded-full bg-white/90 p-1.5 text-gray-dark hover:bg-white transition-colors"
            aria-label="Close popup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-accent opacity-10" />

          {/* Content */}
          <div className="relative p-4 pt-8">
            <div className="flex justify-center mb-2">
              <Image
                src="/images/minimal-logo-symbolick.png"
                alt="Empire Contracting Outdoors"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-accent to-orange-600 rounded-full p-2">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-lg font-bold text-center mb-1 text-primary">Limited Time Offer!</h3>
            <p className="text-3xl font-extrabold text-center mb-2 gradient-blue-orange bg-clip-text text-transparent">
              15% OFF
            </p>
            <p className="text-sm text-center text-gray-dark mb-3">Your Dream Outdoor Space</p>

            {/* Timer */}
            <div className="flex items-center justify-center gap-2 mb-4 bg-surface rounded-lg p-2">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground">
                Expires:{" "}
                <span className="text-accent">
                  {minutes}:{seconds.toString().padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Benefits */}
            <ul className="space-y-2 mb-4">
              {["Free Design Consultation", "Premium Materials", "5-Year Warranty", "Priority Scheduling"].map(
                (benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-dark">{benefit}</span>
                  </li>
                ),
              )}
            </ul>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full h-10 text-sm font-semibold bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/contact?discount=15OFF" onClick={handleClose}>
                Claim 15% Discount
              </Link>
            </Button>

            <p className="text-[10px] text-center text-muted-foreground mt-2">
              *Valid for projects over $5,000. Terms apply.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
