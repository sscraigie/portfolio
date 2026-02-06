import Link from "next/link";
import { siteConfig } from "@/config/site";

const lastUpdated = "February 6, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          Last updated: {lastUpdated}
        </p>
        <p className="mt-4 text-base text-gray-700 dark:text-neutral-300">
          This Privacy Policy explains how {siteConfig.name} ("we", "us", or "our")
          collects, uses, and protects your information when you visit this
          website.
        </p>
      </header>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Information we collect
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            We collect information you choose to share, such as when you contact
            us through the contact form. This may include your name, email
            address, and any message you submit.
          </p>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            We may also collect basic technical data such as browser type, device
            information, IP address, and pages visited for analytics and security
            purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            How we use your information
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700 dark:text-neutral-300">
            <li>Respond to inquiries and provide requested information.</li>
            <li>Maintain and improve site performance and security.</li>
            <li>Analyze site usage trends to improve content and experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Cookies and analytics
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            We may use cookies or similar technologies to understand site
            performance and improve your experience. You can control cookies via
            your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Third-party links
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            This site may link to third-party websites. We are not responsible
            for their privacy practices. Please review their policies before
            providing personal information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Data retention
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            We retain personal information only as long as necessary to fulfill
            the purposes described in this policy or as required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Security
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            We implement reasonable safeguards to protect your information, but
            no method of transmission or storage is completely secure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Your choices
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            You may request access, correction, or deletion of your personal
            information by contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            If you have questions about this policy, please reach out via the
            contact page.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
