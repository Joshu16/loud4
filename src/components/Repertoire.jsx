import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

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
          <motion.div 
            className={`repertoire-carousel ${isHovering ? 'has-hover' : ''}`}
            variants={carouselVariants}
            initial="hidden"
            animate={initialAnimationComplete ? "visible" : "hidden"}
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
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <div className="repertoire-content">
                    <h3 className="repertoire-card-title">{item.title}</h3>
                    <p className="repertoire-card-description">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="swiper-button-prev">
          <ChevronLeft size={16} strokeWidth={1} />
        </div>
        <div className="swiper-button-next">
          <ChevronRight size={16} strokeWidth={1} />
        </div>
        </div>
        
        <motion.div 
          className="custom-pagination"
          variants={containerVariants}
          initial="hidden"
          animate={initialAnimationComplete ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          {repertoireData.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === activeSlide ? 'active' : ''}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Repertoire;
