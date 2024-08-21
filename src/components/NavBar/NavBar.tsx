import styles from "./NavBar.module.css";
import logo from "../../assets/Logo.png";
import React, { useState, useEffect } from "react";
function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) { // Change this value to your desired scroll position
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img className={`${styles.logoImg} ${scrolled ? styles.scrolled : ""}`} src={logo} />
      </div>
      <div className={`${styles.navBarButton} ${scrolled ? styles.scrolled : ""}`}>
        <a href="#Home" className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}>Home</a>
        <a href="#About" className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}>About</a>
        <a href="#Services" className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}>Services</a>
        <a href="#Quote" className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}>Quote</a>
        <a href="#Contacts" className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}>Contacts</a>
      </div>
    </div>
  );
}

export default NavBar;
