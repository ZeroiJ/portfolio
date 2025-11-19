import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Journey from './components/Sections/Journey';
import Contact from './components/Sections/Contact';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="bg-retro-bg min-h-screen text-retro-text font-mono selection:bg-retro-primary selection:text-white">
      <AnimatePresence mode="wait">
        {!gameStarted ? (
          <motion.div
            key="hero"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onStart={() => setGameStarted(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Layout>
              <About />
              <Skills />
              <Journey />
              <Contact />
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
