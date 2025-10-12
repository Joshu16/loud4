import React from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/BandMembers.css';

const BandMembers = ({ initialAnimationComplete }) => {

  const members = [
    {
      id: 1,
      name: 'Dago Ortiz',
      role: 'Vocalista, guitarrista, bajista',
      image: 'https://static.wixstatic.com/media/09daaa_f3492f4917714f29bd21ca3492e4af5c~mv2.jpg/v1/fill/w_440,h_497,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8292_JPG.jpg',
      instrument: 'Voz/Guitarra/Bajo'
    },
    {
      id: 2,
      name: 'Walter Saborío',
      role: 'Guitarrista, corista',
      image: 'https://static.wixstatic.com/media/09daaa_36aa8d5e97c24dc3be70e3db744a98ff~mv2.jpg/v1/crop/x_230,y_442,w_866,h_978/fill/w_440,h_497,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/13842FD6-FF7F-4FE4-BE2B-43C4A5E4FE43_JPG.jpg',
      instrument: 'Guitarra'
    },
    {
      id: 3,
      name: 'Ale Gonzalez',
      role: 'Bajista, guitarra acústica',
      image: 'https://static.wixstatic.com/media/09daaa_1b23eecd399f4ec580a4f59eb8f69cc1~mv2.jpg/v1/crop/x_884,y_0,w_1753,h_1980/fill/w_440,h_497,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_8293_JPG.jpg',
      instrument: 'Bajo/Acústica'
    },
    {
      id: 4,
      name: 'Luis Monge',
      role: 'Teclado',
      image: 'https://static.wixstatic.com/media/09daaa_d7d9cf463fa043c9bc836fa7bacc216b~mv2.jpg/v1/crop/x_0,y_118,w_924,h_1044/fill/w_440,h_497,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Imagen%20de%20WhatsApp%202024-12-24%20a%20las%2014_37_29_34955aac.jpg',
      instrument: 'Teclados'
    },
    {
      id: 5,
      name: 'Andrés Arias',
      role: 'Baterista',
      image: 'https://static.wixstatic.com/media/09daaa_b5706d66dcb44e9ea1debc24c599afaa~mv2.jpg/v1/crop/x_0,y_228,w_729,h_823/fill/w_440,h_497,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Imagen%20de%20WhatsApp%202024-12-24%20a%20las%2014_38_25_41022800.jpg',
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
                    <img src={member.image} alt={`${member.name} - ${member.role} en LOUD4 Banda Rock Costa Rica`} title={`${member.name} - ${member.instrument}`} />
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
