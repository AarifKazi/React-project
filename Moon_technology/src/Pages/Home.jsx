import React from 'react'
import Heroslider from '../Components/Heroslider'
import Servicecard from '../Components/Servicecard'
import ProjectsShowcase from '../Components/ProjectsShowcase'
import ResponsiveShowcase from '../Components/ResponsiveShowcase'
import OurChooseUs from '../Components/Ourchoose'
import Review from '../Components/Review'
import Counter from '../Components/Counter'

function Home() {
  return (
    <div>
        <Heroslider/>
        <Counter/>
        <Servicecard/>
        <ResponsiveShowcase/>
        <ProjectsShowcase/>
        <OurChooseUs/>
        <Review/>
    </div>
  )
}

export default Home
