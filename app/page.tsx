import dynamic from 'next/dynamic';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Journey from '@/components/Timeline';
import Contact from '@/components/Contact';

const ScrollyCanvas = dynamic(() => import('@/components/ScrollyCanvas'), {
  ssr: false,
});

const Navigation = dynamic(() => import('@/components/Navigation'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full bg-[#0A0A0A] overflow-x-hidden min-h-screen">
      <Navigation />
      <div className="noise-overlay" />

      <ScrollyCanvas />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}
