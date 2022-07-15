import React from 'react'
import HERO1 from '../images/heroespageimg.jpg'
import HERO2 from '../images/heroespageimg (2).jpg'
import HERO3 from '../images/heroesimg3.jpg'

function Home() {
  return (
   <div className='relative bg-[#131313] h-[90vh] w-full -z-20'>
   <div className='relative mx-auto h-full'>
     {/* Three Images with overlay */}
     <div className='absolute top-0 left-0 w-full h-full -z-10 bg-[#131313] opacity-60'>
        <div className="grid grid-cols-3 h-full w-fit place-items-center gap-4 md:gap-8 mx-auto">
          <div className='bg-blue-200 w-[28vw] h-[30vh] md:h-[40vh] lg:w-[240px] lg:h-[400px] rounded-3xl overflow-hidden'>
            <img src={HERO1} alt="Our Models" className='
            object-cover w-full h-full'
            loading='eager'/>
          </div>
          <div className='bg-blue-200 w-[28vw] h-[30vh] md:h-[40vh] lg:w-[240px] lg:h-[400px] -mt-16 rounded-3xl overflow-hidden'>
            <img src={HERO2} alt="Our Models" className='
            object-cover w-full h-full'
            loading='eager'/>
          </div>
          <div className='bg-blue-200 w-[28vw] h-[30vh] md:h-[40vh] lg:w-[240px] lg:h-[400px] rounded-3xl overflow-hidden'>
            <img src={HERO3} alt="Our Models" className='
            object-cover w-full h-full'
            loading='eager'/>
          </div>
        </div>
      </div>
          {/* Content */}
          <div className='flex flex-col items-center justify-center max-w-7xl h-full mx-auto z-40'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl xl:text-8xl text-white text-center'><span>W</span>e Create Magic for you</h1>
            {/* <p className="text-white font-env text-sm md:text-base">
            At Stylehouse Nigeria,  we provide you fashion advice, help you choose the appropriate clothing for you, maintaining the fashion style, and supervising photoshoots. Stylists must always be updated with the latest fashion trends for recommendations.
            </p> */}
          </div>
   </div>
   </div>
  )
}

export default Home