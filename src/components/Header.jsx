import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="home" className="hero-section">
      {/* Header Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
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
          <button className="nav-contact-btn" onClick={() => window.location.href = '#contact'}>Contáctanos</button>
        </div>
        <div className="nav-burger" onClick={(e) => {
          const navRight = document.querySelector('.nav-right');
          const burger = e.currentTarget;
          navRight.classList.toggle('nav-active');
          burger.classList.toggle('active');
        }}>
          <span></span>
          <span></span>
          <span></span>
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
