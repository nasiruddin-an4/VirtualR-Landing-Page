import React from 'react'
import {features} from '../constants'

const Features = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800'>
         <div className='text-center'>
            <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase'>Features</span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide'>Easily build <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>your code</span></h2>
         </div>
         <div className="flex flex-wrap mt-10 lg:mt-20">
            {
              features.map((feature, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                  <div className='flex'>
                    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-800 text-orange-700 justify-center items-center rounded-full'>
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className='mt-1 mb-6 text-xl font-medium'>{feature.text}</h5>
                      <p className='text-neutral-500 mb-20'>{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
         </div>
    </div>
  )
}

export default Features