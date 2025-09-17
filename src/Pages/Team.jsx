import React, { useState } from "react";
import NavDown from "../assets/NavDown";
import CarouselCont from "../assets/CarouselCont";
import Teampic from "../assets/pics/Teampic.jpg";
import MemberCard from "../assets/TeamComp/MemberCard";
import andrebriggs from "../assets/pics/team/andrebriggs.jpg";
import robertoclavenger from "../assets/pics/team/robertoclavenger.jpg";
import susieross from "../assets/pics/team/susieross.jpg";
import robertodavis from "../assets/pics/team/robertodavis.jpg";
import michaelwill from "../assets/pics/team/michaelwill.jpg";
import Filter from "../assets/TeamComp/Filter";

function Team() {
  const [cardSelected, setCardSelected] = useState("");

  return (
    <>
      <NavDown
        homeact=""
        aboutact=""
        contactact=""
        serviceact=""
        projectact=""
        teamAct="active-link"
      />
      <CarouselCont
        displaybut="none"
        imgsrc={Teampic}
        smalltxt="Teamwork divides the task and multiplies the success."
        bigtxt1="Our Team"
        bigtxt2=""
      />

      <Filter cardSelected={cardSelected} setCardSelected={setCardSelected} />

      <div className="members d-flex flex-wrap gap-5 align-items-center justify-content-center mb-5 p-5 bg-dark">
        {(!cardSelected || cardSelected === "founder") && (
          <MemberCard
            imgsrc={robertoclavenger}
            title="Roberto Clavenger"
            caption="Founder & CEO"
          />
        )}

        {(!cardSelected || cardSelected === "office-manager") && (
          <MemberCard
            imgsrc={susieross}
            title="Susie Ross"
            caption="Office Manager"
          />
        )}

        {(!cardSelected || cardSelected === "industrial-cleaner") && (
          <MemberCard
            imgsrc={andrebriggs}
            title="Andre Briggs"
            caption="Industrial Cleaner"
          />
        )}

        {(!cardSelected || cardSelected === "contract-cleaner") && (
          <MemberCard
            imgsrc={robertodavis}
            title="Roberto Davis"
            caption="Contract Cleaner"
          />
        )}

        {(!cardSelected || cardSelected === "industrial-cleaner") && (
          <MemberCard
            imgsrc={michaelwill}
            title="Michael Will"
            caption="Industrial Cleaner"
          />
        )}
      </div>
    </>
  );
}

export default Team;