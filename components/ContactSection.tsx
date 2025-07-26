'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi';
import { Button, Input, Textarea } from './ui';
import { validateContactForm, logSecurityEvent } from '@/lib/security';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email Us',
    value: 'hello@thinkfeat.com',
    link: 'mailto:hello@thinkfeat.com'
  },
  {
    icon: FiPhone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: FiMapPin,
    title: 'Visit Us',
    value: '123 Innovation Street, Tech City, TC 12345',
    link: 'https://maps.google.com'
  },
  {
    icon: FiClock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    link: null
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate and sanitize form data
      const validation = validateContactForm(formData);
      
      if (!validation.isValid) {
        logSecurityEvent('FORM_VALIDATION_FAILED', {
          errors: validation.errors,
          formData: { ...formData, message: '[REDACTED]' }, // Don't log sensitive data
        });
        
        // Show validation errors
        const errorMessages = Object.values(validation.errors).join('\n');
        alert(`Please fix the following errors:\n${errorMessages}`);
        setIsSubmitting(false);
        return;
      }
      
      // Log successful form submission
      logSecurityEvent('CONTACT_FORM_SUBMITTED', {
        hasValidData: true,
        timestamp: new Date().toISOString(),
      });
      
      // Simulate form submission with sanitized data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Show success message
      alert('Thank you for your message! We\'ll get back to you soon.');
      
    } catch (error) {
      logSecurityEvent('FORM_SUBMISSION_ERROR', {
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      });
      
      setIsSubmitting(false);
      alert('An error occurred while submitting your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-dark-surface/10 to-transparent dark:from-transparent dark:via-dark-surface/5 dark:to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-lg">
              Get In
            </span>
            <span className="text-text dark:text-text-dark drop-shadow-lg font-extrabold"> Touch</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-text-secondary dark:text-text-secondary-dark max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Ready to start your next project? Let&apos;s discuss how we can help bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/5 dark:bg-dark-surface/20 backdrop-blur-sm border border-white/10 dark:border-dark-border/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-text dark:text-text-dark mb-6 drop-shadow-sm">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    variant="filled"
                    fullWidth
                    required
                  />
                  
                  <Input
                    label="Email Address *"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    variant="filled"
                    fullWidth
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text dark:text-text-dark mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 dark:bg-surface-dark/30 border border-white/20 dark:border-border-dark/20 rounded-lg text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-secondary/50 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="3d-visualization">3D Visualization</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Textarea
                  label="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  variant="filled"
                  fullWidth
                  required
                />

                              <Button
                type="submit"
                variant="gradient"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                loading={isSubmitting}
                icon={<FiSend className="w-5 h-5" />}
                className="font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text dark:text-text-dark mb-6 drop-shadow-sm">
                  Let's Start a Conversation
                </h3>
                <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed font-medium">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we&apos;re here to help. Reach out to us and let&apos;s discuss how we can bring your vision to life.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="group p-4 bg-white/5 dark:bg-dark-surface/20 backdrop-blur-sm border border-white/10 dark:border-dark-border/20 rounded-xl hover:border-dark-primary/30 dark:hover:border-light-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-dark-primary to-yellow-300 rounded-xl flex items-center justify-center text-dark-background group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-dark-text dark:text-light-text mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-dark-text-secondary dark:text-light-text-secondary hover:text-dark-primary dark:hover:text-light-primary transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-text-secondary dark:text-light-text-secondary">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="pt-6 border-t border-white/10 dark:border-dark-border/20"
              >
                <h4 className="text-lg font-semibold text-dark-text dark:text-light-text mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
                    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
                    { name: 'GitHub', href: 'https://github.com', icon: '📚' },
                    { name: 'Instagram', href: 'https://instagram.com', icon: '📷' }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 dark:bg-dark-surface/30 backdrop-blur-sm border border-white/20 dark:border-dark-border/20 rounded-xl flex items-center justify-center text-2xl hover:bg-dark-primary/20 dark:hover:bg-light-primary/20 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 