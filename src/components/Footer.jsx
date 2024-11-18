import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <h4 className='text-md font-semibold mb-5 text-neutral-400'>Resourches</h4>
                <ul>
                    {
                        resourcesLinks.map((item, index) => (
                            <li key={index} className='mt-1'>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h4 className='text-md font-semibold mb-5 text-neutral-400'>Platform</h4>
                <ul>
                    {
                        platformLinks.map((item, index) => (
                            <li key={index} className='mt-1'>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <h4 className='text-md font-semibold mb-5 text-neutral-400'>Community</h4>
                <ul>
                    {
                        communityLinks.map((item, index) => (
                            <li key={index} className='mt-1'>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    </footer>
  )
}

export default Footer