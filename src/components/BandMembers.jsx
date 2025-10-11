import React from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/BandMembers.css';

const BandMembers = ({ initialAnimationComplete }) => {

  const members = [
    {
      id: 1,
      name: 'Dagoberto Ortiz',
      role: 'Vocalista, guitarrista, bajista',
      image: '/api/placeholder/300/400',
      instrument: 'Voz/Guitarra/Bajo'
    },
    {
      id: 2,
      name: 'Walter Saborío',
      role: 'Guitarrista, corista',
      image: '/api/placeholder/300/400',
      instrument: 'Guitarra'
    },
    {
      id: 3,
      name: 'Ale Gonzalez',
      role: 'Bajista, guitarra acústica',
      image: '/api/placeholder/300/400',
      instrument: 'Bajo/Acústica'
    },
    {
      id: 4,
      name: 'Luis Monge',
      role: 'Teclado',
      image: '/api/placeholder/300/400',
      instrument: 'Teclados'
    },
    {
      id: 5,
      name: 'Andrés Arias',
      role: 'Baterista',
      image: '/api/placeholder/300/400',
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
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
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
