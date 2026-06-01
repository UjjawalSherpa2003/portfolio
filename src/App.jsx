import React from 'react';
import EntryScreen from './pages/Home/EntryScreen'; 
import Hero from './pages/Home/Hero';
import About from './pages/Home/About';
import Skills from './pages/Home/Skills';
import ColorBends from './components/ColorBends';
import cherryBlossomBg from './assets/images/cherryblossom.png';
import './styles/global.css';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>

      {/* Fixed animated background layer */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0
      }}>
        <ColorBends
          colors={["#9a55f7", "#000000", "#9a55f7", "#000000"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={2}
          intensity={1.5}
          bandWidth={6}
          transparent={false}
          autoRotate={0}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
          }}
        />
      </div>

      {/* Sticky Entry Block Anchor */}
      <div style={{ width: '100%', display: 'block', clear: 'both' }}>
        <EntryScreen />
      </div>

      {/* 🔄 OVERLAY CONTAINER CLOSING SHUTTER 
          Higher z-index layer forces content to roll natively up and over the entry page */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%',
        background: 'transparent'
      }}>
        
        <div style={{ width: '100%', display: 'block', clear: 'both' }}>
          <Hero />
        </div>

        {/* Cherry Blossom Baseline Integration Graphic */}
        <img
          src={cherryBlossomBg}
          alt=""
          style={{
            position: 'absolute',
            top: '100vh', /* Automatically aligns with the Hero base boundary height */
            left: '0%',
            width: '70%',
            pointerEvents: 'none',
            zIndex: 12,
          }}
        />

        <div style={{ width: '100%', display: 'block', clear: 'both' }}>
          <About />
        </div>
        <div style={{ width: '100%', display: 'block', clear: 'both' }}>
          <Skills />
        </div>
      </div>

    </div>
  );
}

export default App;