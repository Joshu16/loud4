import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="band-section">
      <div className="container">
        <h2 className="section-title">Sobre la banda</h2>
        <p className="band-description">
          Somos una banda apasionada por el rock clásico que ama hacer que tus eventos 
          sean únicos e inolvidables. Con años de experiencia tocando juntos, hemos 
          presentado nuestro repertorio en Country Clubs, Restaurantes, Bares, Fiestas 
          Privadas, Chinamo y Toros a la Tica.
        </p>
        <button className="btn btn-primary btn-small">Conocé al equipo</button>
      </div>
    </section>
  );
};

export default About;
