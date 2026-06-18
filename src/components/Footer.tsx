import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { personal, navLinks } from '../data/portfolio'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-2xl font-extrabold gradient-text mb-2">Rafey Saleem</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full-Stack Developer &amp; AI/ML Engineer based in Lahore, Pakistan.
              Building scalable, user-facing products.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-slate-500 hover:text-violet-400 hover:bg-violet-500/10 rounded-lg transition-all border border-slate-800 hover:border-violet-500/30"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-slate-100 font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-violet-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-100 font-semibold mb-4">Contact</p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <a href={`mailto:${personal.email}`} className="hover:text-violet-400 transition-colors">
                  {personal.email}
                </a>
              </p>
              <p>{personal.phone}</p>
              <p>{personal.location}</p>
              <div className="pt-2">
                <a href={personal.resumeUrl} download className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                  Download Resume →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Rafey Saleem. Built with{' '}
            <Heart size={12} className="text-red-400 fill-red-400 inline" />{' '}
            using React &amp; Tailwind CSS.
          </p>
          <motion.button
            onClick={scrollTop}
            className="p-2.5 text-slate-500 hover:text-violet-400 hover:bg-violet-500/10 rounded-xl border border-slate-800 hover:border-violet-500/30 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
