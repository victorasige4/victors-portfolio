'use client';
import VictorsPortfolio from "./Components/VictorsPortfolio";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

function useGsapScrolling() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5, // Adjust smoothness (higher = slower)
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });
    }
  }, []);
}

export default function Home() {
  useGsapScrolling();
  return (
    <div id="smooth-wrapper" className="min-h-screen">
      <div id="smooth-content" className="min-h-screen">
        <VictorsPortfolio />
        <div className="h-screen">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
