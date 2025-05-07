import React from 'react';

interface SectionTitleProps {
  title: string;
  alignment: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, alignment }) => {
  return (
    <div className={`mb-6 ${alignment === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6 relative inline-block">
        {title}
        <span className={`absolute -bottom-3 ${
          alignment === 'center' ? 'left-1/2 transform -translate-x-1/2' : 'left-0'
        } w-20 h-1 bg-amber-700`}></span>
      </h2>
    </div>
  );
};

export default SectionTitle;