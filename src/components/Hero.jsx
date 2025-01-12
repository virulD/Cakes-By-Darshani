// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
      <div className='flex flex-col sm:flex-row border border-gray-400'>
          {/* {Left Side of hero} */}
          <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
              <div className='text-[#252525]'>
                  <div className='flex items-center gap-2'>
                      <p className='w-8 md:w-11 h-[2px] bg-slate-400'></p>
                      <p className='font-medium text-sm md:text-base'>Weclome to</p>
                  </div>
                  <h1 className='playwrite-au-sa-play text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Cakes By Darshani</h1>
                  <div className='flex items-center gap-2'>
                      <p className='font-semibold text-sm md:text-base'>Order Now</p>
                      <p className='w-8 md:w-11 h-[1px] bg-slate-600'></p>
                  </div>
              </div>
              
          </div>
          {/* Right side*/}
          <img className='w-full sm:w-full' src={assets.hero_img} alt="" />
          
     </div>
  )
}

export default Hero