import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import MotionAnimation from './MotionAnimation';
import '../styles/Repertoire.css';
// Importar imágenes de repertorios
import Loud4 from '../assets/images/Loud4.webp';
// Imágenes específicas para cada repertorio (agregar cuando estén disponibles)
// import Repertoire80s from '../assets/images/repertoire-80s.webp';
// import RepertoireMovies from '../assets/images/repertoire-movies.webp';
// import RepertoireRockEnglish from '../assets/images/repertoire-rock-english.webp';
// import RepertoireRockSpanish from '../assets/images/repertoire-rock-spanish.webp';
// import RepertoireRockClassic from '../assets/images/repertoire-rock-classic.webp';

const Repertoire = ({ initialAnimationComplete }) => {
  const swiperInstance = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const repertoireData = [
    {
      id: 1,
      title: "Especial Tear for Fears & Duran Duran",
      description: "Los mejores hits de los 80s con el sonido característico de estas bandas icónicas",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop&q=80",
      // Guitarra eléctrica con sintetizadores - estilo 80s new wave (rock eléctrico)
      // image: Repertoire80s || Loud4, // Descomentar cuando agregues la imagen local
      alt: "Tear for Fears & Duran Duran"
    },
    {
      id: 2,
      title: "Especial canciones de películas",
      description: "Bandas sonoras legendarias que marcaron generaciones en el cine",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&q=80",
      // Guitarra eléctrica en escenario con luces - temática cine/rock eléctrico
      // image: RepertoireMovies || Loud4, // Descomentar cuando agregues la imagen local
      alt: "Canciones de Películas"
    },
    {
      id: 3,
      title: "Rock clásico en inglés",
      description: "Los grandes clásicos del rock internacional que nunca pasan de moda",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop&q=80",
      // Guitarra eléctrica Les Paul con amplificadores - rock clásico inglés eléctrico
      // image: RepertoireRockEnglish || Loud4, // Descomentar cuando agregues la imagen local
      alt: "Rock Clásico Inglés"
    },
    {
      id: 4,
      title: "Rock clásico en español",
      description: "Los hits más emblemáticos del rock en español de todas las épocas",
      image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&h=600&fit=crop&q=80",
      // Guitarra eléctrica en concierto - rock latinoamericano eléctrico
      // image: RepertoireRockSpanish || Loud4, // Descomentar cuando agregues la imagen local
      alt: "Rock Clásico Español"
    },
    {
      id: 5,
      title: "Rock clásico",
      description: "Una selección cuidadosa de los mejores temas del rock de todos los tiempos",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop&q=80",
      // Amplificadores y guitarras eléctricas - rock clásico general eléctrico
      // image: RepertoireRockClassic || Loud4, // Descomentar cuando agregues la imagen local
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
          {/* Desktop Carousel */}
          <div className="repertoire-carousel-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={0}
              slidesPerView="auto"
              centeredSlides={true}
              navigation={{
                nextEl: nextButtonRef.current,
                prevEl: prevButtonRef.current,
              }}
              onSwiper={(swiper) => {
                // Guardar la instancia de Swiper
                swiperInstance.current = swiper;
                // Inicializar navegación cuando Swiper esté listo
                setTimeout(() => {
                  if (prevButtonRef.current && nextButtonRef.current && swiper.navigation) {
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                }, 50);
              }}
              speed={0}
              allowTouchMove={false}
              breakpoints={{
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 0,
                  centeredSlides: true,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                  },
                  loop: true,
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
              <button 
                ref={prevButtonRef}
                type="button" 
                className="repertoire-nav-btn repertoire-nav-prev" 
                aria-label="Anterior"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (swiperInstance.current) {
                    swiperInstance.current.slidePrev();
                  }
                }}
              >
                <ChevronLeft size={28} color="#ffffff" strokeWidth={2.5} />
              </button>
              <button 
                ref={nextButtonRef}
                type="button" 
                className="repertoire-nav-btn repertoire-nav-next" 
                aria-label="Siguiente"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (swiperInstance.current) {
                    swiperInstance.current.slideNext();
                  }
                }}
              >
                <ChevronRight size={28} color="#ffffff" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="repertoire-mobile-wrapper">
            <div className="repertoire-mobile-navigation">
              <button 
                type="button" 
                className="repertoire-mobile-nav-btn repertoire-mobile-nav-prev" 
                aria-label="Anterior"
                onTouchStart={(e) => {
                  e.currentTarget.style.borderColor = '#dc2626';
                  e.currentTarget.querySelector('svg path').setAttribute('stroke', '#dc2626');
                }}
                onTouchEnd={(e) => {
                  setTimeout(() => {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.querySelector('svg path').setAttribute('stroke', '#ffffff');
                  }, 150);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentMobileIndex((prev) => 
                    prev === 0 ? repertoireData.length - 1 : prev - 1
                  );
                }}
              >
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block' }}
                >
                  <path 
                    d="M15 18L9 12L15 6" 
                    stroke="#ffffff" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ transition: 'stroke 0.2s ease' }}
                  />
                </svg>
              </button>
              <button 
                type="button" 
                className="repertoire-mobile-nav-btn repertoire-mobile-nav-next" 
                aria-label="Siguiente"
                onTouchStart={(e) => {
                  e.currentTarget.style.borderColor = '#dc2626';
                  e.currentTarget.querySelector('svg path').setAttribute('stroke', '#dc2626');
                }}
                onTouchEnd={(e) => {
                  setTimeout(() => {
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.querySelector('svg path').setAttribute('stroke', '#ffffff');
                  }, 150);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentMobileIndex((prev) => 
                    prev === repertoireData.length - 1 ? 0 : prev + 1
                  );
                }}
              >
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'block' }}
                >
                  <path 
                    d="M9 18L15 12L9 6" 
                    stroke="#ffffff" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ transition: 'stroke 0.2s ease' }}
                  />
                </svg>
              </button>
            </div>
            <div className="repertoire-mobile-image-container">
              <div className="repertoire-mobile-card">
                <div className="repertoire-mobile-image-wrapper">
                  <img 
                    src={repertoireData[currentMobileIndex].image} 
                    alt={`${repertoireData[currentMobileIndex].alt} - LOUD4 Banda Rock Costa Rica`} 
                    title={`${repertoireData[currentMobileIndex].title} - LOUD4`}
                    className="repertoire-mobile-image"
                  />
                  <div className="repertoire-mobile-overlay"></div>
                </div>
                <div className="repertoire-mobile-content">
                  <h3 className="repertoire-mobile-card-title">{repertoireData[currentMobileIndex].title}</h3>
                  <p className="repertoire-mobile-card-description">{repertoireData[currentMobileIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
        </MotionAnimation>
      </div>
    </section>
  );
};

export default Repertoire;
