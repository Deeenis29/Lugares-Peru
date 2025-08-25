import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const classes = `
    bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700
    ${hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''}
    ${paddingClasses[padding]}
    ${className}
  `;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;