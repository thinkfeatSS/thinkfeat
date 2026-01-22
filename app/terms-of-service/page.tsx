import Link from "next/link";

export const metadata = {
  title: "Terms of Service - ThinkFeat",
  description: "Terms of Service for ThinkFeat Software Solutions",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-[#7F5A36] dark:text-[#F6F1ED]/60 mb-12">
          Last updated: January 22, 2026
        </p>

        <div className="space-y-8 text-[#1C1A03] dark:text-[#F6F1ED]">
          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              1. Agreement to Terms
            </h2>
            <p className="leading-relaxed mb-4">
              By accessing or using ThinkFeat's services, you agree to be bound by these Terms of Service and 
              all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              2. Use License
            </h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on ThinkFeat's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              3. Services Description
            </h2>
            <p className="leading-relaxed mb-4">
              ThinkFeat provides software development services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom web application development</li>
              <li>Mobile application development</li>
              <li>Cloud solutions and infrastructure</li>
              <li>Software consulting and architecture</li>
              <li>Technical support and maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              4. User Responsibilities
            </h2>
            <p className="leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information when required</li>
              <li>Maintain the security of your account and password</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any activity that interferes with or disrupts our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              5. Intellectual Property
            </h2>
            <p className="leading-relaxed mb-4">
              All content, features, and functionality on our website and services, including but not limited to 
              text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of 
              ThinkFeat or its licensors and are protected by international copyright, trademark, patent, trade 
              secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              6. Limitation of Liability
            </h2>
            <p className="leading-relaxed mb-4">
              In no event shall ThinkFeat or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on ThinkFeat's website, even if ThinkFeat or a ThinkFeat authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              7. Privacy
            </h2>
            <p className="leading-relaxed mb-4">
              Your use of our services is also governed by our{" "}
              <Link href="/privacy-policy" className="text-[#7F5A36] dark:text-[#FCF5A5] underline">
                Privacy Policy
              </Link>. Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              8. Termination
            </h2>
            <p className="leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, 
              your right to use the services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              9. Modifications
            </h2>
            <p className="leading-relaxed mb-4">
              ThinkFeat reserves the right to modify or replace these Terms at any time. We will provide notice of 
              any material changes by posting the new Terms on this page and updating the "Last updated" date. 
              Your continued use of the services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#7F5A36] dark:text-[#FCF5A5] mb-4">
              10. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@thinkfeat.com" className="text-[#7F5A36] dark:text-[#FCF5A5] underline">
                legal@thinkfeat.com
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
