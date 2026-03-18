"use client"

import { motion } from "motion/react"
import { Upload, Sparkles, GraduationCap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Import or scan",
    description:
      "Bring your Anki deck or scan your lecture notes. We handle the rest.",
    color: "text-primary",
    bg: "bg-primary/10",
    line: "from-primary/30",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI builds your study kit",
    description:
      "Flashcards, practice questions, and an exam plan — grounded in your material.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    line: "from-secondary/30",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Study what matters today",
    description:
      "Your daily queue adapts to your progress, your schedule, and your exam date.",
    color: "text-accent",
    bg: "bg-accent/10",
    line: "from-accent/30",
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center sm:text-left"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">
            Three steps.{" "}
            <span className="text-muted-foreground/50 italic">
              That&apos;s it.
            </span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex gap-5 sm:gap-10"
            >
              {/* Left: icon + vertical line */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${step.bg} flex items-center justify-center`}
                >
                  <step.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${step.color}`}
                  />
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-px h-full min-h-[60px] sm:min-h-[80px] bg-gradient-to-b ${step.line} to-transparent mt-3`}
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-10 sm:pb-12 pt-0.5 sm:pt-1">
                <span className="text-[11px] font-bold text-muted-foreground tracking-[0.2em] uppercase">
                  Step {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-1.5 sm:mt-2 mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md text-[15px] sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
