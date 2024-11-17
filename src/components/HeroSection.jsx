import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div>
        <div className="flex flex-col items-center mt-6 lg:mt-10">
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-semibold'>ViertualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>for Developers</span></h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni iste ipsa laudantium? Quo voluptatibus ad cumque, assumenda, sint eveniet, neque aliquam nostrum sapiente consequuntur suscipit fuga voluptas non sunt?</p>
            <div className='flex justify-center my-10 space-x-6'>
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md'> Sign for free</a>
                <a href="#" className='py-3 px-4 border rounded-md'> Documentation</a>
            </div>
            <div className='flex mt-5 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video1} />
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video2} />
                </video>
            </div>
        </div>
    </div>
  )
}

export default HeroSection