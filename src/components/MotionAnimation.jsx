import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MotionAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.8,
  initialAnimationComplete = true,
  aggressive = false,
  hero = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!initialAnimationComplete) {
      return;
    }

    const checkVisibility = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcular cuándo mostrar el elemento
      let triggerPoint;
      const isMobile = window.innerWidth <= 768;
      
      if (hero) {
        triggerPoint = windowHeight * 0.9; // 90% de la pantalla
      } else if (aggressive) {
        triggerPoint = windowHeight * 1.5; // 150% de la pantalla
      } else {
        // Trigger más agresivo para móviles
        triggerPoint = isMobile ? windowHeight * 1.5 : windowHeight * 1.2; // 150% en móvil, 120% en desktop
      }

      // Si el elemento está cerca de entrar en pantalla
      if (rect.top <= triggerPoint) {
        setIsVisible(true);
      }
    };

    // Verificar inmediatamente
    checkVisibility();

    // Agregar listener de scroll
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [initialAnimationComplete, hero, aggressive]);

  // Solo mostrar animaciones si la animación inicial ya terminó
  if (!initialAnimationComplete) {
    return <div ref={elementRef}>{children}</div>;
  }

  // Definir las variantes de animación más suaves y lujosas
  const variants = {
    fadeInUp: {
      hidden: { 
        opacity: 0, 
        y: 60,
        transition: { duration: 0 }
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: duration,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeInDown: {
      hidden: { 
        opacity: 0, 
        y: -60,
        transition: { duration: 0 }
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: duration,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeInLeft: {
      hidden: { 
        opacity: 0, 
        x: -60,
        transition: { duration: 0 }
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: duration,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeInRight: {
      hidden: { 
        opacity: 0, 
        x: 60,
        transition: { duration: 0 }
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: duration,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    scaleIn: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        transition: { duration: 0 }
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: duration,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    },
    fadeIn: {
      hidden: { 
        opacity: 0,
        transition: { duration: 0 }
      },
      visible: { 
        opacity: 1,
        transition: { 
          duration: duration,
          delay: delay / 1000,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    }
  };

  // Optimizar para móviles
  const isMobile = window.innerWidth <= 768;
  const optimizedVariants = {};
  
  Object.keys(variants).forEach(key => {
    optimizedVariants[key] = {
      ...variants[key],
      visible: {
        ...variants[key].visible,
        transition: {
          ...variants[key].visible.transition,
          duration: isMobile ? Math.max(duration * 0.6, 0.3) : duration, // 60% más rápido en móvil
          delay: isMobile ? Math.max(delay / 1000 * 0.5, 0) : delay / 1000 // 50% menos delay en móvil
        }
      }
    };
  });

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={optimizedVariants[animation]}
    >
      {children}
    </motion.div>
  );
};

export default MotionAnimation;
