import type { Metadata } from "next"
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cortex Prep — The Study OS Built for Your Board Exam",
  description:
    "Import your Anki deck, turn your notes into cited flashcards, and get an exam-aware daily plan. Built for USMLE, MCAT, and medical students.",
  keywords: [
    "medical study app",
    "Anki alternative",
    "USMLE",
    "MCAT",
    "spaced repetition",
    "flashcards",
    "study planner",
    "FSRS",
  ],
  openGraph: {
    title: "Cortex Prep — The Study OS Built for Your Board Exam",
    description:
      "Import your Anki deck, turn your notes into cited flashcards, and get an exam-aware daily plan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex Prep — The Study OS Built for Your Board Exam",
    description:
      "Import your Anki deck, turn your notes into cited flashcards, and get an exam-aware daily plan.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakarta.variable}`}
    >
      <body className="font-body antialiased grain">{children}</body>
    </html>
  )
}
