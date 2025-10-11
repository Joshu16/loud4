import React, { useState, useEffect } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/Header.css';

const Header = ({ initialAnimationComplete }) => {
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
      {/* Header Navigation - Siempre visible */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <h1 className="band-name">LOUD4</h1>
        </div>
        <div className="nav-right">
          <div className="nav-close-btn" onClick={(e) => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>
            <span>×</span>
          </div>
          <a href="#home" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Inicio</a>
          <a href="#about" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Nosotros</a>
          <a href="#repertoire" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Música</a>
          <a href="#gallery" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Galería</a>
          <a href="#events" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Eventos</a>
          <a href="#members" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Banda</a>
          <button className="nav-contact-btn" onClick={() => {
            window.location.href = '#contact';
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Contáctanos</button>
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
        <MotionAnimation animation="fadeInUp" delay={100} initialAnimationComplete={initialAnimationComplete} hero={true}>
          <div className="cta-text">
            <div className="cta-main">Anima tus eventos</div>
            <div className="cta-sub">Con clásicos del rock</div>
          </div>
        </MotionAnimation>
        <MotionAnimation animation="fadeInUp" delay={300} initialAnimationComplete={initialAnimationComplete} hero={true}>
          <div className="cta-subtitle">Cobertura musical profesional para bodas, eventos corporativos y celebraciones especiales</div>
        </MotionAnimation>
        <MotionAnimation animation="fadeInUp" delay={500} initialAnimationComplete={initialAnimationComplete} hero={true}>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => window.location.href = '#contact'}>
              RESERVAR EVENTO
            </button>
            <button className="cta-button secondary" onClick={() => window.location.href = '#about'}>
              VER SERVICIOS
            </button>
          </div>
        </MotionAnimation>
      </div>
    </header>
  );
};

export default Header;
