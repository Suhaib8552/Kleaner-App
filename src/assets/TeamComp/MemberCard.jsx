import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

function MemberCard({title,caption,imgsrc}) {
  return (
    <>
    <div className="card bg-base-100 w-80  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={imgsrc}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p style={{fontSize:"20px",color:"darkslategrey"}}>{caption}</p>
    <div className="card-actions">
      <button className="btn btn-dark" style={{borderRadius:"50%",height:"50px",width:"50px",cursor:"pointer"}}><FontAwesomeIcon icon={faX} /></button>
      <button className="btn btn-dark" style={{borderRadius:"50%",height:"50px",width:"50px",cursor:"pointer"}} ><FontAwesomeIcon icon={faFacebook} /></button>
    </div>
  </div>
</div>
    </>
  )
}

export default MemberCard