import React from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/BandMembers.css';
import dagoOrtizImage from '../assets/images/dago-ortiz.webp';
import walterSaborioImage from '../assets/images/walter-saborio.webp';
import aleGonzalezImage from '../assets/images/ale-gonzalez.webp';
import luisMongeImage from '../assets/images/luis-monge.webp';
import andresAriasImage from '../assets/images/andres-arias.webp';

const BandMembers = ({ initialAnimationComplete }) => {

  const members = [
    {
      id: 1,
      name: 'Dago Ortiz',
      role: 'Vocalista, guitarrista, bajista',
      image: dagoOrtizImage,
      instrument: 'Voz/Guitarra/Bajo'
    },
    {
      id: 2,
      name: 'Walter Saborío',
      role: 'Guitarrista, corista',
      image: walterSaborioImage,
      instrument: 'Guitarra'
    },
    {
      id: 3,
      name: 'Ale Gonzalez',
      role: 'Bajista, guitarra acústica',
      image: aleGonzalezImage,
      instrument: 'Bajo/Acústica'
    },
    {
      id: 4,
      name: 'Luis Monge',
      role: 'Teclado',
      image: luisMongeImage,
      instrument: 'Teclados'
    },
    {
      id: 5,
      name: 'Andrés Arias',
      role: 'Baterista',
      image: andresAriasImage,
      instrument: 'Batería'
    }
  ];

  return (
    <section id="members" className="band-members-section section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="section-header">
            <h2 className="section-title">Conoce a la banda</h2>
            <p className="section-subtitle">Los talentos detrás de cada nota</p>
          </div>
        </MotionAnimation>
        
        <div className="members-grid grid-5">
          {members.map((member, index) => (
            <MotionAnimation key={member.id} animation="scaleIn" delay={400 + (index * 100)} initialAnimationComplete={initialAnimationComplete}>
              <div className="member-card card">
                <div className="card-content">
                  <div className={`member-image ${member.id >= 4 ? 'image-top' : ''}`}>
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role} en LOUD4 Banda Rock Costa Rica`} 
                      title={`${member.name} - ${member.instrument}`}
                      loading="lazy"
                      decoding="async"
                      width="440"
                      height="497"
                    />
                    <div className="member-overlay">
                      <div className="instrument-badge">
                        <span className="instrument-text">{member.instrument}</span>
                      </div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="card-title">{member.name}</h3>
                    <p className="card-description">{member.role}</p>
                  </div>
                </div>
              </div>
            </MotionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
