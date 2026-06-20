'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const certificates: Certificate[] = [
  {
    title: 'Build AI Apps with Spring AI, OpenAI, Ollama & Spring Boot',
    issuer: 'Udemy',
    year: '2025',
    link: 'https://www.udemy.com/certificate/UC-4c9c3090-009f-4555-8bfd-25073ad04392/',
    color: '#818CF8',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2v2a4 4 0 0 0 8 0v-2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Java Backend Development Bootcamp',
    issuer: 'GeeksforGeeks',
    year: '2025',
    link: 'https://media.geeksforgeeks.org/courses/certificates/18577037615068926cd5230d74cb712f.pdf',
    color: '#34D399',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
    title: 'Web Development',
    issuer: 'Internshala',
    year: '2024',
    link: 'https://trainings.internshala.com/view_certificate/8091qqn2pqv/dva5wg8zoap/',
    color: '#FF6A00',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="certifications"
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
              Certifications
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative glass-card rounded-xl p-5 sm:p-6 hover:border-white/[0.12] transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 180px at 50% 0%, ${cert.color}08 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-mono text-[#475569]">{cert.year}</span>
                </div>

                <h3 className="text-[14px] font-semibold text-white mb-2 font-display leading-snug">
                  {cert.title}
                </h3>

                <p className="text-[12px] text-[#64748B] font-mono mb-5">
                  {cert.issuer}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${cert.title}`}
                  className="inline-flex items-center gap-2 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-white/[0.08] text-white/60 hover:text-white hover:border-white/[0.15] transition-all duration-200"
                  style={{ color: cert.color }}
                >
                  View Certificate
                  <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
