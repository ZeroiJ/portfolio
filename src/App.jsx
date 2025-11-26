import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Journey from './components/Sections/Journey';
import Contact from './components/Sections/Contact';

function App() {
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
