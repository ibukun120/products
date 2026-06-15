"use client";
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    const [search, setSearch] = React.useState('')
    console.log('search', search)
  return (
    <div className='flex items-center justify-between px-10 py-4 bg-gray-100/70 fixed w-full top-0 z-50'>
        <div className='text-2xl font-bold uppercase tracking-wider'>Nav</div>

{/* <div className='flex items-center gap-2'>
    <p>Search</p>
    <input 
        type="text" 
        placeholder="Search..." 
        className='bg-white text-gray-700 placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-2xl px-4'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
</div> */}

        <div className='flex items-center gap-6 text-gray-700 font-medium'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
        </div>
    </div>
  )
}

export default Nav