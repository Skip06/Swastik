import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { MouseTrail } from "@/components/mouse-trail"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <ParticleBackground />
      <MouseTrail />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
