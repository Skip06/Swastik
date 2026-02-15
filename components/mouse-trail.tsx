"use client"

import { useEffect, useRef } from "react"

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const trail: Array<{ x: number; y: number; age: number }> = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      trail.push({ x: mouseX, y: mouseY, age: 0 })
      if (trail.length > 30) trail.shift()
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      trail.forEach((point, i) => {
        point.age++
        const opacity = Math.max(0, 1 - point.age / 30)
        const size = (1 - i / trail.length) * 8

        ctx.beginPath()
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45, 212, 191, ${opacity * 0.4})`
        ctx.fill()
      })

      // Remove old points
      while (trail.length > 0 && trail[0].age > 30) {
        trail.shift()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />
}
