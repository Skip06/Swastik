"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    name: "Oxigrad",
    description: "Tiny Rust automatic differentiation engine inspired by micrograd. Builds scalar computation graphs and computes gradients via reverse-mode backpropagation.",
    tech: ["Rust", "Graphviz"],
    github: "https://github.com/Skip06/Oxigrad",
  },
  {
    name: "url_shortner",
    description: "URL shortener service built with Actix Web, SQLx, and Redis for fast link shortening and redirection.",
    tech: ["Rust", "Actix Web", "SQLx", "Redis"],
    github: "https://github.com/Skip06/url_shortner",
  },
  {
    name: "HN-TUI",
    description: "Terminal-based Hacker News reader with a clean, scrollable TUI. Browse top stories, read comments, and open links.",
    tech: ["Rust", "Ratatui", "Tokio"],
    github: "https://github.com/Skip06/HN-TUI",
  },
  {
    name: "selfHealingBridge",
    description: "Self-healing API bridge that automatically detects and repairs schema drift using LangChain, Groq, and RAG.",
    tech: ["LangChain", "Groq", "RAG"],
    github: "https://github.com/Skip06/selfHealingBridge-api",
  },
  {
    name: "SharkTank-AI",
    description: "LangGraph implementation with Vercel AI SDK and Supermemory memory layer for intelligent agent interactions.",
    tech: ["LangGraph", "Vercel AI", "TypeScript"],
    github: "https://github.com/Skip06/SharkTank-AI",
  },
  {
    name: "broadcast-server",
    description: "Real-time broadcast server for handling multiple client connections with WebSocket-based message distribution.",
    tech: ["TypeScript", "WebSocket", "Node.js"],
    github: "https://github.com/Skip06/broadcast-server",
  },
  {
    name: "Redis-Server",
    description: "Hand-rolled Redis TCP server implementation with support for core commands like GET, SET, PING, and expiry.",
    tech: ["TypeScript", "TCP"],
    github: "https://github.com/Skip06/Redis-Server",
  },
  {
    name: "Revvup-d",
    description: "Duolingo-style revision app for coding concepts with spaced repetition and gamified learning.",
    tech: ["TypeScript", "React"],
    github: "https://github.com/Skip06/Revvup-d",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 }
    )
    const el = document.getElementById("projects")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-12 scroll-mt-24">
      <hr className="section-divider mb-12" />
      <h2 className="text-lg font-semibold tracking-tight mb-2">projects</h2>
      <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        a mix of systems tools, ml experiments, and things built for fun.
      </p>

      <div>
        {projects.map((project, i) => (
          <Link
            key={project.name}
            href={project.github}
            target="_blank"
            className={`project-card group ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-medium text-[14px] group-hover:text-foreground transition-colors duration-300" style={{ color: "var(--text-secondary)" }}>
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-muted-foreground text-[13px] leading-[1.7] mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
