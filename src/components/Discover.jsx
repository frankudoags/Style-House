import React from 'react'
import SLIDE1 from '../images/ss10.jpg'
import SLIDE2 from '../images/ss11.jpg'
import SLIDE3 from '../images/ss2.jpg'

function Discover() {
  return (
    <div className='h-fit mx-auto px-8 max-w-7xl'>
      {/* Heading */}
      <div className='flex items-center justify-center lg:justify-between'>
        <h1 className='font-metro font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
        Discover the beauty of The Style House
        </h1>
        <button
          className='hidden lg:block md:ml-auto order-2 btn'
          type='button'
        >
          View all
        </button>
      </div>

      {/* Slideshow */}
      <div className='flex my-10 gap-4 md:gap-8  overflow-x-scroll hide-scrollbar h-auto w-auto'>
        <div className='flex-shrink-0 w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] bg-blue-200 rounded-xl overflow-hidden relative shadow-md'>
          <img src={SLIDE1} alt="Slide show images" className='absolute w-full h-full object-center object-cover' loading='lazy' />
        </div>
        <div className='flex-shrink-0 w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] bg-blue-200 rounded-xl overflow-hidden relative shadow-md'>
          <img src={SLIDE3} alt="Slide show images" className='absolute w-full h-full object-center object-cover'  loading='lazy'/>
        </div>
        <div className='flex-shrink-0 w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] bg-blue-200 rounded-xl overflow-hidden relative shadow-md'>
          <img src={SLIDE2} alt="Slide show images" className='absolute w-full h-full object-center object-cover' loading='lazy' />
        </div>
        <div className='flex-shrink-0 w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] bg-blue-200 rounded-xl overflow-hidden relative shadow-md'>
          <img src={SLIDE1} alt="Slide show images" className='absolute w-full h-full object-center object-cover' loading='lazy' />
        </div>
        <div className='flex-shrink-0 w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] bg-blue-200 rounded-xl overflow-hidden relative shadow-md'>
          <img src={SLIDE3} alt="Slide show images" className='absolute w-full h-full object-center object-cover' loading='lazy' />
        </div>
        <div className='flex-shrink-0 w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] bg-blue-200 rounded-xl overflow-hidden relative shadow-md'>
          <img src={SLIDE2} alt="Slide show images" className='absolute w-full h-full object-center object-cover' loading='lazy' />
        </div>
      </div>
      {/* View all Button(smaller screens) */}
      <div className='flex items-center '>
      <button
          className='lg:hidden btn-2 mx-auto'
          type='button'
        >
          View all
        </button>
      </div>
    </div>
  )
}

export default Discover