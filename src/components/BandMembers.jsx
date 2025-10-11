import React from 'react';
import '../styles/BandMembers.css';

const BandMembers = () => {

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
        <div className="section-header">
          <h2 className="section-title">Conoce a la banda</h2>
          <p className="section-subtitle">Los talentos detrás de cada nota</p>
        </div>
        
        <div className="members-grid grid-5">
          {members.map((member) => (
            <div key={member.id} className="member-card card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="instrument-badge">
                    <span className="instrument-text">{member.instrument}</span>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BandMembers;
