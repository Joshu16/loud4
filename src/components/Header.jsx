import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header id="home" className="hero-section">
      {/* Header Navigation */}
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="band-name">LOUD4</h1>
        </div>
        <div className="nav-right">
          <a href="#home" className="nav-link">Inicio</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="#repertoire" className="nav-link">Música</a>
          <a href="#gallery" className="nav-link">Galería</a>
          <a href="#events" className="nav-link">Eventos</a>
          <a href="#members" className="nav-link">Banda</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </div>
      </nav>

      {/* Main CTA Section */}
      <div className="main-cta">
        <div className="cta-text">Anima Tus Eventos Con Clásicos Del Rock</div>
        <div className="cta-subtitle">Cobertura musical profesional para bodas, eventos corporativos y celebraciones especiales</div>
        <div className="cta-buttons">
          <button className="cta-button primary">
            RESERVAR EVENTO
          </button>
          <button className="cta-button secondary">
            VER SERVICIOS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
