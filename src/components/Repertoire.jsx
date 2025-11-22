import React, { useRef, useEffect } from 'react';
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
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={100} initialAnimationComplete={initialAnimationComplete}>
          <div className="repertoire-header">
            <h2 className="repertoire-title">Nuestro Repertorio</h2>
            <p className="repertoire-subtitle">Descubre nuestra gama completa de música rock</p>
          </div>
        </MotionAnimation>
        
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
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
        </MotionAnimation>
        
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
        
        <MotionAnimation animation="fadeInUp" delay={500} initialAnimationComplete={initialAnimationComplete}>
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
