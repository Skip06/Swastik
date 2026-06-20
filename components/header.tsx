"use client"

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
    <nav className="floating-nav">
      <a href="#hero" className="active">home</a>
      <a href="#projects">projects</a>
      <a href="#focus">now</a>
      <a href="#skills">skills</a>
      <a href="#contact">contact</a>
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-1.5 rounded-md hover:text-foreground transition-colors duration-300 ml-0.5 text-muted-foreground"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-3.5 h-3.5" />
          ) : (
            <Moon className="w-3.5 h-3.5" />
          )}
        </button>
      )}
    </nav>
  )
}
