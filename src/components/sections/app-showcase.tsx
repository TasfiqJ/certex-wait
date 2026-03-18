"use client"

import { ContainerScroll } from "@/components/ui/container-scroll"
import { AppMockup } from "@/components/app-mockup"

export function AppShowcase() {
  return (
    <section className="relative">
      <ContainerScroll
        titleComponent={
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Your daily study session,{" "}
              <span className="text-primary italic">reimagined.</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              One app. Every card, every plan, every exam date.
            </p>
          </div>
        }
      >
        <AppMockup />
      </ContainerScroll>
    </section>
  )
}
