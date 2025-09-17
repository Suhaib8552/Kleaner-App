import React from "react";
import hospitality_cleaning from "../pics/hospitality_cleaning.jpg";
import styles from './About.module.css'

function About() {
  return (
    <>
      <div className="card    my-5 " style={{padding:"3% 0"}}>
        <div className="card1-body border-none outline-none">
          <div
            className="item px-5"
            style={{ width: "100vw", paddingLeft: "10%" }}
          >
            <img
              src={hospitality_cleaning}
              className={styles.aboutimage}
              alt="Movie"
              
            />

            <div className={`text2 ${styles.textcont} `}>
                <h5 className="card1" style={{color:"#4294e1"}}>Our Advantages</h5>
            <h1>About our Company</h1>
            <p>
              Founded 30 years ago The Kleaner has built up a level of expertise
              to deliver the services and result for your cleaning requirements.
              <br /><br />
              Our business began to fill a void in the region for industrial
              cleaning services.
              <br />
              We are a small company that treats every client like family. We’ll
              always put customers first and go the extra mile.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
