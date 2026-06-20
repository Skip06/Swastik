"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function CatCursor() {
  const catRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 400, y: typeof window !== "undefined" ? window.innerHeight / 2 : 400 })
  const targetRef = useRef({ x: -100, y: -100 })
  const [blink, setBlink] = useState(false)
  const [facingRight, setFacingRight] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [legPhase, setLegPhase] = useState(0)
  const legPhaseRef = useRef(0)
  const isRunningRef = useRef(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetRef.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    let animId: number
    window.addEventListener("mousemove", handleMouseMove)

    // Random blink
    const blinkLoop = () => {
      const delay = 2000 + Math.random() * 3500
      setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 100)
        blinkLoop()
      }, delay)
    }
    blinkLoop()

    const STOP_DISTANCE = 60
    const START_DISTANCE = 110

    const animate = () => {
      const p = posRef.current
      const t = targetRef.current

      const dx = t.x - p.x
      const dy = t.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist > START_DISTANCE) {
        isRunningRef.current = true
      } else if (dist < STOP_DISTANCE) {
        isRunningRef.current = false
      }

      if (isRunningRef.current && dist > STOP_DISTANCE) {
        const speed = 0.5 + Math.min((dist - STOP_DISTANCE) / 300, 1.2)
        const nx = dx / dist
        const ny = dy / dist
        p.x += nx * speed
        p.y += ny * speed

        if (Math.abs(dx) > 2) {
          setFacingRight(dx > 0)
        }

        legPhaseRef.current = (legPhaseRef.current + (0.06 + speed * 0.035)) % (Math.PI * 2)
        setLegPhase(legPhaseRef.current)
      }

      setIsRunning(isRunningRef.current && dist > STOP_DISTANCE)

      if (catRef.current) {
        catRef.current.style.transform = `translate(${p.x - 11}px, ${p.y - 10}px)`
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [handleMouseMove])

  // Leg animation offsets
  const fl1 = isRunning ? Math.sin(legPhase) * 1.5 : 0
  const fl2 = isRunning ? Math.sin(legPhase + Math.PI) * 1.5 : 0
  const bl = isRunning ? Math.sin(legPhase + Math.PI * 0.5) * 1.2 : 0
  const bounce = isRunning ? Math.sin(legPhase * 2) * 0.5 : 0

  // Sketch-style stroke color using CSS variable
  const sk = "var(--foreground)"

  return (
    <div
      ref={catRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ willChange: "transform" }}
    >
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        style={{
          transform: facingRight ? "scaleX(1)" : "scaleX(-1)",
          opacity: 0.4,
        }}
      >
        {/* Tail — a simple curved line */}
        <path
          d={`M18 ${13 + bounce} Q${isRunning ? "21 8 19 4" : "21 10 19 6"}`}
          stroke={sk}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          className={isRunning ? "cat-tail-wag" : ""}
        />

        {/* Body — simple oval outline */}
        <ellipse
          cx="12"
          cy={14.5 + bounce}
          rx="5.5"
          ry="3.5"
          stroke={sk}
          strokeWidth="1.2"
          fill="none"
        />

        {/* Front legs — thin lines */}
        <line
          x1="8.5" y1={17 + bounce + fl1}
          x2="8" y2={20 + bounce + fl1}
          stroke={sk} strokeWidth="1" strokeLinecap="round"
        />
        <line
          x1="11" y1={17 + bounce + fl2}
          x2="10.5" y2={20 + bounce + fl2}
          stroke={sk} strokeWidth="1" strokeLinecap="round"
        />

        {/* Back leg */}
        <line
          x1="15" y1={16.5 + bounce + bl}
          x2="15.5" y2={19.5 + bounce + bl}
          stroke={sk} strokeWidth="1" strokeLinecap="round"
        />

        {/* Head — small circle outline */}
        <circle
          cx="7"
          cy={11 + bounce}
          r="4.5"
          stroke={sk}
          strokeWidth="1.2"
          fill="none"
        />

        {/* Left ear */}
        <path
          d={`M3.5 ${8 + bounce} L5 ${3.5 + bounce} L6.5 ${7.5 + bounce}`}
          stroke={sk}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Right ear */}
        <path
          d={`M7.5 ${7.5 + bounce} L9 ${3.5 + bounce} L10.5 ${8 + bounce}`}
          stroke={sk}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Eyes */}
        {blink ? (
          <>
            <line x1="5" y1={10.5 + bounce} x2="6.5" y2={10.5 + bounce} stroke={sk} strokeWidth="0.8" strokeLinecap="round" />
            <line x1="7.5" y1={10.5 + bounce} x2="9" y2={10.5 + bounce} stroke={sk} strokeWidth="0.8" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Tiny dot eyes */}
            <circle cx="5.8" cy={10.5 + bounce} r="0.7" fill={sk} />
            <circle cx="8.2" cy={10.5 + bounce} r="0.7" fill={sk} />
          </>
        )}

        {/* Tiny nose — a small "v" */}
        <path
          d={`M6.5 ${12 + bounce} L7 ${12.8 + bounce} L7.5 ${12 + bounce}`}
          stroke={sk}
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Whiskers — delicate lines */}
        <line x1="1" y1={11 + bounce} x2="4.5" y2={11.3 + bounce} stroke={sk} strokeWidth="0.4" opacity="0.5" />
        <line x1="1.5" y1={12.5 + bounce} x2="4.5" y2={12 + bounce} stroke={sk} strokeWidth="0.4" opacity="0.5" />
        <line x1="9.5" y1={11.3 + bounce} x2="13" y2={11 + bounce} stroke={sk} strokeWidth="0.4" opacity="0.5" />
        <line x1="9.5" y1={12 + bounce} x2="12.5" y2={12.5 + bounce} stroke={sk} strokeWidth="0.4" opacity="0.5" />
      </svg>
    </div>
  )
}
