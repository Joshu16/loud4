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
    // SACC
    { 
      id: 1, 
      type: 'facebook',
      facebookId: '9887646207963429',
      title: 'SACC - Presentación especial', 
      description: 'Show en SACC - Red social'
    },
    // DURAN
    { 
      id: 2, 
      youtubeId: '0e56ZLh7Is4', 
      title: 'Tears for Fears - Interpretación', 
      description: 'Clásicos de los 80s'
    },
    { 
      id: 3, 
      youtubeId: 'nqLEkrprFfM', 
      title: 'Duran Duran - Show en vivo', 
      description: 'Música new wave de los 80s'
    },
    { 
      id: 4, 
      youtubeId: 'T2bhxWQPpvk', 
      title: 'Tears/Duran - Medley', 
      description: 'Mezcla de grandes éxitos'
    },
    // Beatles era
    { 
      id: 6, 
      youtubeId: 'Cl45u8OSJUs', 
      title: 'Beatles Era - Show en vivo', 
      description: 'Interpretando clásicos de The Beatles'
    },
    { 
      id: 7, 
      youtubeId: 'M9jbHi-rzKQ', 
      title: 'Beatles Era - Música clásica', 
      description: 'Los grandes éxitos de la era Beatle'
    },
    { 
      id: 8, 
      youtubeId: 'gTMayVhx6JU', 
      title: 'Beatles Era - En concierto', 
      description: 'Repertorio completo de The Beatles'
    },
    // 16 años
    { 
      id: 9, 
      youtubeId: 'mM8x4ufDC70', 
      title: 'Desde 2007 en las tarimas', 
      description: 'Loud4 - Experiencia de más de 18 años'
    },
    { 
      id: 10, 
      youtubeId: 'JjXUCvEmD-c', 
      title: '18 años de trayectoria', 
      description: 'Evolución musical a lo largo de los años'
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
                  <div className={`video-item ${video.type === 'facebook' ? 'vertical' : ''}`}>
                    <div className="video-container">
                      {video.type === 'drive' ? (
                        <>
                          <iframe
                            src={`https://drive.google.com/file/d/${video.driveId}/preview?usp=sharing`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width="560"
                            height="315"
                            style={{
                              border: 'none',
                              width: '100%',
                              height: '100%'
                            }}
                          />
                          <div className="video-fallback" style={{display: 'none'}}>
                            <div className="video-placeholder">
                              <div className="video-thumbnail">
                                <div className="play-button">▶</div>
                                <div className="fallback-thumbnail">
                                  <div className="video-icon">📹</div>
                                  <p>Video no disponible</p>
                                </div>
                              </div>
                              <a 
                                href={`https://drive.google.com/file/d/${video.driveId}/view?usp=sharing`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="video-link"
                              >
                                Ver en Google Drive
                              </a>
                            </div>
                          </div>
                        </>
                      ) : video.type === 'facebook' ? (
                        <>
                          <iframe
                            src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.facebookId}&show_text=false&width=315&height=560&appId`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width="315"
                            height="560"
                            scrolling="no"
                            style={{
                              border: 'none', 
                              overflow: 'hidden',
                              position: 'absolute',
                              top: '18%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '100%',
                              height: '250%'
                            }}
                            onError={(e) => {
                              // Si falla, mostrar placeholder
                              e.target.style.display = 'none';
                              const placeholder = e.target.nextSibling;
                              if (placeholder) placeholder.style.display = 'block';
                            }}
                          />
                          <div className="video-fallback" style={{display: 'none'}}>
                            <div className="video-placeholder">
                              <div className="video-thumbnail">
                                <div className="play-button">▶</div>
                                <div className="facebook-thumbnail">
                                  <div className="video-icon">📘</div>
                                  <p>Video no disponible</p>
                                </div>
                              </div>
                              <a 
                                href={`https://www.facebook.com/reel/${video.facebookId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="video-link"
                              >
                                Ver en Facebook
                              </a>
                            </div>
                          </div>
                        </>
                      ) : (
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          width="560"
                          height="315"
                        />
                      )}
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

