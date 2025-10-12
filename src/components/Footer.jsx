import React from 'react';
import { WhatsAppIcon, EmailIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from './Icons';
import '../styles/Footer.css';
import Loud4 from '../assets/images/Loud4.webp';
import logoImage from '../assets/images/logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="column-title">Loud4</h4>
            <ul className="column-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#repertoire">Música</a></li>
              <li><a href="#gallery">Galería</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="column-title">Servicios</h4>
            <ul className="column-links">
              <li><a href="#events">Eventos</a></li>
              <li><a href="#gallery">Galería</a></li>
              <li><a href="#members">Banda</a></li>
              <li><a href="#repertoire">Música</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="column-title">Contacto</h4>
            <ul className="column-links">
              <li><a href="#contact">Formulario</a></li>
              <li><a href="https://wa.me/506XXXXXXXX">WhatsApp</a></li>
              <li><a href="mailto:info@loud4.com">Email</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
            <div className="contact-info">
              <p>Costa Rica</p>
              <p>Servicios en todo el país</p>
            </div>
          </div>
          
          <div className="footer-column footer-cta-column">
            <h2 className="cta-title">Reviví el rock.<br />Contratá a Loud4.</h2>
            <a href="#contact" className="contact-cta-link">
              Contáctanos para tu evento
            </a>
          </div>
        </div>
        
          <div className="footer-bottom">
            <div className="social-links">
              <img src={logoImage} alt="Loud4 Logo" className="footer-logo" />
              <a href="https://www.instagram.com/bandaloud4/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.facebook.com/loud4/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <YouTubeIcon size={20} />
              </a>
            </div>
            
            <div className="footer-info">
              <p>&copy; 2025 Loud4. Todos los derechos reservados.</p>
            </div>
            
            <div className="footer-developer">
              <p>
                Desarrollado por{' '}
                <a 
                  href="https://bysaborio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="developer-link"
                >
                  <img 
                    src="https://bysaborio.vercel.app/assets/Logo%20PNG-BvnbT45m.png" 
                    alt="BySaborío Digital Solutions" 
                    className="developer-logo"
                  />
                  BySaborío Digital Solutions
                </a>
              </p>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
