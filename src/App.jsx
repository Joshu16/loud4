import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Repertoire from './components/Repertoire';
import Gallery from './components/Gallery';
import RecentEvents from './components/RecentEvents';
import WhyChooseUs from './components/WhyChooseUs';
import BandMembers from './components/BandMembers';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import './styles/Global.css';

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
            <About initialAnimationComplete={initialAnimationComplete} />
            <Repertoire initialAnimationComplete={initialAnimationComplete} />
            <Gallery initialAnimationComplete={initialAnimationComplete} />
            <RecentEvents initialAnimationComplete={initialAnimationComplete} />
            <WhyChooseUs initialAnimationComplete={initialAnimationComplete} />
            <BandMembers initialAnimationComplete={initialAnimationComplete} />
            <Contact initialAnimationComplete={initialAnimationComplete} />
            <FAQ initialAnimationComplete={initialAnimationComplete} />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
