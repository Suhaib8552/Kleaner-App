import React from 'react'
import Header from '../assets/Header'
import CarouselCont from '../assets/CarouselCont'
import NavDown from '../assets/NavDown'
import Footer from '../assets/Footer'
import HomeOpt from '../assets/HomeSpecifiedComp/HomeOpt'
import HomeService from '../assets/HomeSpecifiedComp/HomeService'
import Project from '../assets/HomeSpecifiedComp/Project'
import About from '../assets/HomeSpecifiedComp/About'
import Map from '../assets/HomeSpecifiedComp/Map'
import ContactSec from '../assets/HomeSpecifiedComp/ContactSec'
import ExampleCarouselImage from '../assets/pics/ExampleCarouselImage.jpg'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Helmet>
      <title>Kleaner-App</title>
      <meta name='description' content='The Best Cleaning Contracts' />
    </Helmet>
      
      <NavDown homeact="active-link" aboutact="" contactact="" serviceact="" projectact="" teamAct="" />
      <CarouselCont displaybut="block" imgsrc={ExampleCarouselImage} smalltxt="The Best Cleaning Contracts " bigtxt1='The Kleaner is to make' bigtxt2='your business shine.' />
      <HomeOpt />
      <HomeService />
      <Project />
      <About />
      <ContactSec />
      <Map />
      
      
      
    </>
  )
}

export default Home