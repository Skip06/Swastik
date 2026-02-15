"use client"

import Link from "next/link"
import { Github, Twitter, Mail, Briefcase } from "lucide-react"
import { useEffect, useState } from "react"

const skills = ["TypeScript", "Python", "C", "Bun", "Systems Programming", "Machine Learning"]

export function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const skill = skills[currentSkill]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < skill.length) {
            setDisplayText(skill.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentSkill((prev) => (prev + 1) % skills.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentSkill])

  return (
    <section className="mb-20">
      <div className="mb-8">
        <p className="text-muted-foreground text-sm mb-2 font-mono">
          <span className="text-primary">$</span> whoami
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight">Swastik Kumar Patro</h1>
        <h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium mb-6">Backend & ML Developer</h2>
      </div>

      <div className="mb-8 h-8">
        <p className="text-lg text-muted-foreground font-mono">
          I build things with{" "}
          <span className="text-primary font-semibold">
            {displayText}
            <span className="typing-cursor">|</span>
          </span>
        </p>
      </div>

      <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
        2nd year CS student passionate about code and maths. Building scalable applications and exploring the
        intersection of systems programming and machine learning.
      </p>

      <div className="inline-flex items-center gap-2 text-sm text-accent bg-accent/10 border border-accent/30 px-4 py-2 rounded-full mb-8">
        <Briefcase className="w-4 h-4" />
        <span>Looking for internship opportunities</span>
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/Skip06"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Github className="w-4 h-4" />
          GitHub
        </Link>
        <Link
          href="https://x.com/SwastKumar"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </Link>
        <Link
          href="mailto:swastik.patro02@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
        >
          <Mail className="w-4 h-4" />
          Email
        </Link>
      </div>
    </section>
  )
}
