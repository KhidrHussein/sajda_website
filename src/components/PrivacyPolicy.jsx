import MihrabLogo from './MihrabLogo'

export default function PrivacyPolicy() {
  return (
    <article className="min-h-screen bg-bgPrimaryLight text-textPrimaryLight py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Navigation / Header */}
        <header className="flex items-center justify-between border-b border-textSecondaryLight/10 pb-8 mb-12">
          <a href="#" className="flex items-center gap-2 group" id="privacy-logo">
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
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-textSecondaryLight mb-8">
            Effective Date: May 20, 2026
          </p>

          <div className="space-y-8 font-sans text-[15px] leading-relaxed text-textSecondaryLight">
            <p className="text-textPrimaryLight font-medium">
              Sajda (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we handle your data when you use the Sajda mobile application and website (the &ldquo;Service&rdquo;).
            </p>

            <p>
              Sajda is designed as a quiet, private behavioral intervention tool. To achieve this, we do not require you to create an account, and we do not store your personal data on any external servers.
            </p>

            <hr className="border-textSecondaryLight/10" />

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">1. Data We Collect and How We Use It</h2>
              <p>
                Because Sajda does not use a custom backend server, almost all data remains locally on your device.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-textPrimaryLight">Locally Stored Data:</strong> Your prayer calculation preferences, streak data, and app restriction settings are stored locally on your device via SQLite/Hive. We do not have access to this data.
                </li>
                <li>
                  <strong className="text-textPrimaryLight">Payment Information:</strong> If you purchase a subscription, the transaction is processed securely through Apple App Store or Google Play Billing. We use RevenueCat to manage subscription statuses. We do not collect or store your credit card or billing details. RevenueCat provides us with an anonymous user ID to verify if you have an active entitlement.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">2. Device Permissions and APIs</h2>
              <p>
                To function as a behavioral intervention tool, Sajda requires specific device-level permissions. We do not use these permissions to collect, transmit, or sell your data.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-textPrimaryLight">Accessibility Service API (Android):</strong> Sajda uses Android's Accessibility Service API strictly to power &ldquo;Strict Mode.&rdquo; This allows the app to draw an overlay over your screen to block access to distracting apps during your selected prayer windows.
                  <p className="mt-1 text-sm text-textSecondaryLight/80">
                    We DO NOT use this service to monitor your keystrokes, read your screen content, or track your app usage history. The service is only active during the scheduled prayer window to enforce the distraction block and is governed entirely locally on your device.
                  </p>
                </li>
                <li>
                  <strong className="text-textPrimaryLight">Screen Time / Family Controls API (iOS):</strong> Sajda uses Apple's Screen Time APIs to power &ldquo;Structured Mode,&rdquo; allowing you to temporarily hide or block distracting apps. We do not collect or transmit a list of the apps you have installed or the apps you choose to restrict.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">3. Third-Party Services</h2>
              <p>We use the following third-party services to operate the app:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-textPrimaryLight">Apple App Store &amp; Google Play:</strong> For distributing the app and processing payments.
                </li>
                <li>
                  <strong className="text-textPrimaryLight">RevenueCat:</strong> To validate purchase receipts and manage subscription access anonymously.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">4. Children's Privacy</h2>
              <p>
                Sajda does not knowingly collect personally identifiable information from children under the age of 13. Because no account creation is required and no data is transmitted to our servers, children can use the app safely under the local supervision of a parent or guardian.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">5. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy occasionally. We will notify you of any changes by updating the &ldquo;Effective Date&rdquo; at the top of this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-textPrimaryLight">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:{' '}
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
