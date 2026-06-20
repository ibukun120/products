import React from 'react'
import Container from './Container'
import { Bell, BriefcaseBusiness, Phone, Smartphone } from 'lucide-react'
import Link from 'next/link'

const BeliNav = () => {
  return (
    <div>
        <Container className='!py-2 border-b border-b-zinc-200'>
            <div className='flex justify-between items-center text-zinc-400 px-0 lg:px-12'>
                {/* left side */}
                <div className='flex items-center gap-1'>
                    <span> <Smartphone size={14} /> </span>
                    <p className='font-semibold'>Download BeliBeli App</p>
                </div>
                {/* right side */}
                <div className='flex items-center gap-6 justify-center'>
                    <ul className='flex items-center gap-4 text-sm font-semibold'>
                        <li className='cursor-pointer hover:text-zinc-600 transition-all duration-300'>Miltra BeliBeli</li>
                        <li className='cursor-pointer hover:text-zinc-600 transition-all duration-300'>About BeliBeli</li>
                        <li className='cursor-pointer hover:text-zinc-600 transition-all duration-300'>BeliBeli Care</li>
                        <li className='cursor-pointer hover:text-zinc-600 transition-all duration-300'>Promo</li>
                    </ul>

                    <ul className='flex items-center text-sm font-semibold text-zinc-700'>
                        <li className='cursor-pointer hover:text-zinc-600 transition-all duration-300 font-bold px-4 border-l border-l-zinc-400'>Sign Up</li>
                        <li className='cursor-pointer hover:text-zinc-600 transition-all duration-300 font-bold px-4 border-l border-l-zinc-400'>Log In</li>
                    </ul>
                </div>
            </div>
        </Container>
        <div className='py-2 border-b border-b-zinc-200  md:px-12 lg:px-20  flex justify-between items-center gap-10'>
            <Link href="/" className='text-xl font-bold'><span className='text-3xl'>B</span> BeliBeli.com</Link>
            {/* input */}
            <div className='flex items-center justify-start flex-1 py-2 border border-zinc-300 rounded-md'>
                <span className='border-r px-4'>All Category</span>
                <input type="text" placeholder='Search products or brand here...' className='w-full  lg:w-3/4  px-4 focus:outline-none focus:border-zinc-600 transition-all duration-300' />
            </div>
            {/* right side */}
            <div className='flex items-center gap-4 text-zinc-400'>
                <BriefcaseBusiness />
                <Bell />
            </div>
        </div>
    </div>
  )
}

export default BeliNav