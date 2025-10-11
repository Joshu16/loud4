import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Repertoire.css';
import Loud4 from '../assets/images/Loud4.webp';   

const Repertoire = () => {
  const swiperRef = useRef(null);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

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
    <section className="repertoire-section">
      <div className="container">
        <h2 className="section-title">Nuestro repertorio</h2>
        <div className="swiper-container">
          <button className="custom-prev-btn" onClick={goToPrev}></button>
          <button className="custom-next-btn" onClick={goToNext}></button>
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                centeredSlides: true,
                loop: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
              },
            }}
            className="repertoire-swiper"
          >
            {repertoireData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="repertoire-card">
                  <div className="card-image">
                    <img src={item.image} alt={item.alt} />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
