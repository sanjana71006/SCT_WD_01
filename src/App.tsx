import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;