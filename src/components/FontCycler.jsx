import React, { useState, useEffect } from 'react';

const FontCycler = ({ children, duration = 3000, interval = 180, delay = 500 }) => {
  const [currentFont, setCurrentFont] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fuentes rockeras originales (incluyendo halloweenescas que le dan toque)
  const rockFonts = [
    { name: 'Metal Mania', fontFamily: '"Metal Mania", cursive' },
    { name: 'Rock Salt', fontFamily: '"Rock Salt", cursive' },
    { name: 'Creepster', fontFamily: '"Creepster", cursive' },
    { name: 'Nosifer', fontFamily: '"Nosifer", cursive' },
    { name: 'Butcherman', fontFamily: '"Butcherman", cursive' },
    { name: 'Fascinate Inline', fontFamily: '"Fascinate Inline", cursive' },
    { name: 'Griffy', fontFamily: '"Griffy", cursive' },
    { name: 'Creepster Caps', fontFamily: '"Creepster", cursive' },
    { name: 'Metal Mania', fontFamily: '"Metal Mania", cursive' },
    { name: 'Rock Salt', fontFamily: '"Rock Salt", cursive' },
    { name: 'Nosifer', fontFamily: '"Nosifer", cursive' },
    { name: 'Butcherman', fontFamily: '"Butcherman", cursive' },
    { name: 'Fascinate Inline', fontFamily: '"Fascinate Inline", cursive' },
    { name: 'Griffy', fontFamily: '"Griffy", cursive' },
    { name: 'Metal Mania', fontFamily: '"Metal Mania", cursive' },
    { name: 'Rock Salt', fontFamily: '"Rock Salt", cursive' },
    { name: 'Nosifer', fontFamily: '"Nosifer", cursive' },
    { name: 'Butcherman', fontFamily: '"Butcherman", cursive' },
    { name: 'Fascinate Inline', fontFamily: '"Fascinate Inline", cursive' },
    { name: 'Griffy', fontFamily: '"Griffy", cursive' }
  ];

  useEffect(() => {
    // Delay reducido antes de empezar la animación
    const startTimeout = setTimeout(() => {
      setIsAnimating(true);
      
      const cycleInterval = setInterval(() => {
        setCurrentFont((prev) => (prev + 1) % rockFonts.length);
      }, interval);

      // Detener la animación después de la duración especificada
      const stopTimeout = setTimeout(() => {
        clearInterval(cycleInterval);
        setIsAnimating(false);
        // Mantener la última fuente
        setCurrentFont(rockFonts.length - 1);
      }, duration);

      return () => {
        clearInterval(cycleInterval);
        clearTimeout(stopTimeout);
      };
    }, delay);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [duration, interval, delay]);

  const currentFontStyle = rockFonts[currentFont];

  return (
    <span
      style={{
        fontFamily: currentFontStyle.fontFamily,
        transition: 'all 0.1s ease-in-out',
        display: 'inline-block',
        transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
        textShadow: isAnimating 
          ? '2px 2px 4px rgba(220, 38, 38, 0.5), 0 0 10px rgba(220, 38, 38, 0.3)' 
          : 'none',
        color: isAnimating ? '#dc2626' : 'inherit'
      }}
    >
      {children}
    </span>
  );
};

export default FontCycler;