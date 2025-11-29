import React, { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import IntroAnimation from './components/IntroAnimation';
import './styles/Global.css';

// Lazy loading de componentes pesados (no críticos para above-the-fold)
const About = lazy(() => import('./components/About'));
const Repertoire = lazy(() => import('./components/Repertoire'));
const Gallery = lazy(() => import('./components/Gallery'));
const RecentEvents = lazy(() => import('./components/RecentEvents'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const BandMembers = lazy(() => import('./components/BandMembers'));
const Contact = lazy(() => import('./components/Contact'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de loading simple
const LoadingPlaceholder = () => (
  <div style={{ minHeight: '200px' }} aria-hidden="true" />
);

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setShowMainContent(true);
    // Activar las animaciones inmediatamente
    setInitialAnimationComplete(true);
  };

  return (
    <div className="App">
      {!showMainContent && <IntroAnimation onAnimationComplete={handleAnimationComplete} />}
      {showMainContent && (
        <>
          <Header initialAnimationComplete={initialAnimationComplete} />
          <div className="main-content fade-in">
            <Suspense fallback={<LoadingPlaceholder />}>
              <About initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <Repertoire initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <Gallery initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <RecentEvents initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <WhyChooseUs initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <BandMembers initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <Contact initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <FAQ initialAnimationComplete={initialAnimationComplete} />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder />}>
              <Footer />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
