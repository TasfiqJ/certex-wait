const stats = [
  {
    number: "84%",
    description: (
      <>
        of med students use Anki. Most <strong className="text-foreground font-medium">tolerate it</strong>, they
        don&apos;t love it.
      </>
    ),
  },
  {
    number: "4-6 hrs",
    description: (
      <>
        spent daily hitting spacebar.{" "}
        <strong className="text-foreground font-medium">No plan. No priorities.</strong> Just a pile of
        cards.
      </>
    ),
  },
  {
    number: "0",
    description: (
      <>
        guidance on{" "}
        <strong className="text-foreground font-medium">what to study today</strong>. Anki shows you
        everything. You figure out the rest.
      </>
    ),
  },
  {
    number: "∞",
    description: (
      <>
        <strong className="text-foreground font-medium">Guilt</strong> when you miss a day and the backlog
        becomes a wall you never climb.
      </>
    ),
  },
]

export function PainStats() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-primary/70 mb-4">
            The problem
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight max-w-xl mx-auto">
            Anki works. But it hasn&apos;t changed since 2006.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.06] rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 sm:p-7 bg-card hover:bg-card/80 transition-colors border-b border-r border-white/[0.06] last:border-r-0 md:[&:nth-child(4)]:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 md:[&:nth-child(1)]:border-b-0 md:[&:nth-child(2)]:border-b-0"
            >
              <div className="font-display text-3xl sm:text-4xl text-primary leading-none mb-2 sm:mb-3">
                {stat.number}
              </div>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
