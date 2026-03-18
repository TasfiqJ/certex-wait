const rows = [
  { feature: "Spaced repetition", anki: "SM-2 / FSRS", cortex: "FSRS-6", cortexHighlight: true },
  { feature: "Daily study plan", anki: "✗", ankiDim: true, cortex: "✓", cortexHighlight: true },
  { feature: "Catch-up mode", anki: "✗", ankiDim: true, cortex: "✓", cortexHighlight: true },
  { feature: "AI card generation", anki: "Add-ons only", cortex: "Built in", cortexHighlight: true },
  { feature: "Practice questions", anki: "✗", ankiDim: true, cortex: "✓", cortexHighlight: true },
  { feature: "Exam readiness tracking", anki: "✗", ankiDim: true, cortex: "✓", cortexHighlight: true },
  { feature: "APKG deck import", anki: "Native", cortex: "Full import", cortexHighlight: true },
  { feature: "Offline review", anki: "✓", cortex: "✓", cortexHighlight: true },
  { feature: "Modern mobile app", anki: "$24.99 iOS", cortex: "Included", cortexHighlight: true },
]

export function Comparison() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-primary/70 mb-4">
            How it compares
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight max-w-lg mx-auto">
            Built for students who take studying seriously
          </h2>
        </div>

        <div className="border border-white/[0.06] rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_0.9fr_0.9fr] sm:grid-cols-3 bg-card border-b border-white/[0.06]">
            <div className="px-4 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground" />
            <div className="px-4 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Anki
            </div>
            <div className="px-4 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-primary">
              Cortex Prep
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.2fr_0.9fr_0.9fr] sm:grid-cols-3 border-b border-white/[0.06] last:border-b-0"
            >
              <div className="px-4 sm:px-5 py-3 sm:py-4 text-[13px] sm:text-sm text-foreground font-medium">
                {row.feature}
              </div>
              <div
                className={`px-4 sm:px-5 py-3 sm:py-4 text-[13px] sm:text-sm ${
                  row.ankiDim ? "text-muted-foreground/40" : "text-muted-foreground"
                }`}
              >
                {row.anki}
              </div>
              <div
                className={`px-4 sm:px-5 py-3 sm:py-4 text-[13px] sm:text-sm ${
                  row.cortexHighlight ? "text-primary" : "text-foreground"
                }`}
              >
                {row.cortex}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
