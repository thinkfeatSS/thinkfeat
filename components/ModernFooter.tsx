'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiArrowUp, FiSun, FiMoon } from 'react-icons/fi';
import { Button } from './ui';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Training', href: '#training' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI Solutions', href: '#services' },
    { name: '3D Visualization', href: '#services' },
    { name: 'Training Programs', href: '#training' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: 'https://github.com' },
  { name: 'Twitter', icon: FiTwitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com' }
];

export default function ModernFooter() {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white/5 dark:bg-dark-surface/20 backdrop-blur-sm border-t border-white/10 dark:border-dark-border/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-dark-surface/5 to-transparent dark:from-transparent dark:via-dark-surface/10 dark:to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-yellow-400 to-secondary bg-clip-text text-transparent mb-4 drop-shadow-sm">
                Thinkfeat
              </h3>
              <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed font-medium">
                Building the future of software with innovative solutions, cutting-edge technology, 
                and exceptional user experiences.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 dark:bg-dark-surface/30 backdrop-blur-sm border border-white/20 dark:border-dark-border/20 rounded-lg flex items-center justify-center text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary hover:bg-white/20 dark:hover:bg-dark-surface/40 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-4 drop-shadow-sm">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-4 drop-shadow-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-4 drop-shadow-sm">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:hello@thinkfeat.com"
                  className="flex items-center gap-3 text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-colors duration-300"
                >
                  <FiMail className="w-4 h-4" />
                  hello@thinkfeat.com
                </a>
                <p className="flex items-center gap-3 text-dark-text-secondary dark:text-light-text-secondary">
                  <span className="w-4 h-4">📍</span>
                  Tech City, TC 12345
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-text dark:text-text-dark mb-4 drop-shadow-sm">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-white/10 dark:border-dark-border/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-dark-text-secondary dark:text-light-text-secondary text-sm">
            © {new Date().getFullYear()} Thinkfeat. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              icon={theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              className="rounded-lg"
              aria-label="Toggle theme"
            />

            {/* Back to Top */}
            <Button
              variant="gradient"
              size="sm"
              onClick={scrollToTop}
              icon={<FiArrowUp className="w-5 h-5" />}
              className="rounded-lg"
              aria-label="Back to top"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 