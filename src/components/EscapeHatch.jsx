import { useScrollReveal } from '../hooks/useScrollReveal'

export default function EscapeHatch() {
  const ref = useScrollReveal()

  return (
    <section id="escape-hatch" className="py-16 px-6 bg-bgPrimaryLight">
      <div ref={ref} className="reveal max-w-xl mx-auto text-center">
        <h3 className="font-sans text-2xl font-medium text-textPrimaryLight mb-4">
          Respectful of Autonomy
        </h3>
        <p className="font-sans text-textSecondaryLight leading-relaxed">
          The goal is not control. The system includes a deliberate, heavy 60-second hold to bypass
          the lock if you truly need your device. It requires intention, not a casual swipe.
        </p>
      </div>
    </section>
  )
}
