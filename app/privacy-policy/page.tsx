import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - ThinkFeat",
  description: "Privacy Policy for ThinkFeat Software Solutions",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A03]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#1C1A03]/80 backdrop-blur-md z-50 border-b border-[#7F5A36]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#1C1A03] dark:text-[#FCF5A5] cursor-pointer">
              ThinkFeat
            </h1>
          </Link>
          <Link 
            href="/"
            className="text-[#1C1A03] dark:text-[#F6F1ED] hover:text-[#7F5A36] dark:hover:text-[#FCF5A5] transition"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-5xl font-bold text-[#1C1A03] dark:text-[#FCF5A5] mb-4">
          Privacy Policy
        </h1>
        <p className="text-[#7F5A36] dark:text-[#F6F1ED]/60 mb-12">
          Last updated: January 22, 2026
        </p>

        <div className="space-y-8 text-[#1C1A03] dark:text-[#F6F1ED]">
          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed mb-4">
              Welcome to ThinkFeat. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our 
              website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have 
              grouped together as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Identity Data: first name, last name, username or similar identifier</li>
              <li>Contact Data: email address, telephone numbers</li>
              <li>Technical Data: internet protocol (IP) address, browser type and version</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing and Communications Data: your preferences in receiving marketing from us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your 
              personal data in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              4. Data Security
            </h2>
            <p className="leading-relaxed mb-4">
              We have put in place appropriate security measures to prevent your personal data from being 
              accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
              we limit access to your personal data to those employees, agents, contractors and other third 
              parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              5. Your Legal Rights
            </h2>
            <p className="leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              6. Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              Our website uses cookies to distinguish you from other users of our website. This helps us to 
              provide you with a good experience when you browse our website and also allows us to improve our site. 
              For detailed information on the cookies we use and the purposes for which we use them, see our{" "}
              <Link href="/cookie-policy" className="text-[#7F5A36] dark:text-[#FCF5A5] underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              7. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@thinkfeat.com" className="text-[#7F5A36] dark:text-[#FCF5A5] underline">
                privacy@thinkfeat.com
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1C1A03] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-[#F6F1ED]">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy-policy" className="hover:text-[#FCF5A5] transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#FCF5A5] transition">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-[#FCF5A5] transition">
              Cookie Policy
            </Link>
          </div>
          <p>&copy; 2026 ThinkFeat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
