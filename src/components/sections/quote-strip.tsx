export function QuoteStrip() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/[0.04] text-center">
      <div className="max-w-2xl mx-auto px-5 sm:px-6">
        <blockquote className="font-display italic text-xl sm:text-2xl md:text-3xl text-muted-foreground/80 leading-snug mb-4">
          &ldquo;I spent 6 hours doing 1,600 cards and still felt behind. There
          has to be a better way.&rdquo;
        </blockquote>
        <cite className="font-body not-italic text-[13px] sm:text-sm text-muted-foreground/50">
          — Every med student who&apos;s ever opened Anki at midnight
        </cite>
      </div>
    </section>
  )
}
