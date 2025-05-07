import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import { menuItems } from '../data/menuItems';
import MenuCard from './common/MenuCard';

const Menu: React.FC = () => {
  const { ref: titleRef, inView: titleVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardsRef, inView: cardsVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: buttonVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionTitle title="Our Signature Menu" alignment="center" />
          <p className="section-subtitle">
            Discover our most beloved creations, crafted with premium ingredients and served with passion.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
            cardsVisible ? 'opacity-100' : 'opacity-0 translate-y-12'
          }`}
        >
          {menuItems.map((item, index) => (
            <MenuCard 
              key={index}
              item={item}
              delay={index * 100}
            />
          ))}
        </div>

        <div 
          ref={buttonRef}
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            buttonVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="btn-primary">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;