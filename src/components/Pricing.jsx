import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function PricingCard({ id, highlighted, price, period, badge, features, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal p-8 rounded-xl flex flex-col gap-6 ${
        highlighted
          ? 'border-2 border-accentPrimary bg-accentPrimary/5'
          : 'border border-textSecondaryLight/20'
      }`}
    >
      {badge && (
        <span className="inline-block self-start font-sans text-xs font-medium text-accentPrimary bg-accentPrimary/10 px-3 py-1 rounded-md">
          {badge}
        </span>
      )}
      <div>
        <p className="font-sans text-3xl font-semibold text-textPrimaryLight">{price}</p>
        <p className="font-sans text-sm text-textSecondaryLight mt-1">{period}</p>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check
              size={16}
              strokeWidth={1.5}
              className="text-accentPrimary mt-0.5 flex-shrink-0"
            />
            <span className="font-sans text-sm text-textSecondaryLight">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-auto font-sans text-sm font-medium px-6 py-3 rounded-md text-center transition-opacity duration-300 hover:opacity-90 ${
          highlighted
            ? 'bg-bgIntervention text-textIntervention'
            : 'border border-textSecondaryLight/30 text-textPrimaryLight'
        }`}
      >
        Get Started
      </a>
    </div>
  )
}

export default function Pricing() {
  const titleRef = useScrollReveal()

  return (
    <section id="pricing" className="py-24 px-6 bg-bgPrimaryLight">
      <div className="max-w-3xl mx-auto">
        <p
          ref={titleRef}
          className="reveal font-sans text-xl md:text-2xl font-medium text-textPrimaryLight text-center mb-12"
        >
          Accessible to all. Sustainable for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PricingCard
            id="pricing-monthly"
            price="$1"
            period="per month"
            features={[
              'Full access to Strict & Structured modes.',
              'Cross-device streak tracking.',
            ]}
            delay={0}
          />
          <PricingCard
            id="pricing-annual"
            highlighted
            price="$10"
            period="per year"
            badge="Two months free"
            features={['A 12-month commitment to your behavioral goals.']}
            delay={120}
          />
        </div>
      </div>
    </section>
  )
}
