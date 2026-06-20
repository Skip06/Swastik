import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Focus } from "@/components/focus"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CatCursor } from "@/components/cat-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Background effects — subtle */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div className="bg-grain" />

      {/* Sketch cat cursor */}
      <CatCursor />

      {/* Floating nav */}
      <Header />

      {/* Content — generous max width and padding */}
      <div className="relative z-10 max-w-xl mx-auto px-6 pb-6">
        <div id="hero">
          <Hero />
        </div>
        <Projects />
        <Focus />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
