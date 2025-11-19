import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Journey from './components/Sections/Journey';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Contact />
    </Layout>
  );
}

export default App;
