export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <span className="font-display text-xl sm:text-2xl block mb-1">
              <span className="text-foreground/80">Cortex</span>{" "}
              <span className="text-primary">Prep</span>
            </span>
            <p className="text-sm text-muted-foreground/50">
              The study OS built for your board exam.
            </p>
          </div>

          {/* Contact */}
          <a
            href="mailto:cortextprep@yahoo.com"
            className="text-sm text-muted-foreground/50 hover:text-foreground/70 transition-colors duration-200 py-1"
          >
            cortextprep@yahoo.com
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.03] text-xs text-muted-foreground/30 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Cortex Prep. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
