"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Github, Twitter, Mail, Send, ArrowUpRight } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:swastik.patro02@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="mb-20">
      <p className="text-muted-foreground text-sm mb-2 font-mono">
        <span className="text-primary">$</span> ./contact.sh
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p className="text-muted-foreground mb-8">Get in touch with me</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Send a message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-background/50 rounded-lg border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-background/50 rounded-lg border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-background/50 rounded-lg border-none focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Find me elsewhere
          </h3>
          <div className="space-y-3">
            <Link
              href="https://github.com/Skip06"
              target="_blank"
              className="flex items-center justify-between p-4 bg-background/30 rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium text-sm">GitHub</p>
                  <p className="text-xs text-muted-foreground">@Skip06</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://x.com/SwastKumar"
              target="_blank"
              className="flex items-center justify-between p-4 bg-background/30 rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium text-sm">Twitter / X</p>
                  <p className="text-xs text-muted-foreground">@SwastKumar</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="mailto:swastik.patro02@gmail.com"
              className="flex items-center justify-between p-4 bg-background/30 rounded-lg hover:bg-primary/10 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs text-muted-foreground">swastik.patro02@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
