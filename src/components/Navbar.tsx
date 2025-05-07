import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ['Home', 'Menu', 'Reservations',https://e-commerce-sigma-beige-91.vercel.app/ 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-md bg-white/80 shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-serif font-bold tracking-tight ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <span className="text-amber-500">Artisan</span> Brew
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative px-1 font-medium tracking-wide text-sm uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white/90 hover:text-white'
              } before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-amber-500 hover:before:w-full hover:before:opacity-100`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-lg bg-white/90"
          >
            <div className="px-6 py-4 shadow-lg">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-800 hover:text-amber-600 font-medium tracking-wide text-sm uppercase border-b border-gray-100 last:border-0 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;