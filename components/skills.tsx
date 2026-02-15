"use client"

import { SiTypescript, SiPython, SiC, SiBun, SiNodedotjs, SiReact, SiDocker, SiGit } from "react-icons/si"

const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "C", icon: SiC, color: "#a8b9cc" },
  { name: "Bun", icon: SiBun, color: "#fbf0df" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Git", icon: SiGit, color: "#f05032" },
]

export function Skills() {
  return (
    <section id="skills" className="mb-20">
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <p className="text-muted-foreground mb-8">Technologies I work with</p>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-4 bg-card/50 backdrop-blur-sm rounded-xl hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center justify-center">
              <skill.icon
                className="w-10 h-10 transition-transform group-hover:scale-110"
                style={{ color: skill.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
