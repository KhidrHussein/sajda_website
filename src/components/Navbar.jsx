import { useState, useEffect } from 'react'
import MihrabLogo from './MihrabLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      } bg-bgPrimaryLight/80 backdrop-blur-md border-b border-textSecondaryLight/10`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <a href="#" className="flex items-center gap-2 group" id="nav-logo">
          <MihrabLogo />
          <span className="font-sans text-[18px] font-medium text-textPrimaryLight tracking-tight">
            Sajda
          </span>
        </a>

        {/* Right: Links + CTA */}
        <div className="flex items-center gap-6">
          <a
            href="#philosophy"
            id="nav-philosophy"
            className="font-sans text-sm text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            Philosophy
          </a>
          <a
            href="#pricing"
            id="nav-pricing"
            className="font-sans text-sm text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#hero"
            id="nav-cta"
            className="font-sans text-sm bg-bgIntervention text-textIntervention rounded-md px-4 py-2 hover:opacity-90 transition-opacity duration-300"
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  )
}
