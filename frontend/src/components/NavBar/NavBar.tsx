import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/Logo.png";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
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

  const handleNavigation = (path: string, sectionId: string) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img className={`${styles.logoImg} ${scrolled ? styles.scrolled : ""}`} src={logo} alt="Logo" />
      </div>
      <div className={`${styles.navBarButton} ${scrolled ? styles.scrolled : ""}`}>
        <span
          className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}
          onClick={() => handleNavigation("/", "Home")}
        >
          Home
        </span>
        <span
          className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}
          onClick={() => handleNavigation("/", "About")}
        >
          About
        </span>
        <span
          className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}
          onClick={() => handleNavigation("/", "Services")}
        >
          Services
        </span>
        <span
          className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}
          onClick={() => handleNavigation("/", "Quote")}
        >
          Quote
        </span>
        <span
          className={`${styles.btnText} ${scrolled ? styles.scrolled : ""}`}
          onClick={() => handleNavigation("/", "Contacts")}
        >
          Contacts
        </span>
      </div>
    </div>
  );
}

export default NavBar;
