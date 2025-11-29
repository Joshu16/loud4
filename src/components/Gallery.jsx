import React, { useState } from 'react';
import MotionAnimation from './MotionAnimation';
import '../styles/Gallery.css';

const Gallery = ({ initialAnimationComplete }) => {
  const [showAll, setShowAll] = useState(false);

  const videos = [
    // SACC
    { 
      id: 1, 
      type: 'facebook',
      facebookId: '9887646207963429',
      title: 'SACC - Presentación especial', 
      description: 'Show en SACC - Red social'
    },
    // DURAN - Este es el segundo video que va en grande
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

  // El segundo video (índice 1)
  const featuredVideo = videos[1];
  
  // Los demás videos excluyendo el segundo
  const otherVideos = videos.filter((video, index) => index !== 1);
  
  // Videos a mostrar en el grid (3 inicialmente, todos si showAll)
  const displayedVideos = showAll ? otherVideos : otherVideos.slice(0, 3);

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <MotionAnimation animation="fadeInUp" delay={200} initialAnimationComplete={initialAnimationComplete}>
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-line-1">Noches</span>
              <span className="title-line-2">Mágicas</span>
            </h2>
          </div>
        </MotionAnimation>

        {/* Video destacado en grande */}
        <MotionAnimation animation="fadeInUp" delay={400} initialAnimationComplete={initialAnimationComplete}>
          <div className="featured-video-container">
            <div className="featured-video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${featuredVideo.youtubeId}`}
                title={featuredVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </MotionAnimation>

        {/* Botón Ver más */}
        {otherVideos.length > 3 && !showAll && (
          <MotionAnimation animation="fadeInUp" delay={600} initialAnimationComplete={initialAnimationComplete}>
            <div className="show-more-container">
              <button 
                className="show-more-btn"
                onClick={() => setShowAll(true)}
              >
                Ver más
              </button>
            </div>
          </MotionAnimation>
        )}

        {/* Grid de videos (sin captions) */}
        {showAll && (
          <>
            <MotionAnimation animation="fadeInUp" delay={600} initialAnimationComplete={initialAnimationComplete}>
              <div className="videos-grid">
                {displayedVideos.map((video, index) => (
                  <MotionAnimation key={video.id} animation="scaleIn" delay={800 + (index * 100)} initialAnimationComplete={initialAnimationComplete}>
                    <div className={`video-item ${video.type === 'facebook' ? 'vertical' : ''}`}>
                      <div className="video-container">
                        {video.type === 'facebook' ? (
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
                    </div>
                  </MotionAnimation>
                ))}
              </div>
            </MotionAnimation>
            
            {/* Botón Ver menos */}
            <MotionAnimation animation="fadeInUp" delay={1000} initialAnimationComplete={initialAnimationComplete}>
              <div className="show-more-container">
                <button 
                  className="show-more-btn"
                  onClick={() => setShowAll(false)}
                >
                  Ver menos
                </button>
              </div>
            </MotionAnimation>
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
