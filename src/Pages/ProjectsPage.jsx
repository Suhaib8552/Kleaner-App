import React from 'react'
import NavDown from '../assets/NavDown'
import CarouselCont from '../assets/CarouselCont'
import office_cleaning from '../assets/pics/office_cleaning.jpg'
import Project from '../assets/HomeSpecifiedComp/Project'
import { Helmet } from 'react-helmet'

function ProjectsPage() {
  return (
    <>
    <Helmet>
      <title>Projects | Kleaner-App</title>
      <meta name='description' content='Latest Projects' />
    </Helmet>
    <NavDown homeact="" aboutact="" contactact="" serviceact="" projectact="active-link" teamAct="" />
    <CarouselCont displaybut="none" imgsrc={office_cleaning} smalltxt="Selection of our work" bigtxt1='Latest Projects' bigtxt2='' />
    <Project />
    </>
  )
}

export default ProjectsPage