import { EmailCapture } from "@/components/email-capture"

export function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto px-5 sm:px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-foreground leading-tight mb-4">
          Let&apos;s leave Anki in 2006.
          <br />
          <span className="text-primary italic">
            Cortex Prep for 2026.
          </span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-8">
          Early waitlist members get priority beta access.
        </p>
        <EmailCapture />
      </div>
    </section>
  )
}
