import { Quote } from "lucide-react"

export function SocialProof() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        {/* Founder note */}
        <div className="glass rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/[0.04] blur-[60px]"
            aria-hidden="true"
          />

          <div className="relative">
            <Quote className="w-8 h-8 text-primary/20 mb-4 -scale-x-100" />
            <blockquote className="text-foreground/85 text-base sm:text-lg leading-relaxed font-light">
              We love Anki frfr. It got us through more exams than we can
              count. But every semester it was the same story: 400 card
              backlogs, half finished decks scattered across five apps, and no
              clue whether we were actually ready or just going through the
              motions.
              <br />
              <br />
              So we built Cortex Prep. One clean app that does what your entire
              study stack tries to do but without the chaos. No bloat. No 47
              settings screens. No guilt trips when you miss a day.{" "}
              <span className="text-foreground font-medium">
                Just a simple, beautiful tool that respects your time and
                actually helps you pass.
              </span>
            </blockquote>
            <p className="text-sm text-muted-foreground mt-6 italic">
              — The Team
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
