import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref: titleRef, inView: titleVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: subtitleRef, inView: subtitleVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  });

  const { ref: buttonsRef, inView: buttonsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 600,
  });

  const { ref: featuresRef, inView: featuresVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 900,
  });

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium Café Experience"
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl ml-0 md:ml-16">
          <div className="mb-10" ref={titleRef}>
            <div className={`w-24 h-0.5 bg-amber-500 mb-8 transition-all duration-700 ${titleVisible ? 'opacity-100' : 'opacity-0 -translate-x-8'}`}></div>
            <h2 className={`text-amber-500 text-sm uppercase font-medium tracking-[0.2em] mb-4 transition-all duration-700 ${titleVisible ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
              Established 2023
            </h2>
          </div>

          <h1 className={`text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-none transition-all duration-700 delay-100 ${titleVisible ? 'opacity-100' : 'opacity-0 -translate-y-8'}`}>
            Artisan<br/>Brew
          </h1>

          <p 
            ref={subtitleRef}
            className={`text-base md:text-lg text-gray-200 mb-12 leading-relaxed max-w-xl font-light transition-all duration-700 ${subtitleVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            Immerse yourself in the art of exceptional coffee, where traditional craftsmanship meets modern sophistication. Every cup tells a story of passion and precision.
          </p>

          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-8 transition-all duration-700 ${buttonsVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <button className="btn-primary group text-sm uppercase tracking-wider font-medium">
              Reserve Your Experience
              <i className="fas fa-arrow-right ml-3 transition-transform duration-300 transform group-hover:translate-x-1"></i>
            </button>
            <button className="btn-secondary text-sm uppercase tracking-wider font-medium">
              View Our Selection
            </button>
          </div>

          <div 
            ref={featuresRef}
            className={`mt-16 flex items-center space-x-8 transition-all duration-700 delay-300 ${featuresVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center">
              <i className="fas fa-award feature-icon"></i>
              <span className="text-white">Award Winning Coffee</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-leaf feature-icon"></i>
              <span className="text-white">Organic Ingredients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-white/80 hover:text-amber-400 transition-colors duration-300 text-lg"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center text-white/80 uppercase tracking-wider text-xs font-medium">
              <span className="mr-6">Discover More</span>
              <i className="fas fa-chevron-down animate-bounce text-amber-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;