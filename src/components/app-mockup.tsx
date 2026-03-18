export function AppMockup() {
  return (
    <div className="w-full h-full bg-[#0A0A12] p-4 sm:p-6 md:p-8 font-body text-white overflow-hidden">
      {/* App header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Today
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Wednesday, March 17
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-emerald-400 font-medium">
              12 day streak
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-xs font-bold">W</span>
          </div>
        </div>
      </div>

      {/* Exam countdown card */}
      <div className="bg-[#D4A853]/[0.08] border border-[#D4A853]/20 rounded-xl p-4 mb-5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[#D4A853] font-semibold text-sm">
              USMLE Step 1
            </p>
            <p className="text-xs text-gray-500 mt-0.5">17 days remaining</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-[#D4A853]">82%</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">
              Ready
            </p>
          </div>
        </div>
        <div className="mt-3 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full w-[82%] bg-gradient-to-r from-[#b8862e] to-[#D4A853] rounded-full" />
        </div>
      </div>

      {/* Study queue */}
      <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600 font-semibold mb-3">
        Today&apos;s Queue
      </p>
      <div className="space-y-2">
        {[
          {
            subject: "Cardiology",
            cards: 23,
            retention: "85%",
            color: "emerald",
          },
          {
            subject: "Biochemistry",
            cards: 15,
            retention: "71%",
            color: "amber",
          },
          {
            subject: "Neuroanatomy",
            cards: 8,
            retention: "64%",
            color: "blue",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/[0.03] rounded-xl px-4 py-3 flex items-center justify-between group hover:bg-white/[0.05] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  item.color === "emerald"
                    ? "bg-emerald-400"
                    : item.color === "amber"
                    ? "bg-[#D4A853]"
                    : "bg-blue-400"
                }`}
              />
              <div>
                <p className="font-medium text-sm">{item.subject}</p>
                <p className="text-[11px] text-gray-500">
                  {item.cards} cards due
                </p>
              </div>
            </div>
            <span
              className={`text-xs font-semibold ${
                item.color === "emerald"
                  ? "text-emerald-400"
                  : item.color === "amber"
                  ? "text-[#D4A853]"
                  : "text-blue-400"
              }`}
            >
              {item.retention}
            </span>
          </div>
        ))}
      </div>

      {/* AI-generated card preview */}
      <div className="mt-4 bg-white/[0.02] rounded-xl p-4 border border-dashed border-white/[0.06]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded bg-purple-500/20 flex items-center justify-center">
            <span className="text-[8px] text-purple-400">AI</span>
          </div>
          <span className="text-[11px] text-gray-500">
            Generated from Lecture 14 — Renal Physiology
          </span>
        </div>
        <p className="text-sm text-gray-300">
          Q: What is the primary site of action of loop diuretics?
        </p>
        <p className="text-[10px] text-gray-600 mt-1">
          Source: Slide 23, para. 2
        </p>
      </div>

      {/* Start session button */}
      <button className="w-full mt-4 bg-gradient-to-r from-[#b8862e] to-[#D4A853] text-white font-semibold py-3 rounded-xl text-sm shadow-lg shadow-[#D4A853]/10">
        Start Today&apos;s Session — 46 cards
      </button>
    </div>
  )
}
