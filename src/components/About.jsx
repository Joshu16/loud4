import React from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/About.css';

const About = ({ initialAnimationComplete }) => {
  return (
    <section id="about" className="band-section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <h2 className="section-title">Sobre la banda</h2>
        </MotionAnimation>
        <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
          <p className="band-description">
            Somos una banda apasionada por el rock clásico que ama hacer que tus eventos 
            sean únicos e inolvidables.
          </p>
        </MotionAnimation>
        <MotionAnimation animation="fadeInUp" delay={600} initialAnimationComplete={initialAnimationComplete}>
          <p className="band-description">
            Con años de experiencia tocando juntos, hemos 
            presentado nuestro repertorio en Country Clubs, Restaurantes, Bares, Fiestas 
            Privadas, Chinamo y Toros a la Tica.
          </p>
        </MotionAnimation>
        <MotionAnimation animation="fadeInUp" delay={800} initialAnimationComplete={initialAnimationComplete}>
          <button className="btn btn-primary btn-small" onClick={() => window.location.href = '#members'}>Conocé al equipo</button>
        </MotionAnimation>
      </div>
    </section>
  );
};

export default About;
