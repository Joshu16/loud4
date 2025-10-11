import React, { useState } from 'react';
import { WhatsAppIcon, EmailIcon, InstagramIcon } from './Icons';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu consulta! Te responderemos pronto.');
  };

  const eventTypes = [
    'Evento Privado',
    'Evento Corporativo',
    'Fiesta de Cumpleaños',
    'Boda',
    'Festival',
    'Bar/Restaurant',
    'Otro'
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-form-container">
            <div className="form-header">
              <h2 className="section-title">Contratanos para tu evento</h2>
              <p className="form-subtitle">Respondemos rápido y adaptamos el show a tu evento</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="eventType">Tipo de evento *</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona el tipo de evento</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Fecha del evento</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Cuéntanos sobre tu evento, ubicación, cantidad de invitados, etc."
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Enviar solicitud
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="contact-methods">
              <h3>Otras formas de contacto</h3>
              
              <div className="contact-method">
                <div className="method-icon">
                  <WhatsAppIcon size={24} />
                </div>
                <div className="method-content">
                  <h4>WhatsApp</h4>
                  <p>+54 9 11 1234-5678</p>
                  <a href="https://wa.me/5491112345678" className="contact-link">
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <EmailIcon size={24} />
                </div>
                <div className="method-content">
                  <h4>Correo</h4>
                  <p>info@loud4.com</p>
                  <a href="mailto:info@loud4.com" className="contact-link">
                    Enviar email
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <InstagramIcon size={24} />
                </div>
                <div className="method-content">
                  <h4>Redes Sociales</h4>
                  <p>@loud4band</p>
                  <a href="#" className="contact-link">
                    Seguir en Instagram
                  </a>
                </div>
              </div>
            </div>
            
            <div className="availability-cta">
              <h3>Consultá disponibilidad</h3>
              <p>¿Necesitás saber si estamos disponibles para una fecha específica?</p>
              <a href="https://wa.me/5491112345678" className="btn btn-secondary">
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
