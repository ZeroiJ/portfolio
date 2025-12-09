import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Journey from './components/Sections/Journey';
import Contact from './components/Sections/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewDesignMockup from './components/Mockup/NewDesignMockup';

function Home() {
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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockup" element={<NewDesignMockup />} />
      </Routes>
    </Router>
  );
}

export default App;
