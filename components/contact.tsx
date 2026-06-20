import Link from "next/link"
import { Github, Twitter, Mail, ArrowUpRight } from "lucide-react"

const links = [
  {
    label: "GitHub",
    handle: "@Skip06",
    href: "https://github.com/Skip06",
    icon: Github,
    desc: "code & open source projects",
  },
  {
    label: "Twitter / X",
    handle: "@SwastKumar",
    href: "https://x.com/SwastKumar",
    icon: Twitter,
    desc: "thoughts & tech threads",
  },
  {
    label: "Email",
    handle: "swastik.patro02@gmail.com",
    href: "mailto:swastik.patro02@gmail.com",
    icon: Mail,
    desc: "best way to reach me",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 scroll-mt-24">
      <hr className="section-divider mb-12" />
      <h2 className="text-lg font-semibold tracking-tight mb-2">get in touch</h2>
      <p className="text-sm mb-8 leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
        I&apos;m always open to interesting conversations, collaborations, or opportunities.
        An email about something that recently fascinated you would honestly make my day.
      </p>

      <div>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            className="contact-card group"
          >
            <div className="flex items-center gap-3">
              <link.icon className="w-[14px] h-[14px] text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              <div>
                <p className="font-medium text-sm">{link.label}</p>
                <p className="text-xs text-muted-foreground">{link.desc}</p>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground transition-all duration-300" />
          </Link>
        ))}
      </div>
    </section>
  )
}
