import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <i key={i} className="fas fa-star text-amber-500 mr-1"></i>
        ))}
      </div>
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialCard;