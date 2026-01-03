"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/images/minimal-logo-symbolick.png"
              alt="Empire Contracting Outdoors"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-sans font-bold text-xs sm:text-sm text-gray-900 leading-tight">
                {"Empire Contracting"}
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] text-orange-600 leading-tight">{"Outdoors"}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-sans font-medium text-gray-700 hover:text-orange-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+17035987499"
              className="flex items-center gap-1.5 text-xs font-sans font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{"(703) 598-7499"}</span>
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs px-3 py-1.5 h-auto rounded-full shadow-lg shadow-orange-500/30"
            >
              <Link href="/contact">{"Get Quote"}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-sans font-medium text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+17035987499"
                className="flex items-center gap-2 text-sm font-sans font-medium text-orange-600"
              >
                <Phone className="w-4 h-4" />
                <span>{"(703) 598-7499"}</span>
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full text-sm"
              >
                <Link href="/contact">{"Get Free Quote"}</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
