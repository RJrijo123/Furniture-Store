import React from 'react'
import Hero from '../Components/Hero/Hero'
import NewCollections from '../Components/NewCollections/NewCollections'
import BrowseRange from '../Components/BrowseRange/BrowseRange'
import Gallery from '../Components/Gallery/Gallery'
import Inspiration from '../Components/Inspiration/Inspiration'

const Home = () => {
  return (
    <div>
        <Hero/>
        <BrowseRange/>
        <NewCollections/>
        <Inspiration/>
        <Gallery/>
    </div>
  )
}

export default Home