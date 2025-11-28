import React, { useState, useEffect, useRef } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/About.css';

const Counter = ({ end, label, delay, initialAnimationComplete }) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const counterRef = useRef(null);
  const observerRef = useRef(null);

  const animateCounter = () => {
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
  };

  useEffect(() => {
    if (!initialAnimationComplete) return;
    if (hasAnimatedRef.current) return; // Ya se animó, no hacer nada

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateCounter();
            // Desconectar el observer inmediatamente después de animar
            if (observerRef.current && counterRef.current) {
              observerRef.current.unobserve(counterRef.current);
              observerRef.current.disconnect();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current && observerRef.current) {
      observerRef.current.observe(counterRef.current);
    }

    return () => {
      if (observerRef.current && counterRef.current) {
        observerRef.current.unobserve(counterRef.current);
        observerRef.current.disconnect();
      }
    };
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
        <div className="counters-grid">
          <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
            <Counter 
              end={18} 
              label="Años en tarimas" 
              delay={200}
              initialAnimationComplete={initialAnimationComplete}
            />
          </MotionAnimation>
          <MotionAnimation animation="fadeInUp" delay={300} initialAnimationComplete={initialAnimationComplete}>
            <Counter 
              end={100} 
              label="Conciertos realizados" 
              delay={300}
              initialAnimationComplete={initialAnimationComplete}
            />
          </MotionAnimation>
          <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
            <Counter 
              end={20} 
              label="Lugares cubiertos" 
              delay={400}
              initialAnimationComplete={initialAnimationComplete}
            />
          </MotionAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
