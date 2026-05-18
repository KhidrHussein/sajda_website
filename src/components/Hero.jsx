import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()

  return (
    <section
      id="hero"
      className="text-center py-32 px-6 max-w-4xl mx-auto flex flex-col items-center"
    >
      <p
        ref={ref1}
        className="reveal font-sans text-textSecondaryLight text-sm uppercase tracking-widest mb-4"
      >
        A Behavioral Intervention Tool
      </p>

      <h1
        ref={ref2}
        className="reveal font-sans text-5xl md:text-7xl font-semibold tracking-tight text-textPrimaryLight mb-6 leading-[1.08]"
      >
        Friction over force.
      </h1>

      <p
        ref={ref3}
        className="reveal font-sans text-lg text-textSecondaryLight max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Sajda does not force you to pray. It simply removes digital noise during salah, making
        the choice to pray the easiest path.
      </p>

      <div ref={ref4} className="reveal flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#"
          id="hero-android-cta"
          className="font-sans bg-bgIntervention text-textIntervention px-8 py-4 rounded-md hover:opacity-90 transition-opacity duration-300 text-sm font-medium"
        >
          Download for Android
        </a>
        <a
          href="#"
          id="hero-ios-cta"
          className="font-sans border border-textSecondaryLight/30 text-textPrimaryLight px-8 py-4 rounded-md hover:bg-textSecondaryLight/5 transition-colors duration-300 text-sm font-medium"
        >
          Download for iOS
        </a>
      </div>
    </section>
  )
}
