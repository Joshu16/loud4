import React, { useState } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/RecentEvents.css';
import santaAnaCountryClubImage from '../assets/images/santa-ana-country-club.webp';
import elChinamoImage from '../assets/images/el-chinamo.webp';
import jazzCafeImage from '../assets/images/jazz-cafe.webp';
import hardRockCafeImage from '../assets/images/hard-rock-cafe.webp';
import corridasDeToroImage from '../assets/images/corridas-de-toro.webp';
import mundoLocoImage from '../assets/images/mundo-loco.webp';
import barCosmosImage from '../assets/images/bar-cosmos.webp';
import barTheWhiskeyImage from '../assets/images/bar-the-whiskey.webp';
import elCuartelImage from '../assets/images/el-cuartel.webp';
import fiestasPrivadasImage from '../assets/images/fiestas-privadas.webp';

const RecentEvents = ({ initialAnimationComplete }) => {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      id: 1,
      venue: 'Santa Ana Country Club',
      image: santaAnaCountryClubImage,
      location: 'Santa Ana'
    },
    {
      id: 2,
      venue: 'El Chinamo',
      image: elChinamoImage,
      location: 'San José'
    },
    {
      id: 3,
      venue: 'Jazz Cafe',
      image: jazzCafeImage,
      location: 'San José'
    },
    {
      id: 4,
      venue: 'Hard Rock Cafe',
      image: hardRockCafeImage,
      location: 'San José'
    },
    {
      id: 5,
      venue: 'Corridas de Toro',
      image: corridasDeToroImage,
      location: 'San José'
    },
    {
      id: 6,
      venue: 'Mundo Loco',
      image: mundoLocoImage,
      location: 'San José'
    },
    {
      id: 7,
      venue: 'Bar Cosmos',
      image: barCosmosImage,
      location: 'San José'
    },
    {
      id: 8,
      venue: 'Bar The Whiskey',
      image: barTheWhiskeyImage,
      location: 'San José'
    },
    {
      id: 9,
      venue: 'El Cuartel',
      image: elCuartelImage,
      location: 'San José'
    },
    {
      id: 10,
      venue: 'Fiestas Privadas',
      image: fiestasPrivadasImage,
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
