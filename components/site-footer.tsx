// components/site-footer.tsx

"use client"

import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function SiteFooter() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "projects",
      "team",
      "blog",
      "careers",
      "testimonials",
      "contact",
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      let current = ""
      for (let i = 0; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            current = sectionIds[i]
            break
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const quickLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Team", href: "#team", id: "team" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Careers", href: "#careers", id: "careers" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  // Function to handle smooth scrolling to in-page sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* NEXORIS Branding */}
          <div>
            <h3 className="text-lg font-bold mb-4 retro-text">NEXORIS</h3>
            <p className="text-sm text-muted-foreground">
              Where Innovation Meets Scalability
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.id)
                    }}
                    className={`text-sm ${
                      activeSection === link.id
                        ? "text-primary-foreground font-semibold"
                        : "text-muted-foreground"
                    } hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded`}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={item}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-sm font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/obsidianspecter"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/anvin141/"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/_a.nvi.n_/profilecard/?igsh=MWlmbW1jaXE3dHRxYQ=="
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} NEXORIS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
