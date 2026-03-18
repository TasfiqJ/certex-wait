"use client"

import { useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, Mail, Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const BRAND_COLORS = ["#D4A853", "#6BAF8D", "#C4835A", "#E0B665", "#EDEBE8"]

export function EmailCapture() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const emailRef = useRef<HTMLInputElement>(null)

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const triggerCelebration = useCallback(async () => {
    const { default: confetti } = await import("canvas-confetti")
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: BRAND_COLORS,
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError("")

    if (!email.trim() || !isValid) {
      setEmailError("Enter a valid email to save your spot.")
      emailRef.current?.focus()
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setEmailError(data.message || "Something went wrong. Try again.")
        setStatus("idle")
        return
      }

      setStatus("done")
      triggerCelebration()
    } catch {
      setEmailError("Couldn't connect. Check your internet and try again.")
      setStatus("idle")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status !== "done" ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {/* Desktop: inline input + arrow in one gradient bar */}
            <div
              className={cn(
                "hidden sm:flex gradient-button rounded-[11px] items-center pr-1.5",
                emailError && "ring-1 ring-red-400/40"
              )}
            >
              <div
                className={cn(
                  "relative z-10 shrink-0 flex items-center justify-center transition-all duration-300 overflow-hidden",
                  email.length > 0 ? "w-0 pl-0" : "w-10 pl-4"
                )}
              >
                <Mail className="w-[18px] h-[18px] text-white/40 shrink-0" />
              </div>

              <input
                ref={emailRef}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError) setEmailError("")
                }}
                placeholder="Enter your email"
                disabled={status === "loading"}
                autoComplete="email"
                className={cn(
                  "relative z-10 flex-1 bg-transparent text-white placeholder:text-white/60 focus:outline-none py-4 text-[15px] min-w-0 transition-all duration-300",
                  email.length > 0 ? "pl-4" : "pl-1.5"
                )}
              />

              <div
                className={cn(
                  "relative z-10 shrink-0 overflow-hidden transition-all duration-300 ease-in-out",
                  isValid || status === "loading"
                    ? "w-9 opacity-100"
                    : "w-0 opacity-0"
                )}
              >
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/[0.12] flex items-center justify-center transition-colors duration-200"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile: separate input field + full-width submit button */}
            <div className="sm:hidden space-y-3">
              <div
                className={cn(
                  "rounded-xl flex items-center bg-white/[0.07] border transition-colors",
                  emailError ? "border-red-400/40" : "border-white/[0.1]"
                )}
              >
                <div className="shrink-0 flex items-center justify-center w-10 pl-4">
                  <Mail className="w-[18px] h-[18px] text-white/30" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) setEmailError("")
                  }}
                  placeholder="Enter your email"
                  disabled={status === "loading"}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  data-form-type="other"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  className="flex-1 bg-transparent text-white placeholder:text-white/50 focus:outline-none py-3.5 pr-4 pl-1.5 text-sm min-w-0"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="gradient-button rounded-[11px] w-full py-3.5 text-sm font-semibold text-white flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </div>

            <AnimatePresence>
              {emailError && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400/80 text-sm pl-1 overflow-hidden"
                >
                  {emailError}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="gradient-button rounded-[11px] py-4 sm:py-5 px-6 text-center"
          >
            <div className="relative z-10 flex items-center justify-center gap-2.5">
              <Check className="w-5 h-5 text-green-400" />
              <p className="text-white font-medium text-sm">
                You&apos;re in. We&apos;ll be in touch.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
