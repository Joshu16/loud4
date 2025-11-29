import React from 'react';
import '../styles/Navbar.css';
import '../styles/Header.css';
import MotionAnimation from './MotionAnimation';
import logoImage from '../assets/images/logo.webp';
import backgroundImage from '../assets/images/Bg.webp';

const Header = ({ initialAnimationComplete }) => {
  return (
    <>
      {/* Header Navigation - Siempre visible */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#home" className="logo-container" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            if (navRight) navRight.classList.remove('nav-active');
            if (burger) burger.classList.remove('active');
          }}>
            <img src={logoImage} alt="LOUD4 - Banda de Rock Clásico Costa Rica" title="LOUD4 Logo" className="band-logo" />
            <h1 className="band-name">LOUD4</h1>
          </a>
        </div>
        <div className="nav-right">
          <div className="nav-close-btn" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>
          </div>
          <a href="#repertoire" className="nav-link" onClick={() => {
            const navRight = document.querySelector('.nav-right');
            const burger = document.querySelector('.nav-burger');
            navRight.classList.remove('nav-active');
            burger.classList.remove('active');
          }}>Repertorio</a>
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

      <header 
        id="home" 
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        {/* Main CTA Section */}
        <div className="main-cta">
          <MotionAnimation animation="fadeInUp" delay={100} initialAnimationComplete={initialAnimationComplete} hero={true}>
            <div className="cta-text">
              <div className="cta-main">Anima tus eventos</div>
              <div className="cta-main">Con clásicos del rock</div>
            </div>
          </MotionAnimation>
          <MotionAnimation animation="fadeInUp" delay={300} initialAnimationComplete={initialAnimationComplete} hero={true}>
            <div className="cta-subtitle">Cobertura musical profesional para bodas, eventos corporativos y celebraciones especiales</div>
          </MotionAnimation>
        </div>
      </header>
    </>
  );
};

export default Header;
