import Hero from '@/app/components/Hero'
import React from 'react'
// import Settings from './settings'
import ProductGrid from '@/app/components/ProductGrid'
import TextAndImage from '@/app/components/TextAndImage'

const Homepage = () => {
  return (
    <div className='bg-texture bg-brand-pink'>
=      <Hero/>
{/* <Settings/> */}
<ProductGrid/>
<TextAndImage variation='right' theme='orange'/>
    </div>
  )
}

export default Homepage
