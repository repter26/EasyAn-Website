import React, { useEffect } from 'react';
import styles from "./About.module.css";
import profileImage from "../../assets/Logo.png";

function About() {
  useEffect(() => {
    const handleScroll = () => {
      // Cast to HTMLElement to access the style property
      const aboutCard = document.querySelector(`.${styles.aboutCard}`) as HTMLElement;
      if (aboutCard) {
        const scrollPosition = window.scrollY;
        aboutCard.style.backgroundPositionY = (scrollPosition * 0.8) + 'px'; 
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className={styles.aboutCard}>
      <h2 className={styles.aboutTitle}>FAST. EASY. SAFE.</h2>
      <div className={styles.divider}></div>
      <p className={styles.about}>
        Welcome to EasyAn, your trusted partner in security solutions.
        Established with a vision to provide top-notch security
        installations, EasyAn combines cutting-edge technology with
        exceptional service to safeguard your home and business. Our
        experienced team of professionals is dedicated to delivering
        customized security systems that meet your specific needs, ensuring
        peace of mind and protection around the clock.
      </p>
    </div>
  );
}

export default About;
