import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Journey from './components/Sections/Journey';
import Contact from './components/Sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-neo-bg min-h-screen text-neo-text font-sans selection:bg-neo-primary selection:text-white">
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
