import Link from "next/link"
import { Github, Twitter, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-8 pb-12 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          Built with <Heart className="w-4 h-4 text-red-500" /> by Swastik © 2025
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Skip06"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/SwastKumar"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:swastik.patro02@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
