'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeParticleField = dynamic(() => import('./ThreeParticleField'), {
  ssr: false,
  loading: () => null,
});

export default function ScrollyCanvas() {
  const mouseXSpring = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(0, { stiffness: 120, damping: 20 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseXSpring.set(x * 10);
      mouseYSpring.set(-y * 10);
      setTilt({ x: y * -6, y: x * 6 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);

  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden">
      {/* Three.js Particles - reduced */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Suspense fallback={null}>
          <ThreeParticleField />
        </Suspense>
      </div>

      {/* Subtle gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00BFFF]/[0.02] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6A00]/[0.015] rounded-full blur-[160px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-24 lg:py-0">
          {/* Left: Text */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-[1px] bg-[#00BFFF]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#00BFFF] font-mono">
                  Software Engineering Student
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-[1.15] tracking-tight"
            >
              Pragya Dwivedi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[13px] text-[#00BFFF] font-mono tracking-wide"
            >
              B.Tech Computer Science Engineering
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[12px] text-[#555] font-mono"
            >
              CGPA: 8.75 / 10
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[12px] text-[#444] font-mono"
            >
              Java · Spring Boot · REST APIs · Backend Development
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-2.5 mt-3"
            >
              <a
                href="#projects"
                aria-label="View projects"
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#00BFFF] text-black text-[13px] font-semibold rounded-lg hover:bg-[#00d4ff] transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="/Pragya_Dwivedi_Resume.pdf"
                download="Pragya_Dwivedi_Resume.pdf"
                aria-label="Download resume as PDF"
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white text-[13px] font-medium rounded-lg hover:bg-white/5 hover:border-white/15 transition-all duration-200"
              >
                Resume
              </a>
              <a
                href="https://github.com/pragya638"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[#666] text-[13px] hover:text-white transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pragya-dwivedi-540776333/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[#666] text-[13px] hover:text-[#00BFFF] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="#contact"
                aria-label="Go to contact section"
                className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[#666] text-[13px] hover:text-[#FF6A00] transition-colors duration-200"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group" style={{ perspective: '1000px' }}>
              <motion.div
                style={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                  transformStyle: 'preserve-3d',
                }}
                className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#00BFFF]/10 via-transparent to-[#FF6A00]/10 blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

                {/* Photo */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/portrait.jpg"
                    alt="Pragya Dwivedi"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Status badge */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/[0.05]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/50 font-mono tracking-wide">
                      Open to internship opportunities
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-[#333] font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-5 bg-gradient-to-b from-[#00BFFF]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
