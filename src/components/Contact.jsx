import React, { useState } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/Contact.css';

const Contact = ({ initialAnimationComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    location: '',
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
            <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
              <div className="form-header">
                <h2 className="section-title">Contratanos para tu evento</h2>
                <p className="form-subtitle">Respondemos rápido y adaptamos el show a tu evento</p>
              </div>
            </MotionAnimation>
            
            <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
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
                  <label htmlFor="location">Ubicación del evento</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ciudad, dirección o lugar específico"
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
                    placeholder="Cuéntanos tus fechas, horario, cantidad de invitados, etc."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  Enviar solicitud
                </button>
              </form>
            </MotionAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
