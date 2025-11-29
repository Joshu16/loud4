import React, { useState, useEffect, useRef } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/About.css';

const Counter = ({ end, label, initialAnimationComplete }) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  const animateCounter = () => {
    const duration = 2000; // 2 segundos total
    const fastDuration = 800; // Primera parte rápida (800ms)
    const slowDuration = duration - fastDuration; // Segunda parte lenta (1200ms)
    const slowStart = Math.max(0, end - 3); // Empezar a ir lento en los últimos 3 números
    
    const startTime = Date.now();
    let current = 0;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed < fastDuration) {
        // Fase rápida: subir rápido hasta los últimos 3 números
        const progress = elapsed / fastDuration;
        // Easing out para acelerar al principio
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        current = slowStart * easedProgress;
      } else {
        // Fase lenta: subir lentamente los últimos 3 números
        const slowProgress = Math.min((elapsed - fastDuration) / slowDuration, 1);
        // Easing in para desacelerar al final
        const easedSlowProgress = Math.pow(slowProgress, 2);
        current = slowStart + (end - slowStart) * easedSlowProgress;
      }
      
      if (current >= end || elapsed >= duration) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16); // ~60fps
  };

  useEffect(() => {
    if (!initialAnimationComplete) return;
    if (hasAnimatedRef.current) return; // Ya se animó, no hacer nada

    const currentCounterRef = counterRef.current;
    const currentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateCounter();
            // Desconectar el observer inmediatamente después de animar
            if (currentObserver && currentCounterRef) {
              currentObserver.unobserve(currentCounterRef);
              currentObserver.disconnect();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observerRef.current = currentObserver;

    if (currentCounterRef && currentObserver) {
      currentObserver.observe(currentCounterRef);
    }

    return () => {
      if (currentObserver && currentCounterRef) {
        currentObserver.unobserve(currentCounterRef);
        currentObserver.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialAnimationComplete, end]);

  return (
    <div ref={counterRef} className="counter-item">
      <div className="counter-number">+{count}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const About = ({ initialAnimationComplete }) => {
  return (
    <section id="about" className="band-section">
      <div className="container">
        <div className="about-content-wrapper">
          <div className="counters-grid">
            <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
            <Counter 
              end={18} 
              label="Años en tarimas" 
              initialAnimationComplete={initialAnimationComplete}
            />
          </MotionAnimation>
          <MotionAnimation animation="fadeInUp" delay={300} initialAnimationComplete={initialAnimationComplete}>
            <Counter 
              end={100} 
              label="Conciertos realizados" 
              initialAnimationComplete={initialAnimationComplete}
            />
          </MotionAnimation>
          <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
            <Counter 
              end={20} 
              label="Lugares cubiertos" 
              initialAnimationComplete={initialAnimationComplete}
            />
            </MotionAnimation>
          </div>
          <div className="loud4-vertical">
            <MotionAnimation animation="fadeInUp" delay={500} initialAnimationComplete={initialAnimationComplete}>
              <div className="loud4-letters">
                <span>L</span>
                <span>O</span>
                <span>U</span>
                <span>D</span>
                <span>4</span>
              </div>
            </MotionAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
