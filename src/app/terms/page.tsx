import Link from "next/link";
import { siteConfig } from "@/config/site";

const lastUpdated = "February 6, 2026";

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          Last updated: {lastUpdated}
        </p>
        <p className="mt-4 text-base text-gray-700 dark:text-neutral-300">
          These Terms of Service (&quot;Terms&quot;) govern your use of the Spencer Craigie
          website. By accessing or using the site, you agree to be bound by
          these Terms.
        </p>
      </header>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Use of the site
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            You may use this site for lawful purposes and in accordance with
            these Terms. You agree not to misuse the site or attempt to disrupt
            its operation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Intellectual property
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            All content, including text, graphics, and code, is the property of
            Spencer Craigie unless otherwise stated. You may not reproduce or
            redistribute materials without permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            User submissions
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            If you submit content through the contact form or other means, you
            grant us permission to use that content to respond to your request.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Disclaimers
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            The site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We
            make no warranties about accuracy, completeness, or reliability of the
            content.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Limitation of liability
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            To the maximum extent permitted by law, {siteConfig.name} will not be
            liable for any damages arising from your use of the site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Changes to these Terms
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            We may update these Terms from time to time. Updates will be posted
            on this page.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contact
          </h2>
          <p className="mt-2 text-gray-700 dark:text-neutral-300">
            If you have questions about these Terms, please reach out via the
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
