"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Will I lose my Anki progress?",
    a: "No. We import your entire deck — every card, every due date, every review. If a card is due in 47 days in Anki, it is due in 47 days in Cortex Prep.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. All review happens locally on your device. No internet required for your daily study session.",
  },
  {
    q: "Is the AI going to hallucinate my flashcards?",
    a: "Every AI-generated card cites the exact page and paragraph from your source material. If it cannot ground a fact, it does not include it.",
  },
  {
    q: "Is it free?",
    a: "Core review will always be free. AI generation and advanced planning will be premium. Early waitlist members get extended free access.",
  },
  {
    q: "What exams do you support?",
    a: "Launching with USMLE Step 1, MCAT, and AP exam templates. More based on demand.",
  },
  {
    q: "When does it launch?",
    a: "Summer 2026. Waitlist members get in first.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-foreground text-center mb-10 sm:mb-14">
          Questions you{" "}
          <span className="text-muted-foreground/50 italic">
            probably have.
          </span>
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full glass rounded-xl px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-all duration-200",
                  openIndex === i
                    ? "bg-white/[0.04] border-white/[0.08]"
                    : "hover:bg-white/[0.03]"
                )}
              >
                <span className="text-foreground font-medium pr-4 text-[15px] sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 py-4 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
