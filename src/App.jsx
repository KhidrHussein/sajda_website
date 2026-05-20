import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Features from './components/Features'
import EscapeHatch from './components/EscapeHatch'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

export default function App() {
  const [view, setView] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#/privacy' || hash === '#privacy') {
        setView('privacy')
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else if (hash === '#/terms' || hash === '#terms') {
        setView('terms')
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else {
        setView('home')
      }
    }

    // Run on initial mount
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (view === 'privacy') {
    return <PrivacyPolicy />
  }

  if (view === 'terms') {
    return <TermsOfService />
  }

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <Philosophy />
        <Features />
        <EscapeHatch />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
