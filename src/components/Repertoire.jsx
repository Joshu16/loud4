import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MotionAnimation from './MotionAnimation';
import '../styles/Repertoire.css';
import Loud4 from '../assets/images/Loud4.webp';

const Repertoire = ({ initialAnimationComplete }) => {
  const swiperRef = useRef(null);

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
      <div className="repertoire-container">
        <MotionAnimation animation="fadeInUp" delay={100} initialAnimationComplete={initialAnimationComplete}>
          <div className="repertoire-header">
            <h2 className="repertoire-title">Nuestro Repertorio</h2>
            <p className="repertoire-subtitle">Descubre nuestra gama completa de música rock</p>
          </div>
        </MotionAnimation>
        
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="repertoire-carousel-wrapper">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView="auto"
              centeredSlides={true}
              navigation={{
                nextEl: '.repertoire-nav-next',
                prevEl: '.repertoire-nav-prev',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  centeredSlides: true,
                },
              }}
              className="repertoire-swiper"
            >
              {repertoireData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="repertoire-card">
                    <div className="repertoire-image-wrapper">
                      <img 
                        src={item.image} 
                        alt={`${item.alt} - LOUD4 Banda Rock Costa Rica`} 
                        title={`${item.title} - LOUD4`}
                        className="repertoire-image"
                      />
                      <div className="repertoire-overlay"></div>
                    </div>
                    <div className="repertoire-content">
                      <h3 className="repertoire-card-title">{item.title}</h3>
                      <p className="repertoire-card-description">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="repertoire-navigation">
              <button className="repertoire-nav-btn repertoire-nav-prev">
                <ChevronLeft size={48} />
              </button>
              <button className="repertoire-nav-btn repertoire-nav-next">
                <ChevronRight size={48} />
              </button>
            </div>
          </div>
        </MotionAnimation>
      </div>
    </section>
  );
};

export default Repertoire;
