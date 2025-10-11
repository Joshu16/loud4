import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "¿Cuál es el costo de contratar a Loud4?",
      answer: "El precio varía según el tipo de evento, duración del show, ubicación y servicios adicionales. Contactanos para recibir un presupuesto personalizado sin compromiso."
    },
    {
      id: 2,
      question: "¿Qué incluye el servicio?",
      answer: "Incluimos equipamiento de sonido profesional, iluminación básica, transporte y montaje. También podemos adaptar nuestro repertorio según las preferencias del evento."
    },
    {
      id: 3,
      question: "¿Cuánto tiempo antes necesito contratar?",
      answer: "Recomendamos contactarnos con al menos 2-4 semanas de anticipación, especialmente para fechas populares. Sin embargo, también podemos considerar eventos de última hora según disponibilidad."
    },
    {
      id: 4,
      question: "¿Tocan en cualquier tipo de espacio?",
      answer: "Nos adaptamos a diferentes espacios: salones, terrazas, jardines, bares, restaurantes, etc. Solo necesitamos acceso para carga y descarga del equipamiento."
    },
    {
      id: 5,
      question: "¿Pueden tocar canciones específicas que solicite?",
      answer: "¡Por supuesto! Si hay canciones específicas que querés que incluyamos en nuestro repertorio, podemos aprenderlas especialmente para tu evento. Solo necesitamos avisar con anticipación."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle">Resolvemos las dudas más comunes</p>
        </div>
        
        <div className="faq-container">
          {faqItems.map((item) => (
            <div key={item.id} className={`faq-item ${openItem === item.id ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleItem(item.id)}
              >
                <span className="question-text">{item.question}</span>
                <span className="toggle-icon"></span>
              </button>
              
              <div className="faq-answer">
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-footer">
          <p>¿Tenés otra duda? Contáctanos</p>
          <a href="#contact" className="btn btn-primary">
            Contáctanos aquí
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
