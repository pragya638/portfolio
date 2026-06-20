'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const end = target;
    const duration = 1600;
    const increment = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const techStack = [
  { name: 'Java', color: '#FF6A00' },
  { name: 'Spring Boot', color: '#00BFFF' },
  { name: 'REST APIs', color: '#00BFFF' },
  { name: 'JPA', color: '#FF6A00' },
  { name: 'Hibernate', color: '#FF6A00' },
  { name: 'MySQL', color: '#00BFFF' },
  { name: 'DSA', color: '#818CF8' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#0B1220] px-6 md:px-12 lg:px-24 z-20"
    >
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#00BFFF]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#00BFFF] font-mono">
              About Me
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-12 flex flex-col"
          >
            <div className="mb-1">
              <h3 className="text-lg font-semibold text-white font-display">
                Backend Developer & CS Undergraduate
              </h3>
              <p className="text-[11px] text-[#475569] font-mono mt-1">
                Ghaziabad, Uttar Pradesh
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-[#94A3B8] text-[14px] leading-relaxed">
                I&apos;m a backend-focused developer who enjoys solving real problems through code.
                I care about building systems that are reliable, well-structured, and easy to maintain.
              </p>
              <p className="text-[#64748B] text-[14px] leading-relaxed">
                My core stack is Java and Spring Boot. I work with REST APIs,
                JPA/Hibernate, MySQL, and PostgreSQL on a regular basis. I&apos;ve also worked with
                Spring Security, JWT authentication, Docker, and Swagger/OpenAPI for production-ready systems.
              </p>
              <p className="text-[#64748B] text-[14px] leading-relaxed">
                Beyond projects, I stay grounded in fundamentals — Data Structures &amp; Algorithms,
                DBMS, Operating Systems, and Computer Networks. I believe strong CS fundamentals
                make the difference between writing code and engineering software.
              </p>
              <p className="text-[#475569] text-[14px] leading-relaxed">
                Currently looking for backend development internships where I can contribute to
                meaningful projects and grow as an engineer.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-6">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="cursor-default px-2.5 py-1 text-[11px] font-mono rounded-md border border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:border-white/[0.12]"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/[0.06]">
              <div>
                <AnimatedCounter target={200} suffix="+" />
                <p className="text-[11px] text-[#475569] font-mono mt-1">
                  DSA Problems Solved
                </p>
              </div>
              <div>
                <AnimatedCounter target={4} suffix="+" />
                <p className="text-[11px] text-[#475569] font-mono mt-1">
                  Technical Projects
                </p>
              </div>
              <div>
                <AnimatedCounter target={7} suffix="+" />
                <p className="text-[11px] text-[#475569] font-mono mt-1">
                  Technologies Used
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
