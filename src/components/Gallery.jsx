import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
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
    { id: 1, thumbnail: '/api/placeholder/400/225', title: 'Tear for Fears - Everybody Wants to Rule the World', duration: '3:45' },
    { id: 2, thumbnail: '/api/placeholder/400/225', title: 'Duran Duran - Hungry Like the Wolf', duration: '4:12' },
    { id: 3, thumbnail: '/api/placeholder/400/225', title: 'Rock Clásico - Medley', duration: '5:30' },
    { id: 4, thumbnail: '/api/placeholder/400/225', title: 'Show Completo - Resumen', duration: '2:15' }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
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

        {activeTab === 'photos' && (
          <div className="photos-container">
            <div className="photos-grid">
              {displayedPhotos.map((photo) => (
                <div key={photo.id} className={`photo-item ${photo.category}`}>
                  <img src={photo.src} alt={photo.alt} />
                  <div className="photo-overlay">
                    <span className="photo-title">{photo.alt}</span>
                  </div>
                </div>
              ))}
            </div>
            {photos.length > 4 && (
              <div className="show-more-container">
                <button 
                  className="show-more-btn"
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                >
                  {showAllPhotos ? 'Ver menos fotos' : 'Ver más fotos'}
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="videos-grid">
            {videos.map((video) => (
              <div key={video.id} className="video-item" onClick={() => openVideoModal(video)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <div className="play-button">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeVideoModal}>×</button>
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="modal-title">{selectedVideo.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
