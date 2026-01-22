import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1A03]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#1C1A03]/80 backdrop-blur-md z-50 border-b border-[#7F5A36]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#1C1A03] dark:text-[#FCF5A5]">
            ThinkFeat
          </h1>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-[#1C1A03] dark:text-[#F6F1ED] hover:text-[#7F5A36] dark:hover:text-[#FCF5A5] transition">
              Services
            </a>
            <a href="#about" className="text-[#1C1A03] dark:text-[#F6F1ED] hover:text-[#7F5A36] dark:hover:text-[#FCF5A5] transition">
              About
            </a>
            <a href="#contact" className="text-[#1C1A03] dark:text-[#F6F1ED] hover:text-[#7F5A36] dark:hover:text-[#FCF5A5] transition">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-bold text-[#1C1A03] dark:text-[#F6F1ED]">
              Transforming Ideas Into
              <span className="block text-[#7F5A36] dark:text-[#FCF5A5]">
                Digital Reality
              </span>
            </h2>
            <p className="text-xl text-[#7F5A36] dark:text-[#F6F1ED]/80 max-w-2xl mx-auto">
              ThinkFeat is a leading software company dedicated to delivering innovative solutions that drive business growth and digital transformation.
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <button className="bg-[#7F5A36] dark:bg-[#FCF5A5] text-[#F6F1ED] dark:text-[#1C1A03] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Get Started
              </button>
              <button className="border-2 border-[#7F5A36] dark:border-[#FCF5A5] text-[#7F5A36] dark:text-[#FCF5A5] px-8 py-3 rounded-lg font-semibold hover:bg-[#7F5A36] hover:text-[#F6F1ED] dark:hover:bg-[#FCF5A5] dark:hover:text-[#1C1A03] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#F6F1ED] dark:bg-[#1C1A03]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-[#1C1A03] dark:text-[#FCF5A5]">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#1C1A03] border-2 border-[#7F5A36]/20 dark:border-[#FCF5A5]/20 p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#FCF5A5] dark:bg-[#7F5A36] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1C1A03] dark:text-[#F6F1ED]">
                Web Development
              </h4>
              <p className="text-[#7F5A36] dark:text-[#F6F1ED]/80">
                Custom web applications built with modern technologies and best practices.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1C1A03] border-2 border-[#7F5A36]/20 dark:border-[#FCF5A5]/20 p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#FCF5A5] dark:bg-[#7F5A36] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1C1A03] dark:text-[#F6F1ED]">
                Mobile Apps
              </h4>
              <p className="text-[#7F5A36] dark:text-[#F6F1ED]/80">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1C1A03] border-2 border-[#7F5A36]/20 dark:border-[#FCF5A5]/20 p-8 rounded-xl hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#FCF5A5] dark:bg-[#7F5A36] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl">☁️</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#1C1A03] dark:text-[#F6F1ED]">
                Cloud Solutions
              </h4>
              <p className="text-[#7F5A36] dark:text-[#F6F1ED]/80">
                Scalable cloud infrastructure and deployment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-[#1C1A03] dark:text-[#FCF5A5]">
                About ThinkFeat
              </h3>
              <p className="text-lg text-[#7F5A36] dark:text-[#F6F1ED]/80 mb-4">
                We are a team of passionate developers, designers, and innovators committed to creating exceptional software solutions.
              </p>
              <p className="text-lg text-[#7F5A36] dark:text-[#F6F1ED]/80">
                With years of experience in the industry, we help businesses transform their ideas into powerful digital products that make an impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FCF5A5] to-[#7F5A36] dark:from-[#7F5A36] dark:to-[#FCF5A5] h-80 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-[#7F5A36] dark:bg-[#1C1A03] border-t-2 border-[#FCF5A5]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-[#F6F1ED] dark:text-[#FCF5A5]">
            Let's Work Together
          </h3>
          <p className="text-xl text-[#F6F1ED]/90 dark:text-[#F6F1ED]/80 mb-8">
            Ready to start your next project? Get in touch with us today.
          </p>
          <button className="bg-[#FCF5A5] dark:bg-[#FCF5A5] text-[#1C1A03] px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1A03] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-[#FCF5A5] mb-4">ThinkFeat</h3>
              <p className="text-[#F6F1ED]/80 text-sm">
                Transforming ideas into digital reality. Your trusted partner for innovative software solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#FCF5A5] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-[#FCF5A5] mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy-policy" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-[#FCF5A5] mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:info@thinkfeat.com" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    info@thinkfeat.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                    +92 (334) 267-3135
                  </a>
                </li>
              </ul>
              {/* <div className="flex gap-4 mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#F6F1ED]/80 hover:text-[#FCF5A5] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>

          <div className="border-t border-[#F6F1ED]/20 pt-6 text-center text-[#F6F1ED]/60 text-sm">
            <p>&copy; 2026 ThinkFeat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
