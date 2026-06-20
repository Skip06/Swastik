"use client"

import { useEffect, useState } from "react"

const skillGroups = [
  {
    label: "languages",
    items: ["TypeScript", "Python", "Rust", "C"],
  },
  {
    label: "backend & infra",
    items: ["Node.js", "Bun", "Actix Web", "Docker", "Redis"],
  },
  {
    label: "ml & ai",
    items: ["PyTorch", "LangChain", "RAG", "HuggingFace"],
  },
  {
    label: "tools & databases",
    items: ["Git", "Linux", "PostgreSQL", "WebSocket", "TCP"],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    const el = document.getElementById("skills")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-12 scroll-mt-24">
      <hr className="section-divider mb-12" />
      <h2 className="text-lg font-semibold tracking-tight mb-8">technologies</h2>

      <div className="grid grid-cols-2 gap-8">
        {skillGroups.map((group, gi) => (
          <div
            key={group.label}
            className={isVisible ? "animate-fade-in-up" : "opacity-0"}
            style={{ animationDelay: `${gi * 100}ms` }}
          >
            <h3 className="text-[11px] text-muted-foreground mb-2.5 tracking-wider font-medium">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
