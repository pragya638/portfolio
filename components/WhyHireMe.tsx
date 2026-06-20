'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface HireReason {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const reasons: HireReason[] = [
  {
    title: 'Backend Development',
    description: 'Building robust REST APIs using Java, Spring Boot, JPA and Hibernate with production-ready architecture.',
    color: '#00BFFF',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M6 8h.01" />
        <path d="M10 8h.01" />
        <path d="M14 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Problem Solving',
    description: '200+ DSA problems solved with strong CS fundamentals across arrays, trees, graphs and dynamic programming.',
    color: '#818CF8',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Production Ready',
    description: 'Experience with Git, Docker, Swagger, PostgreSQL and end-to-end deployment workflows for real-world applications.',
    color: '#34D399',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Fast Learner',
    description: 'Quickly adapt to new technologies including AI tools, Spring AI and Gemini API integration for modern solutions.',
    color: '#FF6A00',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function WhyHireMe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="whyhireme"
      className="relative py-24 sm:py-32 bg-[#0B1220] px-6 md:px-12 lg:px-24 z-20"
    >
      <div className="section-divider mb-24" />

      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#FF6A00]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#FF6A00] font-mono">
              Why Hire Me
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Why Hire Me?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative glass-card rounded-xl p-6 sm:p-7 hover:border-white/[0.12] transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 200px at 50% 0%, ${reason.color}08 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${reason.color}12`, color: reason.color }}
                >
                  {reason.icon}
                </div>

                <h3 className="text-[16px] font-semibold text-white mb-2 font-display">
                  {reason.title}
                </h3>

                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
