import React, { useState } from 'react';
import '../styles/Navbar.css';
import Loud4Logo from '../assets/images/Loud4.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
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
            <li><a href="#contact" onClick={toggleMenu}>Contact us</a></li>
          </ul>
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
