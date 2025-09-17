import React from 'react'
import NavDown from '../assets/NavDown'
import CarouselCont from '../assets/CarouselCont'
import warehouse_cleaning from "../assets/pics/warehouse_cleaning.jpg"
import About from '../assets/HomeSpecifiedComp/About'
import { Helmet } from 'react-helmet'


function AboutPage() {
  return (
    <>
    <Helmet>
      <title>About Us | Kleaner-App</title>
      <meta name='description' content='Providing services since 1989' />
    </Helmet>

    
    <NavDown homeact="" aboutact="active-link" contactact="" serviceact="" projectact="" teamAct="" />
    <CarouselCont displaybut="none" imgsrc={warehouse_cleaning} smalltxt="Providing services since 1989" bigtxt1="We're an Industrial" bigtxt2='Cleaning Company' />
    <About />
    </>
  )
}

export default AboutPage