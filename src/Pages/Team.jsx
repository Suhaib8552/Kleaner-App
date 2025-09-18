import React, { useState } from 'react'
import NavDown from '../assets/NavDown'
import CarouselCont from '../assets/CarouselCont'
import Teampic from '../assets/pics/Teampic.jpg'
import MemberCard from '../assets/TeamComp/MemberCard'
import andrebriggs from '../assets/pics/team/andrebriggs.jpg'
import robertoclavenger from '../assets/pics/team/robertoclavenger.jpg'
import susieross from '../assets/pics/team/susieross.jpg'
import robertodavis from '../assets/pics/team/robertodavis.jpg'
import michaelwill from '../assets/pics/team/michaelwill.jpg'
import Filter from '../assets/TeamComp/Filter'
import shawnrobinson from '../assets/pics/team/shawnrobinson.jpg'
import shirleyhiggins from '../assets/pics/team/shirleyhiggins.jpg'
import markneel from '../assets/pics/team/markneel.jpg'

function Team() {
  const [cardSelected, setCardSelected] = useState("")

  const members = [
    { img: robertoclavenger, title: "Roberto Clavenger", caption: "Executive Director", role: "executive-director" },
    { img: susieross, title: "Susie Ross", caption: "Finance Manager", role: "finance-manager" },
    { img: andrebriggs, title: "Andre Briggs", caption: "Supervisor", role: "Supervisor" },
    { img: robertodavis, title: "Roberto Davis", caption: "Housekeeper", role: "housekeeping-boys" },
    { img: michaelwill, title: "Michael Will", caption: "Housekeeper", role: "housekeeping-boys" },
    { img: shawnrobinson, title: "Shawn Robinson", caption: "Executive Manager", role: "executive-manager" },
    { img: shirleyhiggins, title: "Shirley Higgins", caption: "Field Executive", role: "field-executive" },
    { img: markneel, title: "Mark Neel", caption: "Field Executive", role: "field-executive" },
  ]

  const filteredMembers =
    cardSelected === "" ? members : members.filter(m => m.role === cardSelected)

  return (
    <>
      <NavDown homeact="" aboutact="" contactact="" serviceact="" projectact="" teamAct="active-link" />
      <CarouselCont
        displaybut="none"
        imgsrc={Teampic}
        smalltxt="Teamwork divides the task and multiplies the success."
        bigtxt1='Our Team'
        bigtxt2=''
      />

      <Filter cardSelected={cardSelected} setCardSelected={setCardSelected} />

      <div className="members d-flex flex-wrap gap-5 align-items-center justify-content-center mb-5 p-5 bg-dark">
        {filteredMembers.map((m, idx) => (
          <MemberCard key={idx} imgsrc={m.img} title={m.title} caption={m.caption} />
        ))}
      </div>
    </>
  )
}

export default Team
