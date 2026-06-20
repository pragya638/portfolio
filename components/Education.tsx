'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  detail: string;
  color: string;
}

const educationData: EducationItem[] = [
  {
    year: '2023 — Present',
    title: 'B.Tech Computer Science Engineering',
    institution: 'Raj Kumar Goel Institute of Technology (RKGIT), Ghaziabad',
    detail: 'CGPA: 8.75 / 10',
    color: '#00BFFF',
  },
  {
    year: '2023',
    title: 'Class XII (ISC)',
    institution: "St. Joseph's Academy",
    detail: '89%',
    color: '#818CF8',
  },
  {
    year: '2021',
    title: 'Class X (ICSE)',
    institution: "St. Joseph's Academy",
    detail: '87%',
    color: '#34D399',
  },
];

export default function Education() {
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
      id="education"
      className="relative py-24 sm:py-32 bg-[#0B1220] px-6 md:px-12 lg:px-24 z-20"
    >
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#00BFFF]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#00BFFF] font-mono">
              Education
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Education
          </h2>
        </motion.div>

        <div className="relative max-w-3xl">
          <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-white/[0.06]" />

          <motion.div
            style={{ height: lineHeight, transformOrigin: 'top' }}
            className="absolute left-[11px] top-0 w-[1px]"
          >
            <div className="w-full h-full bg-gradient-to-b from-[#00BFFF] via-[#818CF8] to-[#34D399]/50" />
          </motion.div>

          <div className="space-y-10">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 flex-shrink-0 mt-0.5">
                  <div
                    className="w-[23px] h-[23px] rounded-full bg-[#0B1220] border-[1.5px] flex items-center justify-center"
                    style={{ borderColor: item.color }}
                  >
                    <div
                      className="w-[5px] h-[5px] rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="glass-card rounded-xl p-5 sm:p-6 hover:border-white/[0.12] transition-all duration-300">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider block mb-2"
                      style={{ color: `${item.color}cc` }}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-[16px] font-semibold text-white mb-1 font-display">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#94A3B8] mb-2">
                      {item.institution}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-mono font-semibold" style={{ color: item.color, backgroundColor: `${item.color}15` }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
