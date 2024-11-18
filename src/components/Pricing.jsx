import React from 'react'
import { features, pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <div className='text-center text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide'>
            <h2>Pricing</h2>
        </div>
        <div className='flex flex-wrap'>
            {
                pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                        <div className='p-10 border border-neutral-600 rounded-xl'>
                            <p className='text-3xl mb-8'>
                                {option.title}
                                {option.title === "Pro" && <span className='text-xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ml-2 mb-4'> (Most Popular)</span>}
                            </p>
                            <p>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-neutral-500 tracking-tight'>/Months</span>
                            </p>
                            <ul>
                                {
                                    option.features.map((feature, index) => (
                                        <li key={index} className='flex mt-8 items-center'>
                                            <CheckCircle2></CheckCircle2>
                                            <span className='ml-2'>{feature}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <a href="#" className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-neutral-600 rounded-md hover:bg-orange-800 duration-300'> Subscribe</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing