'use client';

import React, { useRef } from 'react';
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
    href: 'mailto:pragya.dwivedi.dev@gmail.com',
    color: '#FF6A00',
    display: 'pragya.dwivedi.dev@gmail.com',
    icon: <Mail size={18} />,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] px-6 md:px-12 lg:px-24 z-20"
    >
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
          <p className="text-[#555] text-[14px] mt-3 max-w-md leading-relaxed">
            Looking for backend development internships and software engineering opportunities.
            Feel free to connect via LinkedIn, GitHub, or email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              className="cursor-pointer group relative flex items-center gap-4 p-5 rounded-xl border border-white/[0.04] bg-[#0F0F0F] hover:bg-[#121212] hover:border-white/[0.07] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                style={{ color: link.color }}
              >
                {link.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-[13px] font-semibold text-white">{link.label}</h3>
                <p className="text-[11px] text-[#444] font-mono truncate mt-0.5">
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
                className="ml-auto text-[#333] group-hover:text-[#666] transition-colors duration-300 flex-shrink-0"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto w-full mt-20 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-[#333] font-mono">
          © 2026 Pragya Dwivedi
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              className="cursor-pointer text-[#333] hover:text-[#666] transition-colors duration-200"
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
