'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  github: string;
  live?: string;
  gradient: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Email Reply Generator',
    description:
      'A full-stack AI-powered email reply generation system that creates context-aware email responses through REST APIs and prompt engineering techniques.',
    features: [
      'Context-aware AI email generation',
      'REST API architecture',
      'Prompt engineering with Gemini',
      'Full-stack React + Spring Boot',
    ],
    tags: ['Spring Boot', 'React', 'Gemini API', 'REST API', 'MySQL'],
    github: 'https://github.com/pragya638',
    gradient: 'from-[#00BFFF]/10 to-[#818CF8]/[0.02]',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#00BFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    title: 'Secure Fitness Tracker Backend API',
    description:
      'Production-grade backend system with JWT authentication, PostgreSQL integration, Docker containerization, and comprehensive API documentation using Swagger/OpenAPI.',
    features: [
      'JWT authentication & authorization',
      'PostgreSQL with JPA/Hibernate',
      'Docker containerization',
      'Swagger/OpenAPI documentation',
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker', 'Swagger'],
    github: 'https://github.com/pragya638',
    gradient: 'from-[#FF6A00]/10 to-[#F472B6]/[0.02]',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" stroke="#FF6A00" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-white/[0.06] bg-[#0F1729]/60 backdrop-blur-sm hover:bg-[#162035]/80 hover:border-white/[0.1] transition-all duration-300 overflow-hidden"
    >
      <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.gradient} border-b border-white/[0.06] overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-xl border border-white/[0.08] bg-[#0B1220]/60 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            {project.icon}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-transparent to-transparent" />
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-3 font-display group-hover:text-[#00BFFF] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-[14px] text-[#64748B] leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="mb-5">
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#475569] mb-2">Key Features</p>
          <ul className="space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[12px] text-[#94A3B8]">
                <div className="w-1 h-1 rounded-full bg-[#00BFFF] flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded border border-white/[0.06] text-[#64748B] bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} - Source code on GitHub`}
            className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-[#94A3B8] hover:text-white border border-white/[0.08] hover:border-white/[0.15] rounded-lg transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} - Live Demo`}
              className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-[#94A3B8] hover:text-white border border-white/[0.08] hover:border-white/[0.15] rounded-lg transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
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
            <div className="w-6 h-[1px] bg-[#00BFFF]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#00BFFF] font-mono">
              Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
