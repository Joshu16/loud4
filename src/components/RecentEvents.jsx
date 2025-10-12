import React, { useState } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/RecentEvents.css';

const RecentEvents = ({ initialAnimationComplete }) => {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      id: 1,
      venue: 'Santa Ana Country Club',
      image: 'https://santaanacountryclubcr.com/wp-content/uploads/2019/07/img_troon.jpg',
      location: 'Santa Ana'
    },
    {
      id: 2,
      venue: 'El Chinamo',
      image: 'https://s2.dmcdn.net/v/MmXFh1QAgR-fxgqGT/x1080',
      location: 'San José'
    },
    {
      id: 3,
      venue: 'Jazz Cafe',
      image: 'https://lh3.googleusercontent.com/p/AF1QipMfdmRQ9IsPpcXjmVeobve2tLUk14ZT8snq5KNj=s680-w680-h510-rw',
      location: 'San José'
    },
    {
      id: 4,
      venue: 'Hard Rock Cafe',
      image: 'https://www.nacion.com/resizer/v2/HDXI375R7ZBKXP5G6MWOUBU7SY.jpg?smart=true&auth=87b84afcfcac25ede3653b87e2a99fb713f77c64157ca0b8387ae0037e9b7c99&width=4000&height=2667',
      location: 'San José'
    },
    {
      id: 5,
      venue: 'Corridas de Toro',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDet-5TOVla1zwh0xOZkaZPpMrTgwcUPeFVA&s',
      location: 'San José'
    },
    {
      id: 6,
      venue: 'Mundo Loco',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj88RyYye1qE2CkO0GSiqOQG1hT-1HAd_vjdFgZiwvu1LW7Ick44zeNDSAVTcyzbAzQdoU6uiY-iGWZcMW0tjGHU0aJaRHZhQ4G6qdwOIqfP_gi96wXJJ3EWHJm4sRoH0HKBhUxlhwjbBHe/s1600/www.historypin.jpg',
      location: 'San José'
    },
    {
      id: 7,
      venue: 'Bar Cosmos',
      image: 'https://lh3.googleusercontent.com/p/AF1QipP1g006pJuIIG6Nsi3ugEp2z85My9CiRRjEuUY9=s680-w680-h510-rw',
      location: 'San José'
    },
    {
      id: 8,
      venue: 'Bar The Whiskey',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqvV4yEbD2leMNlYxCn1nMPschHQDwHT5F35Oz8KgasgZ92tfMs_2tHlATTcXKOCzfwybnz3_WEdQOK5_11VoqSmncgX7YcQ1JUiACvCdwz0_L8d2QG-UIm_gy1aY3gHYbjdEC6hCqEru-1=s680-w680-h510-rw',
      location: 'San José'
    },
    {
      id: 9,
      venue: 'El Cuartel',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noWWMr8CDDj5zK32HGB7fIbkanNChisBWkcU93rtzfHj8rtkw451PlwTEIB0XsAl9wK4NoPzUo4U6DTixOkapBp_wnJkRSF1kZpD5iVPY1ZglWW8AFe01TeLPDbxCPy9DURMnkjBg=s680-w680-h510-rw',
      location: 'San José'
    },
    {
      id: 10,
      venue: 'Fiestas Privadas',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      location: 'Costa Rica'
    }
  ];

  const displayedEvents = showAll ? events : events.slice(0, 3);

  return (
    <section id="events" className="recent-events-section section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="section-header">
            <h2 className="section-title">Ya hemos encendido la noche en estos lugares</h2>
          </div>
        </MotionAnimation>
        
        <div className="events-grid grid-3">
          {displayedEvents.map((event, index) => (
            <MotionAnimation key={event.id} animation="scaleIn" delay={400 + (index * 80)} initialAnimationComplete={initialAnimationComplete}>
              <div className="event-card card">
                <div className="card-content">
                  <div className="event-image">
                    <img src={event.image} alt={event.venue} />
                    <div className="event-overlay">
                      <div className="event-info">
                        <h3 className="venue-name">{event.venue}</h3>
                        <p className="event-location">{event.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="event-details">
                    <h3 className="card-title">{event.venue}</h3>
                  </div>
                </div>
              </div>
            </MotionAnimation>
          ))}
        </div>
        
        {events.length > 3 && (
          <MotionAnimation animation="fadeInUp" delay={800} initialAnimationComplete={initialAnimationComplete}>
            <div className="show-more-container">
              <button 
                className="show-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Ver menos' : 'Ver más eventos'}
              </button>
            </div>
          </MotionAnimation>
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
