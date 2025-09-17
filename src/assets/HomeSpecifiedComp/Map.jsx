import React from 'react'

function Map() {
  return (
    <>
    <div className="map-box w-full mb-5" style={{height:"70vh"}}>

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.066200910156!2d-73.96815832449789!3d40.782558733293946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sin!4v1756316773453!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0, height: "70vh" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>



        
    </div>
    </>
  )
}

export default Map