import React from 'react'

function Subscribe() {
  return (
    <div className='flex flex-col items-center justify-start md:justify-center w-full bg-[#FFD0BB] mt-12 px-6 py-12 md:py-24 space-y-4'>
      <h1 className='text-[#202020] font-semibold text-xl md:text-4xl font-metro'>
      Subscribe to our Newsletter
      </h1>
      <p className='text-[#525252] text-sm md:text-base'>
      Subscribe and be the first to know about our latest travel deals, new trip launches, blog posts and more.
      </p>
      <div className='flex flex-col gap-4 md: md:flex-row items-center justify-center w-full'>
        <input
         className='suscribe-input
          ' type='text' placeholder='Email Address'
        required />
        <button
          className='bg-[#FB5306] font-metro border-0 text-white font-semibold hover:text-[#FFD0BB] rounded-lg py-2 px-10 md:px-8 w-fit'
          type='button'
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Subscribe