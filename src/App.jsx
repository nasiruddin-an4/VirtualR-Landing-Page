import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <Features></Features>
      </div>
    </div>
  )
}

export default App