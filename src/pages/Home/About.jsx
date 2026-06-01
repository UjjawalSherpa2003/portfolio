import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h2 className={styles.heading}>ABOUT ME</h2>
        <div className={styles.bioBlock}>
          <p>WITH OVER TWO YEARS OF EXPERIENCE IN CLOUD, DEVOPS, AND AUTOMATION, I SPECIALIZE IN BUILDING RESILIENT AND RELIABLE CLOUD SYSTEMS THAT CLIENTS CAN TRUST WITHOUT WORRIES.</p>
          <p>I HOLD A BACHELOR OF COMPUTER APPLICATIONS (B.C.A) FROM RAJASTHAN, INDIA. I GENUINELY LOVE ARCHITECTING INFRASTRUCTURE THAT IS SCALABLE, SECURE, AND BUILT TO LAST.</p>
          <p>IF YOU NEED HELP BRINGING RELIABLE CLOUD SOLUTIONS TO LIFE, LET'S CONNECT.</p>
        </div>
        <button className={styles.ctaButton}>CONTACT ME</button>
      </div>
    </section>
  );
};

export default About;