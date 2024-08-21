import styles from "./Quote.module.css";
import phone from "../../assets/phone.png";
import emailpic from "../../assets/email.png";
import wechat from "../../assets/wechat.png";
import React, { useState, FormEvent } from 'react';



function Quote() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [scale, setScale] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const quote={name,email,service,scale,details}
    console.log(quote);
    fetch("http://localhost:8080/quote/add",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(quote)
    }).then(() =>{
      console.log("new quote added")})
    }
  

  return (
    <div className={styles.quoteCard}>
      <div className={styles.Contacts}>
      <div className={styles.contactSection}>
          <h1 className={styles.contactsTitle}>CONTACT US</h1>
          <h1 className={styles.contactsSub}>And Get A Free Quote</h1>
          <p className={styles.descriptions}>
            We are experienced in all fields dealing with security. Do not be
            afraid to reach out to our specialists.
          </p>

          <h4 className={styles.contactsSubtitle}>Call Us At</h4>
          <div className={styles.contacts}>
            <img className={styles.image} src={phone} alt="Phone" />
            <h4 className={styles.contactsDescription}>778-628-7806</h4>
          </div>

          <h4 className={styles.contactsSubtitle}>Email Us At</h4>
          <div className={styles.contacts}>
            <img className={styles.image} src={emailpic} alt="Email" />
            <h4 className={styles.contactsDescription}>
              EasyAnTechnologies@gmail.com
            </h4>
          </div>

          <h4 className={styles.contactsSubtitle}>Social</h4>
          <div className={styles.contacts}>
            <img className={styles.image} src={wechat} alt="Location" />
            <h4 className={styles.contactsDescription}>w303153389</h4>
          </div>
        </div>
      </div>

      <div className={styles.Quotes}>
        <form onSubmit={handleSubmit}>
          <div className={styles.pInfo}>
            <div className={styles.pInfoSub}>
              <h4>Name</h4>
              <input
                type="text"
                className={styles.inputBox}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.pInfoSub}>
              <h4>Email</h4>
              <input
                type="email"
                className={styles.inputBox}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h4 className={styles.pInfoSub}>Type of Service</h4>
            <select
              className={styles.dropDown}
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="">Select a service</option>
              <option value="consulting">Consulting</option>
              <option value="installation">Installation</option>
              <option value="maintenance">Maintenance</option>
              <option value="repair">Repair</option>
            </select>
          </div>

          <div>
            <h4 className={styles.pInfoSub}>Scale</h4>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="Commercial"
                  checked={scale === "Commercial"}
                  onChange={(e) => setScale(e.target.value)}
                />
                Commercial
              </label>
              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="Multi-Residential"
                  checked={scale === "Multi-Residential"}
                  onChange={(e) => setScale(e.target.value)}
                />
                Multi-Residential
              </label>
              <label>
                <input
                  type="radio"
                  name="serviceType"
                  value="Residential"
                  checked={scale === "Residential"}
                  onChange={(e) => setScale(e.target.value)}
                />
                Residential
              </label>
            </div>
          </div>
          <div className={styles.pInfoSub}>
            <h4>Details</h4>
            <textarea
              className={styles.inputField}
              placeholder="Put more information here"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className={styles.pInfoSub}>
            <button
              type="submit"
              className={styles.submitButton}
            
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quote;