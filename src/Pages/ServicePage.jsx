import React from 'react'
import NavDown from '../assets/NavDown'
import high_access_cleaning from '../assets/pics/high_access_cleaning.jpg' 
import CarouselCont from '../assets/CarouselCont'
import HomeService from '../assets/HomeSpecifiedComp/HomeService'
import { Helmet } from 'react-helmet'

function ServicePage() {
  return (
    <>
    <Helmet>
      <title>Services | Kleaner-App</title>
      <meta name='description' content='Our Services' />
    </Helmet>
    <NavDown homeact="" aboutact="" contactact="" serviceact="active-link" projectact="" teamAct="" />
    <CarouselCont  displaybut="none" imgsrc={high_access_cleaning} smalltxt="Professional Cleaning " bigtxt1='Our Services' bigtxt2='' />
    <HomeService />
    </>
  )
}

export default ServicePage