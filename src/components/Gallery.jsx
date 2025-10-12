import React, { useState } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/Gallery.css';

const Gallery = ({ initialAnimationComplete }) => {
  const [activeTab, setActiveTab] = useState('photos');
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const photos = [
    { id: 1, src: '/api/placeholder/400/300', alt: 'Show en vivo 1', category: 'live' },
    { id: 2, src: '/api/placeholder/300/400', alt: 'Show en vivo 2', category: 'live' },
    { id: 3, src: '/api/placeholder/400/400', alt: 'Show en vivo 3', category: 'live' },
    { id: 4, src: '/api/placeholder/300/300', alt: 'Show en vivo 4', category: 'live' },
    { id: 5, src: '/api/placeholder/400/500', alt: 'Show en vivo 5', category: 'live' },
    { id: 6, src: '/api/placeholder/300/400', alt: 'Show en vivo 6', category: 'live' },
    { id: 7, src: '/api/placeholder/400/300', alt: 'Show en vivo 7', category: 'live' },
    { id: 8, src: '/api/placeholder/300/500', alt: 'Show en vivo 8', category: 'live' },
    { id: 9, src: '/api/placeholder/400/300', alt: 'Show en vivo 9', category: 'live' },
    { id: 10, src: '/api/placeholder/300/400', alt: 'Show en vivo 10', category: 'live' },
    { id: 11, src: '/api/placeholder/400/300', alt: 'Show en vivo 11', category: 'live' },
    { id: 12, src: '/api/placeholder/300/500', alt: 'Show en vivo 12', category: 'live' }
  ];

  const displayedPhotos = showAllPhotos ? photos : photos.slice(0, 4);

  const videos = [
    { 
      id: 1, 
      youtubeId: 'mM8x4ufDC70', 
      title: 'Desde 2007 en las tarimas', 
      description: 'Loud4 - Experiencia de más de 18 años'
    },
    { 
      id: 2, 
      youtubeId: 'dQw4w9WgXcQ', 
      title: 'Show en vivo - Rock Clásico', 
      description: 'Repertorio de música clásica del rock'
    },
    { 
      id: 3, 
      youtubeId: 'dQw4w9WgXcQ', 
      title: 'Eventos Corporativos', 
      description: 'Presentaciones para empresas'
    },
    { 
      id: 4, 
      youtubeId: 'dQw4w9WgXcQ', 
      title: 'Fiestas Privadas', 
      description: 'Celebraciones especiales'
    }
  ];

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="section-header">
            <h2 className="section-title">Así se vive un show con Loud4</h2>
            <div className="tab-switcher">
              <button 
                className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('photos')}
              >
                Fotos
              </button>
              <button 
                className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
                onClick={() => setActiveTab('videos')}
              >
                Videos
              </button>
            </div>
          </div>
        </MotionAnimation>

        {activeTab === 'photos' && (
          <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
            <div className="photos-container">
              <div className="photos-grid">
                {displayedPhotos.map((photo, index) => (
                  <MotionAnimation key={photo.id} animation="scaleIn" delay={600 + (index * 100)} initialAnimationComplete={initialAnimationComplete}>
                    <div className={`photo-item ${photo.category}`}>
                      <img src={photo.src} alt={photo.alt} />
                      <div className="photo-overlay">
                        <span className="photo-title">{photo.alt}</span>
                      </div>
                    </div>
                  </MotionAnimation>
                ))}
              </div>
              {photos.length > 4 && (
                <MotionAnimation animation="fadeInUp" delay={800} initialAnimationComplete={initialAnimationComplete}>
                  <div className="show-more-container">
                    <button 
                      className="show-more-btn"
                      onClick={() => setShowAllPhotos(!showAllPhotos)}
                    >
                      {showAllPhotos ? 'Ver menos fotos' : 'Ver más fotos'}
                    </button>
                  </div>
                </MotionAnimation>
              )}
            </div>
          </MotionAnimation>
        )}

        {activeTab === 'videos' && (
          <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
            <div className="videos-grid">
              {videos.map((video, index) => (
                <MotionAnimation key={video.id} animation="scaleIn" delay={600 + (index * 150)} initialAnimationComplete={initialAnimationComplete}>
                  <div className="video-item">
                    <div className="video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="video-info">
                      <h3 className="video-title">{video.title}</h3>
                      <p className="video-description">{video.description}</p>
                    </div>
                  </div>
                </MotionAnimation>
              ))}
            </div>
          </MotionAnimation>
        )}
      </div>
    </section>
  );
};

export default Gallery;
