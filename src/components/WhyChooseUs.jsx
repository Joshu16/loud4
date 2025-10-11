import React from 'react';
import { SoundIcon, MusicIcon, TimeIcon, FlexIcon } from './Icons';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
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
        <div className="section-header">
          <h2 className="section-title">Por qué elegirnos</h2>
          <p className="section-subtitle">La diferencia que marca la experiencia</p>
        </div>
        
        <div className="features-grid grid-4">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card card">
              <div className="feature-icon">
                <feature.icon size={32} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
