import React from 'react';

// Komponen wrapper generik untuk setiap item dalam grid.
// Ini mengisolasi gaya umum seperti border-radius, shadow, dan transisi.
const GridItem = ({ children, className, as: Component = 'div', ...props }) => {
  const baseClasses = "relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl";

  return (
    <Component className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default GridItem;