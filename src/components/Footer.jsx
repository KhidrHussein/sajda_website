export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-textSecondaryLight/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-sm text-textSecondaryLight">
          &copy; Sajda. A quiet shift.
        </p>
        <nav className="flex gap-6">
          <a
            href="#"
            id="footer-privacy"
            className="font-sans text-sm text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            id="footer-terms"
            className="font-sans text-sm text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            id="footer-contact"
            className="font-sans text-sm text-textSecondaryLight hover:text-textPrimaryLight transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
