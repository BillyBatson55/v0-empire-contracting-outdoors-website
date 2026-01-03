import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const serviceAreas = ["Manassas", "McLean", "Vienna", "Fairfax", "Loudoun County", "Prince William County"]

  const services = [
    { name: "Custom Decks", href: "/services#decks" },
    { name: "Fences", href: "/services#fences" },
    { name: "Swimming Pools", href: "/services#pools" },
    { name: "Patios & Hardscapes", href: "/services#patios" },
    { name: "Outdoor Kitchens", href: "/services#kitchens" },
    { name: "Solar Integration", href: "/services#solar" },
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/images/white-png.png"
                alt="Empire Contracting Outdoors"
                width={140}
                height={50}
                className="w-32 sm:w-36 h-auto"
              />
            </div>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              {
                "Transform Your Outdoor Dreams into Stunning Realities – Serving Northern Virginia with Expert Craftsmanship."
              }
            </p>
            <div className="flex gap-2">
              <a
                href="https://facebook.com/EmpireContractingDMVCorp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/empirecontractingoutdoors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm mb-3 text-white">{"Our Services"}</h4>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-xs text-gray-400 hover:text-orange-600 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm mb-3 text-white">{"Quick Links"}</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-gray-400 hover:text-orange-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm mb-3 text-white">{"Contact Us"}</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+17035987499" className="text-xs text-gray-400 hover:text-orange-600 transition-colors">
                  {"+1 (703) 598-7499"}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-400">{"9069 McRae Ct, Manassas, VA"}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@empirecontractingoutdoors.com"
                  className="text-xs text-gray-400 hover:text-orange-600 transition-colors break-all"
                >
                  {"info@empirecontractingoutdoors.com"}
                </a>
              </li>
            </ul>
            <p className="text-[10px] text-gray-500 mt-3">{"Hours: Mon-Sun 8am-8pm"}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 mb-4">
          <p className="text-[10px] sm:text-xs text-gray-500">
            <span className="font-semibold text-gray-400">{"Service Areas: "}</span>
            {serviceAreas.join(" • ")}
          </p>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center">
          <p className="text-[10px] sm:text-xs text-gray-500">
            {"© 2026 Empire Contracting Outdoors. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
