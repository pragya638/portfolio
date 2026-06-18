'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if it's a touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Move dot instantly
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    // Smooth lerp trailing for outer ring
    const updatePosition = () => {
      const ease = 0.12; // Lower = more delay/smoothing
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animId = requestAnimationFrame(updatePosition);

    // Dynamic hover scaling on interactive targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');

      if (isInteractive) {
        cursor.style.width = '46px';
        cursor.style.height = '46px';
        cursor.style.borderColor = '#FF6A00';
        cursor.style.backgroundColor = 'rgba(255, 106, 0, 0.05)';
      } else {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderColor = '#00BFFF';
        cursor.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-5 h-5 border border-[#00BFFF] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-300 mix-blend-difference hidden md:block" 
      />
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1 h-1 bg-[#FF6A00] rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 hidden md:block" 
      />
    </>
  );
}
