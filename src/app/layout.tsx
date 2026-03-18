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

const siteUrl = "https://cortex-prep.com"
const title = "Cortex Prep — The Study App That Replaces Your Entire Stack"
const description =
  "Import your Anki deck with zero lost progress. Get AI-generated flashcards that cite your sources, an exam-aware daily plan, and catch-up mode when life happens. Built on FSRS-6 — 20-30% fewer reviews than Anki's SM-2. Free for USMLE, MCAT, and med students."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Cortex Prep",
  },
  description,
  keywords: [
    "Cortex Prep",
    "Anki alternative",
    "Anki replacement",
    "medical flashcard app",
    "USMLE study app",
    "USMLE Step 1",
    "USMLE Step 2",
    "MCAT study app",
    "MCAT prep",
    "med school flashcards",
    "medical student study tools",
    "spaced repetition app",
    "FSRS",
    "FSRS-6",
    "Anki import",
    "APKG import",
    "AnKing deck",
    "Zanki",
    "AI flashcards",
    "AI study app",
    "exam planner",
    "board exam prep",
    "study planner for medical students",
    "offline flashcard app",
    "flashcard app iOS",
    "flashcard app Android",
    "spaced repetition medical",
    "catch up mode study",
    "exam readiness score",
    "daily study plan",
    "Anki backlog",
    "Anki alternative 2026",
    "best study app for med school",
    "Quizlet alternative medical",
    "Brainscape alternative",
  ],
  authors: [{ name: "Cortex Prep Team" }],
  creator: "Cortex Prep",
  publisher: "Cortex Prep",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cortex Prep",
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cortex Prep — The Study App That Replaces Your Entire Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
    creator: "@cortexprep",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Education",
  classification: "Medical Education",
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
      <head>
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Cortex Prep",
              applicationCategory: "EducationalApplication",
              operatingSystem: "iOS, Android",
              description,
              url: siteUrl,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description:
                  "Free core review with unlimited FSRS spaced repetition, Anki deck import, and offline study. Premium unlocks AI generation, multi-exam planning, and advanced analytics.",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1",
                bestRating: "5",
              },
              featureList: [
                "Full Anki APKG deck import with zero lost progress",
                "FSRS-6 spaced repetition — 20-30% fewer reviews than SM-2",
                "AI flashcard generation from lecture slides and PDFs with citations",
                "Exam-aware daily study plan with readiness score",
                "Catch-up mode — no guilt when you miss days",
                "100% offline review — no internet required",
                "Cross-device sync included free",
                "Practice questions: MCQ, short answer, fill-in-blank",
                "Mastery map with per-topic traffic light scoring",
                "Streaks, XP, daily quests, and leaderboards",
                "USMLE Step 1, USMLE Step 2, MCAT, AP exam templates",
                "60fps mobile-native experience with haptic feedback",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Will I lose my Anki progress if I switch to Cortex Prep?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Cortex Prep imports your entire Anki deck — every card, every due date, every review. If a card is due in 47 days in Anki, it is due in 47 days in Cortex Prep. AnKing's 33K card deck imports in under 60 seconds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Cortex Prep work offline?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All review happens locally on your device using SQLite. No internet required for your daily study session. AI features need connectivity, but your core study loop never does.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is FSRS and why is it better than Anki's SM-2?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FSRS-6 is a modern spaced repetition algorithm that schedules 20-30% fewer reviews at the same retention rate as Anki's SM-2 algorithm from 1987. It auto-personalizes to your memory after 200 reviews and is used by 99.6% of Anki users who try it.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Cortex Prep free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Core review is always free — unlimited FSRS spaced repetition, full Anki import, offline study, cross-device sync, streaks, and daily quests. Premium ($7.99/mo or $59.99/yr) unlocks unlimited AI generation, multi-exam planning, and advanced analytics.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What exams does Cortex Prep support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Launching with USMLE Step 1, USMLE Step 2, MCAT, and AP exam templates. More will follow based on community demand.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased grain">{children}</body>
    </html>
  )
}
