"use client"

import { useEffect, useState } from "react"

const focusItems = [
  {
    emoji: "⚙️",
    title: "backend systems",
    description: "Building APIs, realtime services, protocol experiments, and infrastructure. Currently deep into Rust and database internals.",
  },
  {
    emoji: "🧠",
    title: "ml from first principles",
    description: "Exploring autodiff, small neural nets, RAG workflows, and agentic tools — implementing things from scratch to truly understand them.",
  },
  {
    emoji: "♟️",
    title: "chess, physics, travel",
    description: "The non-code interests that keep me curious and usually feed back into better engineering intuition.",
  },
]

export function Focus() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    const el = document.getElementById("focus")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="focus" className="py-12 scroll-mt-24">
      <hr className="section-divider mb-12" />
      <h2 className="text-lg font-semibold tracking-tight mb-2">now</h2>
      <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        current interests and ongoing pursuits.
      </p>

      <div>
        {focusItems.map((item, i) => (
          <div
            key={item.title}
            className={`focus-card ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="flex items-start gap-3.5">
              <span className="text-sm mt-0.5 opacity-60">{item.emoji}</span>
              <div>
                <h3 className="font-medium text-[14px] mb-1.5">{item.title}</h3>
                <p className="text-muted-foreground text-[13px] leading-[1.7]">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
