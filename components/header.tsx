"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="flex items-center justify-between py-6 mb-16">
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <Image src="/images/image.png" alt="Logo" width={40} height={40} className="rounded-lg" />
      </Link>

      <nav className="flex items-center gap-8">
        <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Skills
        </Link>
        <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Contact
        </Link>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-primary" /> : <Moon className="w-4 h-4 text-primary" />}
          </button>
        )}
      </nav>
    </header>
  )
}
