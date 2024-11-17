import React, { useState } from 'react'
import logo from '..//assets/logo.png'
import {navItems} from '../constants'
import {Menu, X} from 'lucide-react'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState (false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };


  return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className="container mx-auto relative text-sm px-5">
                <div className="flex justify-between items-center">
                    <div className="items-center flex flex-shrink-0">
                        <img className='w-10 h-10 mr-2' src={logo} alt="Logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            {
                                navItems.map((item, index) => (
                                    <li key={index} >
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='hidden lg:flex space-x-6 items-center'>
                        <a href="#" className='py-2 px-3 border rounded-md'> Sign In</a>
                        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X></X> : <Menu></Menu>}
                        </button>
                    </div>
                </div>

                {mobileDrawerOpen && (
                        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className='py-4'>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className='space-x-6 items-center mt-10'>
                                <a href="#" className='py-2 px-3 border rounded-md'> Sign In</a>
                                <a href="#" className='bg-gradient-to-t from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an Account</a>
                            </div>

                        </div>
                    )
                }

            </div>
        </nav>
  )
}

export default Navbar