import Link from "next/link"
import { Github } from "lucide-react"

const projects = [
  {
    name: "Oxigrad",
    description: "A tiny Rust implementation of automatic differentiation inspired by Andrej Karpathy's micrograd. It builds scalar computation graphs, tracks operations, and computes gradients using reverse-mode backpropagation. Includes simple neural-network primitives for training small MLPs.",
    tech: ["Rust", "Graphviz"],
    github: "https://github.com/Skip06/Oxigrad",
  },
  {
    name: "url_shortner",
    description: "A URL shortener service built with Actix Web, SQLx, and Redis, providing fast link shortening and redirection.",
    tech: ["Rust", "Actix Web", "SQLx", "Redis"],
    github: "https://github.com/Skip06/url_shortner",
  },
  {
    name: "HN-TUI",
    description:
      "A terminal-based Hacker News reader built with Rust. Browse top stories, read comments, and open links — all from your terminal with a clean, scrollable TUI.",
    tech: ["Rust", "Ratatui", "Tokio", "Reqwest"],
    github: "https://github.com/Skip06/HN-TUI",
  },
  {
    name: "selfHealingBridge",
    description:
      "Self-healing API bridge that automatically detects and repairs schema drift using LangChain and Groq. It uses RAG with Hugging Face Transformer embeddings.",
    tech: ["LangChain", "Groq", "Hugging Face", "RAG"],
    github: "https://github.com/Skip06/selfHealingBridge-api",
  },
  {
    name: "SharkTank-AI",
    description: "A LangGraph implementation with Vercel AI SDK and Supermemory memory layer for intelligent agent interactions.",
    tech: ["LangGraph", "Vercel AI SDK", "Supermemory", "TypeScript"],
    github: "https://github.com/Skip06/SharkTank-AI",
  },
  
  {
    name: "broadcast-server",
    description:
      "Real-time broadcast server for handling multiple client connections with efficient message distribution.",
    tech: ["TypeScript", "WebSocket", "Node.js"],
    github: "https://github.com/Skip06/broadcast-server",
  },
  {
    name: "Redis-Server",
    description: "Hand-rolled Redis TCP server implementation with support for core Redis commands.",
    tech: ["TypeScript", "TCP", "Data Structures"],
    github: "https://github.com/Skip06/Redis-Server",
  },

  {
    name: "Revvup-d",
    description: "Duolingo-style revision app for coding concepts with spaced repetition and gamified learning.",
    tech: ["TypeScript", "React", "Education"],
    github: "https://github.com/Skip06/Revvup-d",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <p className="text-muted-foreground mb-8">Some things I've built</p>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="group relative p-6 bg-card/30 backdrop-blur-sm rounded-xl hover:bg-card/60 transition-all duration-300"
          >
            {/* Gradient accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-muted-foreground font-mono">0{index + 1}</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed pl-7">{project.description}</p>
                <div className="flex flex-wrap gap-2 pl-7">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.github}
                target="_blank"
                className="p-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-all group/link"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
