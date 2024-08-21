import styles from "./Services.module.css";
import install from "../../assets/install.webp";
import wiring from "../../assets/wiring.webp";
import home from "../../assets/smartHome.jpg";
import { Link } from 'react-router-dom';
function Services() {
  return (
    <>
      <div className={styles.servicesCard}>
        <div>
          <h3 className={styles.intro}> What We Do</h3>
        </div>

        <div className={styles.servicesdescriptions}>
       
          <div className={styles.descriptions}>
         
          <Link to="/security-camera-install">
          <h3 className={styles.h}> Security Camera Install</h3>
            <div className={styles.overlay}/>
            <img src={install} className={styles.images} />
            </Link>
        
          </div>

          <div className={styles.descriptions}>
         
            <Link to="/wiring-management">
            <h3 className={styles.h}>Wiring Management</h3>
           <div className={styles.overlay}/>
            <img src={wiring} className={styles.images} />
           
            </Link>
          </div>

          <div className={styles.descriptions}>
            <Link to="/smart-home-install">
            <h3 className={styles.h}>Smart Home Install</h3>
            <div className={styles.overlay}/>
            <img src={home} className={styles.images} />
            
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
