import styles from "./Tim.module.css";
import profileImage from "../../assets/tim_profile.jpg";
import redCross from "../../assets/redCross.png";
import safety from "../../assets/safety.png"
function Tim() {
  return (
    <>
      <div className={styles.timCard}>
        <div>
          <h3 className={styles.intro}> Meet The Specialist</h3>
          <img className={styles.profileImage} src={profileImage} />
          <h2 className={styles.timName}> Tim Lu</h2>
        </div>
        <div>
          
          <p className={styles.about}>
            Meet Tim, the hardworking and dedicated technician-owner of EasyAn.
            With a passion for security and a commitment to excellence, Tim
            brings a wealth of experience and expertise to every project.
            Equipped with all the latest tools and technology, he ensures that
            every installation is executed flawlessly and meets the highest
            standards. Tim's hands-on approach and attention to detail guarantee
            that your security needs are addressed with precision and care.
            Under his leadership, EasyAn continues to provide reliable and
            customized security solutions that give you peace of mind. Trust Tim
            to safeguard your home or business with unparalleled dedication and
            skill.
          </p>
          <div className={styles.certifications}>
          <img className= {styles.certification }src={redCross}/>
          <img className= {styles.certification }src={safety}/>
          </div>
         
         
            
          
        </div>
      </div>
    </>
  );
}

export default Tim;
