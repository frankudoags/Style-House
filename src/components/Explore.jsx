import React from 'react'
//eslint-disable-next-line
import CARD2 from '../images/2ndcard.JPG'
import CARD3 from '../images/3rdcard.JPG' 

function Explore() {
  return (
    <div className='h-fit max-w-7xl mx-auto px-8 pt-16 pb-4 sm:pb-8 md:pb-16 md:pt-24 my-12 md:my-18'>
      {/* wrapper */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-start w-full h-full gap-8'> 
          {/* First Flex */}
        <div className='flex flex-col items-center justify-start w-full md:w-1/2'>
          <h1 className="font-metro font-semibold text-xl mr-auto sm:text-2xl md:text-4xl">
          Explore our wide range of services
          </h1>
          <p className='text-sm text-[#525252] md:text-base pb-4'>
          You can book styling sessions here at Style House Nigeria. We are here to help you improve your occasional appearance, Join the community in wearing Style House today.
          </p>
          <button
          className='mr-auto order-2 bg-[#FB5306] font-metro text-white font-semibold
           hover:text-[#FFD0BB] rounded-lg py-2 px-12 lg:px-8 w-fit'
          type='button'
        >
          See all
        </button>
        </div>
        {/* Second Flex for Images */}
        <div className='flex items-center justify-end sm:justify-center h-full w-full md:w-1/2'>
          <div className='relative w-[240px] h-[230px] lg:w-[330px] lg:h-[350px]'>
            <img src={CARD3} alt="" className='absolute object-cover w-full h-full z-10 border-2 border-[#FB5306] rounded-2xl'/>
            <img src={CARD2} alt="" className='absolute object-cover w-full h-full  -mt-8  border-2 border-[#FB5306] rounded-2xl'/>
            <img src={CARD2} alt="" className='absolute object-cover w-full h-full -z-10 -mt-16 border-2 border-[#FB5306] rounded-2xl'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Explore