import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Repertoire from './components/Repertoire';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Repertoire />
    </div>
  );
}

export default App;
