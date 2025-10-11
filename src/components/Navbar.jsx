import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import Loud4Logo from '../assets/images/Loud4.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <img src={Loud4Logo} alt="Loud4 Logo" className="navbar-logo" />
          <span className="brand-name">Loud4</span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#repertoire" onClick={toggleMenu}>Music</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>EPK</a></li>
            <li><a href="#events" onClick={toggleMenu}>Events</a></li>
          </ul>
          <button className="navbar-contact-btn" onClick={() => { toggleMenu(); window.location.href = '#contact'; }}>Contact us</button>
          <a href="#contact" className="navbar-cta-btn" onClick={toggleMenu}>Contratar</a>
        </div>
        <div className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
