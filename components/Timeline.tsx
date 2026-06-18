'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  color: string;
}

const journeyData: JourneyItem[] = [
  {
    year: '2023 — Present',
    title: 'B.Tech Computer Science Engineering',
    description:
      'Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad. Building strong foundations in CS fundamentals, software engineering, and system design.',
    color: '#00BFFF',
  },
  {
    year: '2024',
    title: 'Data Structures & Algorithms',
      description:
        'Focused on problem solving and core CS fundamentals. Practiced DSA problems across platforms covering arrays, linked lists, trees, and sorting algorithms.',
    color: '#FF6A00',
  },
  {
    year: '2025',
    title: 'Java Backend Development',
    description:
      'Deep dive into Spring Boot, REST APIs, JPA, Hibernate, and MySQL. Built multiple backend projects including an AI email system and fitness tracker API.',
    color: '#00BFFF',
  },
  {
    year: '2026 — Present',
    title: 'Software Engineering Intern',
    description:
      'YugaYatra Retail OPC Pvt. Ltd. Working on real-world backend systems, API development, and gaining industry experience in software engineering.',
    color: '#FF6A00',
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 50%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] px-6 md:px-12 lg:px-24 z-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#FF6A00]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#FF6A00] font-mono">
              Journey
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            My Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Timeline */}
          <div className="relative max-w-2xl lg:col-span-7">
            {/* Track */}
            <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-white/[0.04]" />

            {/* Growing line */}
            <motion.div
              style={{ height: lineHeight, transformOrigin: 'top' }}
              className="absolute left-[11px] top-0 w-[1px]"
            >
              <div className="w-full h-full bg-gradient-to-b from-[#00BFFF] via-[#FF6A00] to-[#FF6A00]/50" />
            </motion.div>

            <div className="space-y-10">
              {journeyData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative flex gap-5"
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0 mt-0.5">
                    <div className="w-[23px] h-[23px] rounded-full bg-[#0A0A0A] border-[1.5px] flex items-center justify-center" style={{ borderColor: item.color }}>
                      <div className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: item.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: `${item.color}aa` }}>
                      {item.year}
                    </span>
                    <h3 className="text-[15px] font-semibold text-white mb-1 font-display">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 rounded-xl border border-white/[0.04] bg-[#0F0F0F] p-6 sm:p-8">
              <h3 className="text-[13px] font-mono uppercase tracking-wider text-[#00BFFF] mb-5">
                Quick Facts
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white font-medium">Pragya Dwivedi</p>
                    <p className="text-[12px] text-[#555] font-mono mt-0.5">B.Tech CSE Student</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white font-medium">RKGIT, Ghaziabad</p>
                    <p className="text-[12px] text-[#555] font-mono mt-0.5">CGPA: 8.75 / 10</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white font-medium">Software Engineering Intern</p>
                    <p className="text-[12px] text-[#555] font-mono mt-0.5">YugaYatra Retail OPC Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white font-medium">Core Stack</p>
                    <p className="text-[12px] text-[#555] font-mono mt-0.5">Java, Spring Boot, REST APIs, MySQL</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] text-white font-medium">Problem Solving</p>
                    <p className="text-[12px] text-[#555] font-mono mt-0.5">200+ DSA problems solved</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
