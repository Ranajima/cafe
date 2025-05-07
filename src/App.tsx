import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;