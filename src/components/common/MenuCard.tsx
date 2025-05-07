import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MenuItem } from '../../types';

interface MenuCardProps {
  item: MenuItem;
  delay: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-serif font-bold text-gray-800">{item.name}</h3>
          <span className="text-amber-700 font-medium">{item.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <button className="text-amber-700 font-medium hover:text-amber-900 transition-colors duration-300 flex items-center">
          Add to Order <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;