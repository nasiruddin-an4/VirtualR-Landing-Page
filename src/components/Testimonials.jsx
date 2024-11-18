import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 border-b border-neutral-700 pb-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mb-20'>What People are Saying</h2>
        <div className='flex flex-wrap justify-center'>
            {
                testimonials.map((testimonila, index) =>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 py-2 px-4'>
                        <div className='shadow-2xl rounded-md p-6 text-md border border-neutral-700 font-thin'>
                            <p>{testimonila.text}</p>
                            <div className='flex mt-8 items-center'>
                                <img className='w-12 h-12 rounded-full border border-neutral-200' src={testimonila.image} alt={testimonila.user} />
                                <div className='ml-5'>
                                    <h3>{testimonila.user}</h3>
                                    <p className='text-neutral-500 italic text-sm'>{testimonila.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Testimonials