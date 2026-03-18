"use client"

import { motion } from "motion/react"
import { Layers, Timer, Gauge, HeartCrack } from "lucide-react"

const pains = [
  {
    icon: Layers,
    text: "Your Anki backlog hits 400 cards and you feel like giving up.",
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: Timer,
    text: "You spend 30 minutes making flashcards instead of studying them.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Gauge,
    text: "You have no idea if you're actually ready for your exam.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: HeartCrack,
    text: "You missed two days and now every app punishes you for having a life.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
]

export function PainPoints() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Heading — stacks above on mobile, sticky left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 text-center lg:text-left"
          >
            <div className="lg:sticky lg:top-32">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 leading-tight">
                Sound{" "}
                <span className="text-primary italic lg:block">familiar?</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Every med student knows this drill.
              </p>
            </div>
          </motion.div>

          {/* Cards — stagger only on desktop */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-5 sm:p-7 transition-all duration-300 flex items-start gap-4 sm:gap-5 lg:odd:ml-0 lg:even:ml-8"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${pain.bg} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <pain.icon className={`w-5 h-5 ${pain.color} opacity-90`} />
                </div>
                <p className="text-foreground/90 text-base sm:text-lg leading-relaxed font-light">
                  &ldquo;{pain.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
