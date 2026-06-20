'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pragya638',
    color: '#ffffff',
    display: 'github.com/pragya638',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pragya-dwivedi-540776333/',
    color: '#00BFFF',
    display: 'linkedin.com/in/pragya-dwivedi',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:pragyadwivedi415@gmail.com',
    color: '#FF6A00',
    display: 'pragyadwivedi415@gmail.com',
    icon: <Mail size={18} />,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) newErrors.email = 'Invalid email format';
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSubmitError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ceba4984-0524-410f-a2f8-2659810f8c69',
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
      }
    } catch {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0B1220] px-6 md:px-12 lg:px-24 z-20"
    >
      <div className="section-divider mb-24" />

      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#00BFFF]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#00BFFF] font-mono">
              Contact
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Get In Touch
          </h2>
          <p className="text-[#64748B] text-[14px] mt-3 max-w-md leading-relaxed">
            Looking for backend development internships and software engineering opportunities.
            Feel free to connect via LinkedIn, GitHub, or email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={`${link.label} - ${link.display}`}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="cursor-pointer group relative flex items-center gap-4 p-5 rounded-xl border border-white/[0.06] bg-[#0F1729]/60 backdrop-blur-sm hover:bg-[#162035]/80 hover:border-white/[0.1] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-white">{link.label}</h3>
                  <p className="text-[11px] text-[#475569] font-mono truncate mt-0.5">
                    {link.display}
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto text-[#334155] group-hover:text-[#64748B] transition-colors duration-300 flex-shrink-0"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 sm:p-8 space-y-5">
              <input type="hidden" name="access_key" value="ceba4984-0524-410f-a2f8-2659810f8c69" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-[13px] text-white bg-[#0B1220] border border-white/[0.08] rounded-lg focus:border-[#00BFFF]/50 focus:outline-none transition-colors duration-200 placeholder:text-[#334155]"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-[10px] text-[#F87171] mt-1 font-mono">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-[13px] text-white bg-[#0B1220] border border-white/[0.08] rounded-lg focus:border-[#00BFFF]/50 focus:outline-none transition-colors duration-200 placeholder:text-[#334155]"
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="text-[10px] text-[#F87171] mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-[13px] text-white bg-[#0B1220] border border-white/[0.08] rounded-lg focus:border-[#00BFFF]/50 focus:outline-none transition-colors duration-200 placeholder:text-[#334155]"
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="text-[10px] text-[#F87171] mt-1 font-mono">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-[13px] text-white bg-[#0B1220] border border-white/[0.08] rounded-lg focus:border-[#00BFFF]/50 focus:outline-none transition-colors duration-200 placeholder:text-[#334155] resize-none"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-[10px] text-[#F87171] mt-1 font-mono">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-6 py-2.5 text-[12px] font-mono uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#00BFFF] to-[#818CF8] text-white font-semibold hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[12px] text-[#34D399] font-mono mt-3"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}

                {submitError && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[12px] text-[#F87171] font-mono mt-3"
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}

                <p className="text-[11px] text-[#475569] font-mono mt-3">
                  Available for internships, backend development opportunities and collaborations.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto w-full mt-20 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-[#334155] font-mono">
          &copy; 2026 Pragya Dwivedi
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className="cursor-pointer text-[#334155] hover:text-[#64748B] transition-colors duration-200"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
