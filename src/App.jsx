import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <Features></Features>
        <Workflow></Workflow>
        <Pricing></Pricing>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App