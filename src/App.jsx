import React from 'react';
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
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Repertoire />
      <Gallery />
      <RecentEvents />
      <WhyChooseUs />
      <BandMembers />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
