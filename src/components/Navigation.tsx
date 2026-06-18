import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Github, ExternalLink } from 'lucide-react'
import { navLinks, personal } from '../data/portfolio'
import { cn } from '../lib/utils'

interface Props {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export default function Navigation({ theme, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-slate-950/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-950/20'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="Rafey Saleem" className="h-9 w-auto object-contain" />
          </motion.button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    activeSection === link.href
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span>GitHub</span>
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="md:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 md:hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={cn(
                      'w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all',
                      activeSection === link.href
                        ? 'text-violet-400 bg-violet-500/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-xl transition-all"
                >
                  <Github size={16} /> GitHub Profile
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
