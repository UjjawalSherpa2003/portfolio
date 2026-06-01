import React, { useState, useEffect } from 'react';
import styles from './EntryScreen.module.css';
import entryBgImage from '../../assets/images/cool.png'; // Full Canva image verbatim
import entryCutoutImage from '../../assets/images/cool-cut.png'; // Transparent portrait file

const EntryScreen = () => {
  const [opacity, setOpacity] = useState(1);

  // Tracks scroll to handle the slick dissolve effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewHeight = window.innerHeight;
      const newOpacity = Math.max(0, 1 - scrollY / (viewHeight * 0.8));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className={styles.entryContainer} 
      style={{ opacity: opacity }}
    >
      {/* Layer 1: Base Background Shield */}
      <img 
        src={entryBgImage} 
        alt="" 
        className={styles.bgImageBase} 
      />

      {/* 🆕 Layer 1.5: Side Typography (Restored Name Split) */}
      <div className={styles.titleContainer}>
        <span className={styles.firstName}>UJJAWAL</span>
        <span className={styles.lastName}>SHERPA</span>
      </div>

      {/* Layer 2: White Layout Framing & Links */}
      <div className={styles.frameBorder}>
        <div className={styles.navBar}>
          <div className={styles.navLeft}>
            <a href="#linkedin">LINKEDIN</a>
            <span>/</span>
            <a href="#github">GITHUB</a>
            <span>/</span>
            <a href="#insta">INSTA</a>
          </div>
          <div className={styles.navRight}>
            <a href="#projects">PROJECT</a>
            <a href="#resume">RESUME</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>

      {/* Layer 3: 3D Foreground Cutout Overlay */}
      <img 
        src={entryCutoutImage} 
        alt="Ujjawal Sherpa Pop Out" 
        className={styles.fgImageCutout} 
      />
    </section>
  );
};

export default EntryScreen;