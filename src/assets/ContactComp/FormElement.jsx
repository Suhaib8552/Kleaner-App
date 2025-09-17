import React from 'react'
import { useState } from 'react';

function FormElement() {
      const [showResult, setShowResult] = useState(false);
    
      function submitForm(e) {
        e.preventDefault();
    
        // Show success message
        setShowResult(true);
    
        // Hide message after 3 seconds
        setTimeout(() => {
          setShowResult(false);
        }, 3000);
    
        // Clear inputs
        document.querySelectorAll("input").forEach((el) => (el.value = ""));
        document.querySelector("textarea").value = "";
      }
    
  return (
    <>
    <form>
            <fieldset className="fieldset d-flex flex-wrap my-3">
              <div className="inputcon d-flex flex-column mx-2">
                <label
                  htmlFor="name"
                  className="mb-2"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Enter name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  placeholder="Your Name.."
                  style={{ color: "#333", fontSize: "18px" }}
                  required
                />
              </div>
              <div className="inputcon d-flex flex-column mx-2">
                <label
                  htmlFor="mail"
                  className="mb-2"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Enter email id:{" "}
                </label>
                <input
                  type="email"
                  id="mail"
                  className="input"
                  placeholder="Your email id.."
                  style={{ color: "#333", fontSize: "18px" }}
                  required
                />
              </div>
            </fieldset>

            <fieldset className="fieldset d-flex flex-wrap my-3">
              <div className="inputcon d-flex flex-column mx-2">
                <label
                  htmlFor="number"
                  className="mb-2"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Enter phone number:{" "}
                </label>
                <input
                  type="number"
                  id="number"
                  className="input"
                  placeholder="Your phone number.."
                  style={{ color: "#333", fontSize: "18px" }}
                  required
                />
              </div>
              <div className="inputcon d-flex flex-column mx-2">
                <label
                  htmlFor="subject"
                  className="mb-2"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Enter Subject:{" "}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input"
                  placeholder="Enter subject.."
                  style={{ color: "#333", fontSize: "18px" }}
                  
                />
              </div>
            </fieldset>

            <fieldset className="fieldset d-flex flex-wrap my-3">
              <div className="inputcon d-flex flex-column mx-2">
                <label
                  htmlFor="message"
                  className="mb-2"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  Write your message:{" "}
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="textarea w-70 h-35"
                  placeholder="Enter your message"
                  style={{ color: "#333", fontSize: "18px" }}
                  
                />
              </div>
            </fieldset>

            <button className="btn btn-primary" onClick={submitForm}>Send Message</button>
          </form>
          {showResult && (
            <div className="result mt-3">
              <p className="fw-bold text-lg">
                Thank you for filling out the form. Someone will reach out to
                you quickly!
              </p>
            </div>
          )}
    </>
  )
}

export default FormElement