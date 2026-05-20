import MihrabLogo from './MihrabLogo'

export default function TermsOfService() {
  return (
    <article className="min-h-screen bg-bgPrimaryLight text-textPrimaryLight py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between border-b border-textSecondaryLight/10 pb-8 mb-12">
          <a href="#" className="flex items-center gap-2 group" id="terms-logo">
            <MihrabLogo />
            <span className="font-sans text-[18px] font-medium text-textPrimaryLight tracking-tight">
              Sajda
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-sans text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </a>
        </header>

        {/* Content */}
        <div className="prose prose-stone max-w-none">
          <h1 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight text-textPrimaryLight mb-2">
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-textSecondaryLight mb-8">
            Effective Date: May 20, 2026
          </p>

          <div className="space-y-8 font-sans text-[15px] leading-relaxed text-textSecondaryLight">
            <p className="text-textPrimaryLight font-medium">
              Welcome to Sajda. By downloading, accessing, or using the Sajda application and website, you agree to be bound by these Terms of Service.
            </p>

            <hr className="border-textSecondaryLight/10" />

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">1. Nature of the Service</h2>
              <p>
                Sajda is a digital behavioral intervention tool designed to help users minimize digital distractions during prayer times.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-textPrimaryLight">Not a Guarantee:</strong> Sajda provides tools to introduce friction to device usage, but it does not physically force compliance. You are ultimately responsible for your own religious practices and device usage.
                </li>
                <li>
                  <strong className="text-textPrimaryLight">Device Access:</strong> By enabling Strict Mode or Structured Mode, you are voluntarily opting to restrict access to certain functions of your device for a limited time. Sajda provides an intentional &ldquo;Escape Hatch&rdquo; (a timed override) in case of emergencies, but we are not liable for any missed calls, messages, or inability to access your device during a restriction window.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">2. Subscriptions and Payments</h2>
              <p>
                Sajda offers premium features accessible via a monthly or annual subscription.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-textPrimaryLight">Billing:</strong> Payment will be charged to your Apple ID or Google Play account at confirmation of purchase.
                </li>
                <li>
                  <strong className="text-textPrimaryLight">Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
                </li>
                <li>
                  <strong className="text-textPrimaryLight">Management:</strong> You may manage or cancel your subscriptions by going to your device's Account Settings after purchase. We cannot cancel subscriptions on your behalf.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">3. User Autonomy and Responsibility</h2>
              <p>
                Sajda is built on the philosophy of pre-commitment. You agree that you are intentionally granting the app permission to block or restrict your screen access. You agree not to hold us liable for any inconvenience, loss of data, or disruption to your digital activities caused by the app functioning as intended.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">4. Intellectual Property</h2>
              <p>
                All code, design, branding (including the continuous monoline Mihrab logo), text, and architecture within Sajda are the intellectual property of the developer. You may not copy, modify, distribute, or reverse-engineer any part of the application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">5. Disclaimer of Warranties</h2>
              <p>
                Sajda is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE.&rdquo; We make no warranties, expressed or implied, regarding the app's uninterrupted availability, accuracy of prayer times, or bug-free operation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Sajda and its creator shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the app.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Lagos, Nigeria, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">8. Contact</h2>
              <p>
                For any questions regarding these Terms, please contact:{' '}
                <a
                  href="mailto:husseinkhidr3@gmail.com"
                  className="text-textPrimaryLight hover:underline font-medium"
                >
                  husseinkhidr3@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Footer Link back */}
        <footer className="mt-16 pt-8 border-t border-textSecondaryLight/10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-sans text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </a>
        </footer>
      </div>
    </article>
  )
}
