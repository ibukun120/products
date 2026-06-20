import React from 'react'
import BeliNav from '../component/beli/BeliNav'
import Hero from '../component/beli/Hero'
import Categories from '../component/beli/Category'
import FlashSale from '../component/beli/FlashSales'
import ProductGrid from '../component/beli/ProductGrid'
import Beyond from '../component/beli/Beyond'

const page = () => {
  return (
    <div className='bg-white'>
        <BeliNav />
        <Hero/>
        <Categories/>
        <FlashSale/>
        <ProductGrid/>
        <Beyond/>
    </div>
  )
}

export default page