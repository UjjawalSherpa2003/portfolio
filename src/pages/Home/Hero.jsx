import React from 'react';
import styles from './Hero.module.css';
import profileImg from '../../assets/images/hero-profile.png';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>

      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          <a href="#home">HOME</a>
          <a href="#project">PROJECT</a>
          <a href="#resume">RESUME</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      <div className={styles.contentWrapper}>

        <div className={styles.imageSection}>
          <div className={styles.circleFrame}>
            
            {/* The container holds the image and renders the glare on top of it */}
            <div 
              className={styles.profileImageContainer} 
              style={{ '--profile-mask': `url(${profileImg})` }}
            >
              <img 
                src={profileImg} 
                alt="Ujjawal Sherpa" 
                className={styles.profileImage} 
              />
            </div>

          </div>
        </div>

        <div className={styles.textSection}>
          <h2 className={styles.greeting}>HI, I'M</h2>
          <h1 className={styles.firstName}>UJJAWAL</h1>
          <h1 className={styles.lastName}>SHERPA</h1>
          <p className={styles.description}>
            DEVOPS AND CLOUD INFRASTRUCTURE ENGINEER FOCUSED ON BUILDING{' '}
            <span className={styles.highlight}>RESILIENT, HIGH-PERFORMANCE SYSTEMS</span>{' '}
            WHERE RELIABILITY IS MISSION-CRITICAL. MY WORK OPERATES AT THE INTERSECTION
            OF ADVANCED CLOUD ARCHITECTURE AND SOVEREIGN INFRASTRUCTURE, WITH A STRONG
            EMPHASIS ON <span className={span => styles.highlight}>SECURITY, COMPLIANCE,</span> AND{' '}
            <span className={styles.highlight}>DECENTRALIZED RESILIENCE</span>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;