import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Increíble energía en vivo, el público no paró de bailar toda la noche",
      author: "María González",
      venue: "Club Rock & Roll",
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 2,
      text: "Profesionales de primera, llegaron puntuales y dieron un show espectacular",
      author: "Carlos Mendoza",
      venue: "Teatro Coliseo",
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 3,
      text: "El repertorio perfecto para nuestro evento corporativo, todos quedaron encantados",
      author: "Ana Rodríguez",
      venue: "Bar La Trastienda",
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 4,
      text: "Sonido impecable y una puesta en escena que superó todas nuestras expectativas",
      author: "Diego Silva",
      venue: "Centro Cultural",
      rating: 5,
      avatar: '/api/placeholder/80/80'
    },
    {
      id: 5,
      text: "La mejor banda que hemos contratado, definitivamente los volveremos a llamar",
      author: "Laura Herrera",
      venue: "Restaurant El Refugio",
      rating: 5,
      avatar: '/api/placeholder/80/80'
    }
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">Testimonios reales de eventos exitosos</p>
        </div>
        
        <div className="testimonials-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.testimonials-next',
              prevEl: '.testimonials-prev',
            }}
            pagination={{
              clickable: true,
              el: '.testimonials-pagination',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper"
          >
            {displayedTestimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="stars">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="testimonial-text">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src={testimonial.avatar} alt={testimonial.author} />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.author}</h4>
                        <p className="author-venue">{testimonial.venue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="testimonials-navigation">
            <button className="testimonials-prev">‹</button>
            <button className="testimonials-next">›</button>
          </div>
          
          <div className="testimonials-pagination"></div>
        </div>

        {testimonials.length > 3 && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ver menos' : 'Ver más testimonios'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
