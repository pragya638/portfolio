'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Backend',
    color: '#00BFFF',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Hibernate', 'JPA'],
  },
  {
    title: 'Databases',
    color: '#FF6A00',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    color: '#888',
    skills: ['Git', 'GitHub', 'Maven', 'Docker', 'Postman', 'Swagger/OpenAPI'],
  },
  {
    title: 'AI',
    color: '#FF6A00',
    skills: ['Google Gemini API', 'Spring AI', 'Ollama'],
  },
  {
    title: 'Core CS',
    color: '#00BFFF',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] px-6 md:px-12 lg:px-24 z-20"
    >
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
              Skills
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIdx * 0.06 }}
              className="group relative p-5 rounded-xl border border-white/[0.04] bg-[#0F0F0F] hover:bg-[#121212] hover:border-white/[0.07] transition-all duration-300"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 180px at 50% 0%, ${category.color}05 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-[11px] font-semibold uppercase tracking-wider text-white/50 font-mono">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[12px] font-mono rounded-md border border-white/[0.04] text-white/60 bg-white/[0.015] transition-all duration-200 hover:border-white/[0.08] hover:text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
