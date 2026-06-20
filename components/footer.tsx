"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      setTime(now + " IST")
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="py-14 mt-4">
      <hr className="section-divider mb-10" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Swastik Kumar Patro</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-green-500/40 animate-pulse" />
            India
          </span>
          <span className="opacity-25">·</span>
          <span className="font-mono text-[11px]">{time}</span>
        </div>
      </div>
    </footer>
  )
}
