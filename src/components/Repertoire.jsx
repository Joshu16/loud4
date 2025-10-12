import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MotionAnimation from './MotionAnimation';
import '../styles/Repertoire.css';
import Loud4 from '../assets/images/Loud4.webp';

const Repertoire = ({ initialAnimationComplete }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const swiperRef = useRef(null);

  // Controlar autoplay basado en hover
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (isHovering) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isHovering]);

  const repertoireData = [
    {
      id: 1,
      title: "Especial Tear for Fears & Duran Duran",
      description: "Los mejores hits de los 80s con el sonido característico de estas bandas icónicas",
      image: Loud4,
      alt: "Tear for Fears & Duran Duran"
    },
    {
      id: 2,
      title: "Especial canciones de películas",
      description: "Bandas sonoras legendarias que marcaron generaciones en el cine",
      image: Loud4,
      alt: "Canciones de Películas"
    },
    {
      id: 3,
      title: "Rock clásico en inglés",
      description: "Los grandes clásicos del rock internacional que nunca pasan de moda",
      image: Loud4,
      alt: "Rock Clásico Inglés"
    },
    {
      id: 4,
      title: "Rock clásico en español",
      description: "Los hits más emblemáticos del rock en español de todas las épocas",
      image: Loud4,
      alt: "Rock Clásico Español"
    },
    {
      id: 5,
      title: "Rock clásico",
      description: "Una selección cuidadosa de los mejores temas del rock de todos los tiempos",
      image: Loud4,
      alt: "Rock Clásico"
    }
  ];


  return (
    <section id="repertoire" className="repertoire-section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="repertoire-header">
            <h2 className="repertoire-title">Nuestro Repertorio</h2>
            <p className="repertoire-subtitle">Descubre nuestra gama completa de música rock</p>
          </div>
        </MotionAnimation>
        
        <div className="repertoire-carousel-container">
          <div 
            className={`repertoire-carousel ${isHovering ? 'has-hover' : ''}`}
          >
            <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="repertoire-swiper"
          >
            {repertoireData.map((item) => (
              <SwiperSlide key={item.id}>
                <div 
                  className="repertoire-card"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="repertoire-image">
                    <img src={item.image} alt={`${item.alt} - LOUD4 Banda Rock Costa Rica`} title={`${item.title} - LOUD4`} />
                  </div>
                  <div className="repertoire-content">
                    <h3 className="repertoire-card-title">{item.title}</h3>
                    <p className="repertoire-card-description">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="swiper-button-prev">
          <ChevronLeft size={16} strokeWidth={1} />
        </div>
        <div className="swiper-button-next">
          <ChevronRight size={16} strokeWidth={1} />
        </div>
        </div>
        
        <div 
          className="custom-pagination"
        >
          {repertoireData.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === activeSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        
        <MotionAnimation animation="fadeInUp" delay={1000} initialAnimationComplete={initialAnimationComplete}>
          <div className="repertoire-cta">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => window.location.href = '#contact'}
            >
              Contáctanos
            </button>
          </div>
        </MotionAnimation>
      </div>
    </section>
  );
};

export default Repertoire;
