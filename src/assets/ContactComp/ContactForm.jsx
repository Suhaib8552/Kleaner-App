import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import FormElement from "./FormElement";
import styles from './ContactForm.module.css'

function ContactForm() {

  return (
    <>
      <div className={`container w-full d-flex my-5 ${styles.container}`} >
        <div className="form w-50 d-flex flex-column flex-wrap me-3 text-wrap mb-4">
          <h2>Send us a message</h2>
          <p className="text-secondary text-wrap">
            Feel free to get in touch by phone or through the contact form
            below. Your message will be send directly to our staff who will
            answer as soon as they can.
          </p>
          <FormElement />

          
        </div>

        <div className="location d-flex flex-column ms-3">
          <h2 className={`container ${styles.head}`} >Office Location</h2>

          <div className={`container my-4 ${styles.mapAlign}`} >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.066200910156!2d-73.96815832449789!3d40.782558733293946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1756399595232!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{border:"0"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              
            ></iframe>
          </div>

          <div className="address d-flex my-4 " >

            <div className="container d-flex-column flex-wrap mb-2">
                <h3>Company Address</h3>
                <p className="text-secondary">1109 Longview Avenue,<br />New York City, NY, 94043<br /> United States</p>
                <div className="icons d-flex">
                    <FontAwesomeIcon className="text-xl" icon={faFacebook} />
                    <FontAwesomeIcon className="text-xl" icon={faXTwitter} />
                    <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
                </div>
            </div>

            <div className="container d-flex-column flex-wrap mb-2">
                <h3>Contact Details</h3>
                <p className="text-secondary">
                    + (123) 123 – 354 – 923<br />fax: (12) 321 – 345 – 920
                </p>
                <a href="#" style={{textDecoration:"none"}}>info@thecleaner.com</a><br />
                <a href="#" style={{textDecoration:"none"}}>www.thecleaner.com</a>
                
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ContactForm;
