"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ["About", "Services", "Projects", "Contact"]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="font-bold text-xl tracking-wider retro-text">
          NEXORIS
        </button>
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:retro-glow"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-background">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:retro-glow py-2"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

