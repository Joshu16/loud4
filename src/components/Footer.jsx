import React from 'react';
import { WhatsAppIcon, EmailIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from './Icons';
import '../styles/Footer.css';
import Loud4 from '../assets/images/Loud4.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Loud4} alt="Loud4" className="logo" />
            <h3 className="band-name">Loud4</h3>
          </div>
          
          <nav className="footer-nav">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#shows">Shows</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
          
          <div className="footer-cta">
            <h2 className="cta-title">Reviví el rock. Contratá a Loud4.</h2>
            <div className="contact-links">
              <a href="https://wa.me/5491112345678" className="contact-link whatsapp">
                <WhatsAppIcon size={20} />
                WhatsApp
              </a>
              <a href="mailto:info@loud4.com" className="contact-link email">
                <EmailIcon size={20} />
                Email
              </a>
              <a href="#" className="contact-link instagram">
                <InstagramIcon size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2025 Loud4. Todos los derechos reservados.</p>
            <p>Banda de rock cover profesional - Costa Rica</p>
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
          
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <YouTubeIcon size={20} />
            </a>
            <a href="https://wa.me/5491112345678" className="social-link" aria-label="WhatsApp">
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
