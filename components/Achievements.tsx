'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Achievement {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const achievements: Achievement[] = [
  {
    title: '200+ DSA Problems',
    subtitle: 'Solved across LeetCode, GFG and HackerRank',
    color: '#00BFFF',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    title: 'CGPA 8.75 / 10',
    subtitle: 'B.Tech CSE at RKGIT, Ghaziabad',
    color: '#818CF8',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: 'Software Engineering Intern',
    subtitle: 'YugaYatra Retail OPC Pvt. Ltd.',
    color: '#34D399',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Multiple Full Stack Projects',
    subtitle: 'End-to-end applications with Spring Boot, React and databases',
    color: '#FF6A00',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="achievements"
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
            <div className="w-6 h-[1px] bg-[#34D399]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#34D399] font-mono">
              Achievements
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative glass-card rounded-xl p-6 sm:p-7 hover:border-white/[0.12] transition-all duration-300 flex items-start gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}12`, color: item.color }}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-white font-display">
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#64748B] font-mono mt-1">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
