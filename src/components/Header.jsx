import React from 'react';
import '../styles/Navbar.css';
import '../styles/Header.css';
import MotionAnimation from './MotionAnimation';
import logoImage from '../assets/images/logo.webp';

const Header = ({ initialAnimationComplete }) => {
  return (
    <>
      {/* Header Navigation - Siempre visible */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-container">
            <img src={logoImage} alt="LOUD4 - Banda de Rock Clásico Costa Rica" title="LOUD4 Logo" className="band-logo" />
            <h1 className="band-name">LOUD4</h1>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-close-btn" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>
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

      <header id="home" className="hero-section">
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
    </>
  );
};

export default Header;
