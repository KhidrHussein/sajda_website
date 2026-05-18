import { Lock, Smartphone, Shield } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    id: 'feature-precommitment',
    Icon: Lock,
    title: 'Set Once. Step Away.',
    text: 'Decide your boundaries during onboarding. The app automatically enforces them at prayer times without asking for daily permission.',
  },
  {
    id: 'feature-android',
    Icon: Smartphone,
    title: 'Full Immersion',
    text: 'On Android, a full-screen overlay blocks all interaction except allowed apps, creating a quiet, distraction-free environment.',
  },
  {
    id: 'feature-ios',
    Icon: Shield,
    title: 'System-Level Boundaries',
    text: 'On iOS, Sajda utilizes Screen Time APIs to pause your selected distraction apps, triggering a hard stop when it\u2019s time to pray.',
  },
]

function FeatureCard({ id, Icon, title, text, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      id={id}
      className="reveal flex flex-col gap-5"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-md border border-textSecondaryLight/20">
        <Icon size={20} strokeWidth={1.5} className="text-textPrimaryLight" />
      </div>
      <h3 className="font-sans text-lg font-medium text-textPrimaryLight">{title}</h3>
      <p className="font-sans text-textSecondaryLight leading-relaxed text-sm">{text}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-bgPrimaryLight">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <FeatureCard key={f.id} {...f} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
