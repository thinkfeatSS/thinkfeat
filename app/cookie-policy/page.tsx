import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - ThinkFeat",
  description: "Cookie Policy for ThinkFeat Software Solutions",
};

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <p className="text-[#7F5A36] dark:text-[#F6F1ED]/60 mb-12">
          Last updated: January 22, 2026
        </p>

        <div className="space-y-8 text-[#1C1A03] dark:text-[#F6F1ED]">
          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              1. What Are Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
            <p className="leading-relaxed mb-4">
              At ThinkFeat, we use cookies to enhance your experience, understand how you use our website, and improve 
              our services. This Cookie Policy explains what cookies are, how we use them, and how you can manage them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              2. How We Use Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled</li>
              <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> These cookies enable enhanced functionality and personalization, such as theme preferences</li>
              <li><strong>Analytics Cookies:</strong> These cookies help us analyze website traffic and improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              3. Types of Cookies We Use
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-3">
                Session Cookies
              </h3>
              <p className="leading-relaxed">
                These are temporary cookies that remain in your browser until you leave the website. They help us 
                maintain your session and remember what you've done on the site.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-3">
                Persistent Cookies
              </h3>
              <p className="leading-relaxed">
                These cookies remain on your device for a set period or until you delete them. They help us remember 
                your preferences (like theme settings) when you return to our website.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-3">
                First-Party Cookies
              </h3>
              <p className="leading-relaxed">
                These are cookies set by ThinkFeat directly. We use these to improve your experience and understand 
                how you use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-3">
                Third-Party Cookies
              </h3>
              <p className="leading-relaxed">
                These are cookies set by third-party services we use, such as analytics providers. These help us 
                understand website performance and user behavior.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              4. Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30">
                <thead className="bg-[#FCF5A5]/20 dark:bg-[#7F5A36]/20">
                  <tr>
                    <th className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">theme</td>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">Stores user theme preference</td>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">session_id</td>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">Maintains user session</td>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">analytics</td>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">Tracks website usage</td>
                    <td className="border border-[#7F5A36]/30 dark:border-[#FCF5A5]/30 px-4 py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              5. How to Manage Cookies
            </h2>
            <p className="leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences 
              by adjusting your browser settings. Most web browsers allow some control of cookies through the browser settings.
            </p>
            <p className="leading-relaxed mb-4">
              Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Please note that if you disable cookies, some features of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              6. Updates to This Policy
            </h2>
            <p className="leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. We encourage you to review this policy periodically to stay 
              informed about how we use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              7. More Information
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at{" "}
              <a href="mailto:privacy@thinkfeat.com" className="text-[#7F5A36] dark:text-[#FCF5A5] underline">
                privacy@thinkfeat.com
              </a>
            </p>
            <p className="leading-relaxed">
              For more information about your privacy rights, please see our{" "}
              <Link href="/privacy-policy" className="text-[#7F5A36] dark:text-[#FCF5A5] underline">
                Privacy Policy
              </Link>.
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
