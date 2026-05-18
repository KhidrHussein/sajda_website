import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Features from './components/Features'
import EscapeHatch from './components/EscapeHatch'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
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
