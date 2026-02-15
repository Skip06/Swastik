export function About() {
  return (
    <section id="about" className="mb-20">
      <p className="text-muted-foreground text-sm mb-2 font-mono">
        <span className="text-primary">$</span> cat aboutme.md
      </p>
      <h2 className="text-2xl font-bold mb-2">About</h2>
      <p className="text-muted-foreground mb-8">A bit about me</p>

      <div className="relative p-6 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-sm rounded-xl overflow-hidden">
        {/* Decorative gradient blur */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-medium">2nd year Computer Science student</span> who genuinely
            enjoys writing code and exploring mathematical concepts. My focus is on building robust backend systems and
            experimenting with machine learning applications.
          </p>
          <p>
            I primarily work with <span className="text-primary">TypeScript</span>,{" "}
            <span className="text-primary">C</span>, <span className="text-primary">Python</span>, and{" "}
            <span className="text-primary">Bun</span> to create efficient, scalable applications. I'm particularly
            interested in systems programming, distributed systems, and security-focused development.
          </p>
          <p>
            Beyond coding, I enjoy <span className="text-[#facc15]">Chess</span> (always up for a game),{" "}
            <span className="text-[#facc15]">Travelling</span> to new places, and diving deep into{" "}
            <span className="text-[#facc15]">Physics</span> concepts.
          </p>
        </div>
      </div>
    </section>
  )
}
