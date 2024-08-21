import styles from "./About.module.css";
import profileImage from "../../assets/Logo.png";
function About() {
  return (
    <>
      <div  className={styles.aboutCard}>
        
          
          <h2 className={styles.aboutTitle}> FAST. EASY. SAFE.</h2>
          <div className = {styles.divider}></div>
        
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
    </>
  );
}

export default About;
