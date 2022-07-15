import React from 'react'
import AFFORDABLE from '../images/affordable.jpg'

function Why() {
  return (
    <div className='h-auto mx-auto px-8 mt-8 md:mt-12 max-w-7xl'>
         <h1 className="font-metro font-semibold text-xl text-center sm:text-2xl md:text-4xl">
            Why our Clients choose us
          </h1>
          <p className='text-sm text-[#525252] md:text-base lg:pt-4 pb-8 sm:pb-16 text-center'>
            At Style House, here are the amazing features that we offer
          </p>

          {/* Image Display */}
          <div className='flex flex-col md:flex-row items-center justify-center w-full h-auto gap-12 md:gap-6 mx-auto pb-12 mb:pb-24'>
            <div className='w-[65vw] h-[400px] sm:w-[40vw] md:w-[28vw] xl:w-[350px] lg:h-[550px] bg-black opacity-95 overflow-hidden relative rounded-2xl ml-auto md:ml-0 flex flex-col items-center justify-end'>
              <img src={AFFORDABLE} alt="" className='absolute w-full h-full object-center object-cover -z-10' loading='lazy' />
              <div className='mb-12'>
                <h1>Creative Styles</h1>
              <p>I am a creative thinker</p>
              </div>
            </div>
            <div className='w-[65vw] h-[400px] sm:w-[40vw] md:w-[28vw] xl:w-[350px] lg:h-[550px] bg-black opacity-95 overflow-hidden relative rounded-2xl mr-auto md:mr-0 flex flex-col items-center justify-end'>
              <img src={AFFORDABLE} alt="" className='absolute w-full h-full object-center object-cover -z-10' loading='lazy' />
              <div className='mb-12'>
                <h1>Affordable</h1>
              <p>I am a creative thinker</p>
              </div>
            </div>
            <div className='w-[65vw] h-[400px] sm:w-[40vw] md:w-[28vw] xl:w-[350px] lg:h-[550px] bg-black opacity-95 overflow-hidden relative rounded-2xl ml-auto md:ml-0 flex flex-col items-center justify-end'>
              <img src={AFFORDABLE} alt="" className='absolute w-full h-full object-center object-cover -z-10' loading='lazy' />
              <div className='mb-12'>
                <h1>Fast Delivery</h1>
              <p>
                You get to receive your products
                2-3 days after you order from the
                best stores around us.
</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Why