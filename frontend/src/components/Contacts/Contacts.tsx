import styles from "./Contacts.module.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import wechat from "../../assets/wechat.png";

function Contacts() {
  return (
    <>
      <div className={styles.contactsCard}>
        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>SERVICES</a>
          <a className={styles.contactsDescription}>Sercurity Camera Install</a>
          <a className={styles.contactsDescription}>Wiring Management</a>
          <a className={styles.contactsDescription}>Smart Home Install</a>
        </div>

        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>LOCATIONS</a>
          <a className={styles.contactsDescription}>Abbotsford</a>
          <a className={styles.contactsDescription}>Burnaby</a>
          <a className={styles.contactsDescription}>Coquitlam</a>
          <a className={styles.contactsDescription}>Delta</a>
          <a className={styles.contactsDescription}>Langley</a>
          <a className={styles.contactsDescription}>New Westminster</a>
          <a className={styles.contactsDescription}>North Vancouver</a>
          <a className={styles.contactsDescription}>Richmond</a>
          <a className={styles.contactsDescription}>Surrey</a>
          <a className={styles.contactsDescription}>Vancouver</a>
          <a className={styles.contactsDescription}>West Vancouver</a>
        </div>

        <div className={styles.contactSection}>
        <a className={styles.contactsTitle}>PAGES</a>
          <a className={styles.contactsDescription}>About</a>
          <a className={styles.contactsDescription}>Meet The Professional</a>
          <a className={styles.contactsDescription}>What We Do</a>
          <a className={styles.contactsDescription}>Get A Quote</a>
        </div>

        <div className={styles.contactSection}>
          <a className={styles.contactsTitle}>CONTACT</a>

          <div className={styles.contacts}>
            <img className={styles.image} src={phone} alt="Phone"/>
            <h4 className={styles.contactsDescription}>778-628-7806</h4>
          </div>

          <div className={styles.contacts}>
            <img className={styles.image} src={email} alt="Email"/>
            <h4 className={styles.contactsDescription}>EasyAnTechnologies@gmail.com</h4>
          </div>

          <div className={styles.contacts}>
            <img className={styles.image} src={wechat} alt="Location"/>
            <h4 className={styles.contactsDescription}>w303153389</h4>
          </div>

    
        </div>
      </div>
    </>
  );
}

export default Contacts;