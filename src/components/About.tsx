import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const featuredItems = [
    {
      title: "Seasonal Special",
      description: "Try our limited-time Pumpkin Spice Latte, made with organic pumpkin and our signature espresso blend.",
      cta: "Order Now"
    },
    {
      title: "Weekend Brunch",
      description: "Join us for our famous weekend brunch, featuring farm-fresh ingredients and house specialties.",
      cta: "View Menu"
    },
    {
      title: "Coffee Tasting Event",
      description: "Experience our guided coffee tasting events every Friday evening. Learn about origins and brewing methods.",
      cta: "Book a Spot"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveFeature((prev) => (prev + 1) % featuredItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { ref: sectionRef, inView: sectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageIds = ['302899', '958545', '324028'];

  const handleDotClick = (index: number) => {
    setDirection(index > activeFeature ? 1 : -1);
    setActiveFeature(index);
  };

  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Coffee beans background texture"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Additional texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvc3ZnPg==')] opacity-[3%]"></div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-50/30 to-transparent -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/30 to-transparent -z-10"></div>

      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10 transition-all duration-1000 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Image Slideshow */}
        <div className="relative h-[480px] md:h-[580px] rounded-[2rem] overflow-hidden group">
          <AnimatePresence custom={direction}>
            {featuredItems.map((item, index) => (
              index === activeFeature && (
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={`https://images.pexels.com/photos/${imageIds[index]}/pexels-photo-${imageIds[index]}.jpeg?auto=compress&cs=tinysrgb&w=1200`}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent"></div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          {/* Image frame effect */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-[2rem] pointer-events-none"></div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center relative">
          <AnimatePresence mode="wait" custom={direction}>
            {featuredItems.map((item, index) => (
              index === activeFeature && (
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="text-amber-600 font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
                    Featured
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 group-hover:from-amber-700 group-hover:to-amber-600 transition-all duration-300"></span>
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white py-3.5 px-8 rounded-full text-lg font-medium tracking-wide">
                      {item.cta}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Dot Navigation */}
          <div className="flex mt-12 space-x-2.5">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative w-12 h-1.5 rounded-full transition-all duration-300 ${
                  index === activeFeature
                    ? 'bg-amber-600'
                    : 'bg-gray-200 hover:bg-amber-300'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              >
                {index === activeFeature && (
                  <motion.span 
                    layoutId="activeDot"
                    className="absolute inset-0 bg-amber-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;