import dynamic from 'next/dynamic';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import WhyHireMe from '@/components/WhyHireMe';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

const ScrollyCanvas = dynamic(() => import('@/components/ScrollyCanvas'), {
  ssr: false,
});

const Navigation = dynamic(() => import('@/components/Navigation'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full bg-[#0B1220] overflow-x-hidden min-h-screen">
      <Navigation />
      <div className="noise-overlay" />

      <ScrollyCanvas />
      <About />
      <Skills />
      <Projects />
      <Education />
      <WhyHireMe />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
}
