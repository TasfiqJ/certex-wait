"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { EmailCapture } from "@/components/email-capture"

const floatingCards = [
  {
    text: "400 cards due. No plan. Just vibes.",
    style: "text-foreground/60 max-w-[280px]",
  },
  {
    text: "Anki looks like it was built in 2006. Because it was.",
    style: "text-primary font-semibold max-w-[320px]",
  },
  {
    text: "Behind on reviews? Yeah. Everyone is.",
    style: "text-accent font-medium max-w-[280px]",
  },
  {
    text: "Your Anki backlog isn't a you problem.",
    style: "text-secondary font-bold max-w-[300px]",
  },
  {
    text: "30 min making cards. 0 min studying them.",
    style: "text-foreground/50 max-w-[300px]",
  },
  {
    text: "Study less. Remember more. Actually feel ready.",
    style: "text-primary/80 font-medium max-w-[300px]",
  },
  {
    text: "You don't have a study problem. You have a tools problem.",
    style: "text-muted-foreground max-w-[320px]",
  },
  {
    text: "One app. Your cards. Your notes. Done.",
    style: "text-blue-400/80 font-medium max-w-[280px]",
  },
]

export function Hero() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      ".floating-card",
      { opacity: [0, 1] },
      { duration: 0.6, delay: stagger(0.12, { startDelay: 0.8 }) }
    )
  }, [animate])

  return (
    <section
      ref={scope}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[80px] sm:-top-[200px] -left-[50px] sm:-left-[100px] w-[350px] sm:w-[800px] h-[350px] sm:h-[800px] rounded-full bg-primary/[0.25] sm:bg-primary/[0.18] blur-[80px] sm:blur-[160px] animate-orb-1" />
        <div className="absolute top-[40%] sm:top-[10%] -right-[50px] sm:-right-[100px] w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] rounded-full bg-secondary/[0.18] sm:bg-secondary/[0.12] blur-[70px] sm:blur-[150px] animate-orb-2" />
        <div className="absolute -bottom-[50px] sm:-bottom-[100px] left-[20%] sm:left-[20%] w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] rounded-full bg-accent/[0.18] sm:bg-accent/[0.14] blur-[70px] sm:blur-[140px] animate-orb-3" />
      </div>

      {/* Parallax floating cards — desktop only */}
      <Floating sensitivity={-0.5} className="hidden lg:block overflow-hidden">
        <FloatingElement depth={0.5} className="top-[10%] left-[5%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[0].style}`}>{floatingCards[0].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={1.5} className="top-[7%] right-[6%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[1].style}`}>{floatingCards[1].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[2].style}`}>{floatingCards[2].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={2} className="top-[42%] right-[2%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-4 ${floatingCards[3].style}`}>{floatingCards[3].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={0.8} className="bottom-[22%] left-[7%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[4].style}`}>{floatingCards[4].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={1.2} className="bottom-[18%] right-[5%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[5].style}`}>{floatingCards[5].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={0.6} className="top-[22%] left-[18%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[6].style}`}>{floatingCards[6].text}</motion.div>
        </FloatingElement>
        <FloatingElement depth={1.8} className="bottom-[30%] right-[16%]">
          <motion.div initial={{ opacity: 0 }} className={`floating-card glass rounded-xl px-5 py-3.5 text-sm ${floatingCards[7].style}`}>{floatingCards[7].text}</motion.div>
        </FloatingElement>
      </Floating>

      {/* Main content — always centered, clean vertical flow */}
      <div className="relative z-10 w-full px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[12px] sm:text-sm text-muted-foreground mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            Join the early access list
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.08] tracking-tight">
            You don&apos;t need more
            <br />
            study hours.
            <br />
            <span className="italic text-primary">
              You need the right ones.
            </span>
          </h1>

          {/* Sub copy */}
          <p className="font-body text-base sm:text-lg text-muted-foreground mt-5 sm:mt-6">
            For when med school got you stressin.
          </p>
          <p className="font-body text-base sm:text-lg text-muted-foreground/60 mt-1 mb-8 sm:mb-10">
            Import your Anki deck, seamless transfer.
          </p>

          {/* Email capture */}
          <div id="waitlist-form">
            <EmailCapture />
          </div>

          {/* Bottom callout */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-5 sm:mt-8 text-[13px] sm:text-sm text-muted-foreground/50 max-w-sm mx-auto leading-relaxed"
          >
            Give us feedback so WE can build the best app for US.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
