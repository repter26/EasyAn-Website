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
          <img src={install} className={styles.images} />
          <div className={styles.overlay}/>
          <h3 className={styles.h}> Security Camera Install</h3>
         
        
            
            </Link>
        
          </div>

          <div className={styles.descriptions}>
         
            <Link to="/wiring-management">
            <img src={wiring} className={styles.images} />
            <div className={styles.overlay}/>
            <h3 className={styles.h}>Wiring Management</h3>
          
           
            
           
            </Link>
          </div>

          <div className={styles.descriptions}>
            <Link to="/smart-home-install">
            <img src={home} className={styles.images} />
            <div className={styles.overlay}/>
            <h3 className={styles.h}>Smart Home Install</h3>
           
            
            
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
