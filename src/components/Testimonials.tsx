import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import { testimonials } from '../data/testimonials';
import TestimonialCard from './common/TestimonialCard';

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionTitle title="What Our Customers Say" alignment="center" />
          <p className="section-subtitle">
            The experiences of our valued guests mean everything to us.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
            cardsVisible ? 'opacity-100' : 'opacity-0 translate-y-12'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
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
          <button className="px-8 py-3 border-2 border-amber-700 text-amber-700 font-medium rounded-full hover:bg-amber-700 hover:text-white transition-colors duration-300">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;