"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-white/[0.04] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <span className="font-display text-lg sm:text-xl tracking-tight">
          <span className="text-foreground">Cortex</span>{" "}
          <span className="text-primary">Prep</span>
        </span>
        <span className="text-[10px] sm:text-[11px] text-muted-foreground px-2.5 sm:px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
          Built for Med Students
        </span>
      </div>
    </nav>
  )
}
