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
      <footer className="bg-[#1C1A03] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-[#F6F1ED]">
          <p>&copy; 2026 ThinkFeat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
