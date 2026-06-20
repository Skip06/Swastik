"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const roles = ["Backend Systems", "Machine Learning", "Systems Programming", "Rust & TypeScript"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2500)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 30 : 65,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="pt-36 pb-10 animate-fade-in-up">
      {/* Avatar */}
      <div className="mb-10">
        <Image
          src="/images/image.png"
          alt="Swastik Kumar Patro"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      {/* Name — strong, high contrast */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
        Swastik Kumar Patro
      </h1>

      {/* Subtitle — secondary text color */}
      <p className="text-[15px] mb-5" style={{ color: "var(--text-secondary)" }}>
        2nd year CS student · India
      </p>

      {/* Status */}
      <div className="mb-7">
        <div className="status-badge">
          <span className="status-dot" />
          <span>looking for internship opportunities</span>
        </div>
      </div>

      {/* Bio — readable secondary color, generous line-height */}
      <div className="space-y-5 mb-8">
        <p className="leading-[1.8] text-[15.5px]" style={{ color: "var(--text-secondary)" }}>
          I build robust backend systems and experiment with machine learning — from
          first principles whenever possible. I&apos;m passionate about code and
          maths, and love making things that are fast, correct, and elegant.
        </p>
        <p className="leading-[1.8] text-[15.5px]" style={{ color: "var(--text-secondary)" }}>
          When I&apos;m not coding, you&apos;ll find me playing chess, exploring new places, or
          getting nerd-sniped by physics problems.
          If you&apos;re reading this, I&apos;d probably enjoy talking to you.
        </p>
      </div>

      {/* Typing effect */}
      <div className="mb-8 h-5">
        <p className="text-[13px] text-muted-foreground font-mono">
          currently into{" "}
          <span className="text-foreground">
            {displayText}
            <span className="typing-cursor">|</span>
          </span>
        </p>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-5">
        <Link href="https://github.com/Skip06" target="_blank" className="pill-link">
          <Github className="w-[14px] h-[14px]" />
          github
        </Link>
        <Link href="https://x.com/SwastKumar" target="_blank" className="pill-link">
          <Twitter className="w-[14px] h-[14px]" />
          twitter
        </Link>
        <Link href="mailto:swastik.patro02@gmail.com" className="pill-link">
          <Mail className="w-[14px] h-[14px]" />
          email
        </Link>
      </div>
    </section>
  )
}
