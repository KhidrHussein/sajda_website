import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Philosophy() {
  const refQuote = useScrollReveal()
  const refText = useScrollReveal()

  return (
    <section
      id="philosophy"
      className="bg-bgIntervention text-textIntervention py-24 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Quote */}
        <div ref={refQuote} className="reveal">
          <blockquote className="font-serif italic text-2xl md:text-4xl text-textSecondaryDark leading-relaxed">
            &ldquo;Success is not in the abundance of motion, but in the precision of your
            pause.&rdquo;
          </blockquote>
        </div>

        {/* Right: Philosophy text */}
        <div ref={refText} className="reveal">
          <h3 className="font-sans text-2xl font-medium text-textIntervention mb-4">
            Identity formation, not gamification.
          </h3>
          <p className="font-sans text-textSecondaryDark leading-relaxed">
            Most apps try to manipulate you with streaks, badges, and punitive alerts. Sajda is
            built on pre-commitment. You opt into structure once, and the system executes quietly,
            reinforcing one truth: You are someone who prays on time.
          </p>
        </div>
      </div>
    </section>
  )
}
