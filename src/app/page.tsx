import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { PainStats } from "@/components/sections/pain-stats"
import { Features } from "@/components/sections/features"
import { Comparison } from "@/components/sections/comparison"
import { QuoteStrip } from "@/components/sections/quote-strip"
import { SocialProof } from "@/components/sections/social-proof"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <Hero />
      <PainStats />
      <Features />
      <Comparison />
      <QuoteStrip />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
