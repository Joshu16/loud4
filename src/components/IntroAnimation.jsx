import React, { useState, useEffect } from 'react';
import '../styles/IntroAnimation.css';

const IntroAnimation = ({ onAnimationComplete }) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Mostrar el primer texto después de un pequeño delay
    const timer1 = setTimeout(() => {
      setShowFirstText(true);
    }, 300);

    // Mostrar el segundo texto después del primero
    const timer2 = setTimeout(() => {
      setShowSecondText(true);
    }, 1500);

    // Iniciar fade out
    const timer3 = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Completar la animación y mostrar el contenido principal
    const timer4 = setTimeout(() => {
      setAnimationComplete(true);
      onAnimationComplete();
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onAnimationComplete]);

  if (animationComplete) {
    return null;
  }

  return (
    <div className={`intro-animation ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className={`intro-text first-text ${showFirstText ? 'show' : ''}`}>
          No hay noche de <strong>rock</strong>
        </div>
        <div className={`intro-text second-text ${showSecondText ? 'show' : ''}`}>
          Sin <strong>Loud4</strong>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
