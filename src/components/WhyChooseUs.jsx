import React from 'react';
import { SoundIcon, MusicIcon, TimeIcon, FlexIcon } from './Icons';
import MotionAnimation from './MotionAnimation';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = ({ initialAnimationComplete }) => {
  const features = [
    {
      id: 1,
      icon: SoundIcon,
      title: 'Sonido profesional',
      description: 'Equipamiento de alta calidad para una experiencia auditiva excepcional'
    },
    {
      id: 2,
      icon: MusicIcon,
      title: 'Repertorio variado',
      description: 'Desde clásicos del rock hasta hits modernos, adaptamos nuestro set a tu evento'
    },
    {
      id: 3,
      icon: TimeIcon,
      title: 'Puntualidad garantizada',
      description: 'Llegamos siempre a tiempo y listos para dar el mejor show'
    },
    {
      id: 4,
      icon: FlexIcon,
      title: 'Adaptabilidad total',
      description: 'Nos ajustamos a cualquier espacio y tipo de evento con profesionalismo'
    }
  ];

  return (
    <section className="why-choose-us-section section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="section-header">
            <h2 className="section-title">Por qué elegirnos</h2>
            <p className="section-subtitle">La diferencia que marca la experiencia</p>
          </div>
        </MotionAnimation>
        
        <div className="features-grid grid-4">
          {features.map((feature, index) => (
            <MotionAnimation key={feature.id} animation="scaleIn" delay={400 + (index * 150)} initialAnimationComplete={initialAnimationComplete}>
              <div className="feature-card card">
                <div className="card-content">
                  <div className="feature-icon">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </div>
              </div>
            </MotionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
