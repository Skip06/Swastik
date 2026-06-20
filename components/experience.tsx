"use client"

import { useEffect, useState } from "react"

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  active?: boolean
}

const experiences: ExperienceItem[] = [
  {
    role: "Looking for opportunities",
    company: "Open to Work",
    period: "Present",
    description: "Actively seeking backend engineering and ML internship roles. Interested in distributed systems, database internals, and ML infrastructure.",
    active: true,
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    const el = document.getElementById("experience")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-12 scroll-mt-24">
      <hr className="section-divider mb-12" />
      <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-2 font-semibold">Experience</p>
          <h2 className="text-2xl font-bold tracking-tight">Where I&apos;ve worked.</h2>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            My journey so far — from research to internships.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="timeline-line" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex gap-4 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`timeline-dot ${exp.active ? "active" : ""}`} style={{ marginTop: "4px" }} />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-bold text-[15px]">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-1.5">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
