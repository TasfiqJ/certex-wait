const features = [
  {
    icon: "📦",
    title: "Import your Anki deck",
    description:
      "Bring your AnKing, Zanki, or custom deck. Every card, every due date, every review — preserved exactly.",
  },
  {
    icon: "📋",
    title: "Know what to study today",
    description:
      "Set your exam date and daily time budget. Get a prioritized plan — weak topics first, capped to your available time.",
  },
  {
    icon: "🔄",
    title: "Miss a day? We catch you up.",
    description:
      "No shame spirals. Missed days get redistributed across your remaining schedule. You see what matters most — not how far behind you are.",
  },
  {
    icon: "📸",
    title: "Generate cards from your notes",
    description:
      "Snap your lecture slides or upload a PDF. AI generates flashcards grounded in your source — with citations, not hallucinations.",
  },
  {
    icon: "❓",
    title: "Practice questions, not just cards",
    description:
      "Auto-generated MCQs and short-answer questions from the same material. Test yourself the way your exam will.",
  },
  {
    icon: "📊",
    title: "Exam readiness score",
    description:
      "A single honest number: how ready you are. Mastery map by objective. Conservative — never overstates your preparedness.",
  },
]

export function Features() {
  return (
    <section className="relative py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-primary/70 mb-4">
            What Cortex Prep does
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight max-w-lg mx-auto">
            Your entire study life in one place. Finally organized.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-white/[0.06] rounded-xl p-6 sm:p-7 bg-card hover:bg-card/80 hover:border-primary/15 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-lg">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
