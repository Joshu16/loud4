import React, { useState } from 'react';
import '../styles/RecentEvents.css';

const RecentEvents = () => {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      id: 1,
      venue: 'Santa Ana Country Club',
      eventType: 'Evento Privado',
      date: 'Diciembre 2024',
      description: 'Evento privado',
      image: '/api/placeholder/300/200',
      location: 'Santa Ana'
    },
    {
      id: 2,
      venue: 'El Chinamo',
      eventType: 'Show Público',
      date: 'Noviembre 2024',
      description: 'Concierto público',
      image: '/api/placeholder/300/200',
      location: 'San José'
    },
    {
      id: 3,
      venue: 'Jazz Cafe',
      eventType: 'Evento Corporativo',
      date: 'Octubre 2024',
      description: 'Evento corporativo',
      image: '/api/placeholder/300/200',
      location: 'San José'
    },
    {
      id: 4,
      venue: 'Hard Rock Cafe',
      eventType: 'Fiesta de Fin de Año',
      date: 'Diciembre 2024',
      description: 'Fiesta de fin de año',
      image: '/api/placeholder/300/200',
      location: 'San José'
    },
    {
      id: 5,
      venue: 'Corridas de Toro',
      eventType: 'Festival',
      date: 'Septiembre 2024',
      description: 'Festival de música',
      image: '/api/placeholder/300/200',
      location: 'San José'
    },
    {
      id: 6,
      venue: 'Mundo Loco',
      eventType: 'Evento Privado',
      date: 'Agosto 2024',
      description: 'Evento privado',
      image: '/api/placeholder/300/200',
      location: 'San José'
    }
  ];

  const displayedEvents = showAll ? events : events.slice(0, 3);

  return (
    <section id="events" className="recent-events-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ya hemos encendido la noche en estos lugares</h2>
        </div>
        
        <div className="events-grid grid-3">
          {displayedEvents.map((event) => (
            <div key={event.id} className="event-card card">
              <div className="event-image">
                <img src={event.image} alt={event.venue} />
                <div className="event-overlay">
                  <div className="event-info">
                    <h3 className="venue-name">{event.venue}</h3>
                    <p className="event-type">{event.eventType}</p>
                    <p className="event-date">{event.date}</p>
                    <p className="event-location">{event.location}</p>
                  </div>
                </div>
              </div>
              <div className="event-details">
                <h3 className="card-title">{event.venue}</h3>
                <p className="card-description">{event.description}</p>
                <div className="event-meta">
                  <span className="event-type-badge">{event.eventType}</span>
                  <span className="event-date-badge">{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {events.length > 3 && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ver menos' : 'Ver más eventos'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
