import React from 'react'

function Footer() {
  return (
    <footer className='w-full bg-[#202020] px-8 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-4 max-w-7xl gap-8 w-full mx-auto'>
        {/* First Grid */}
        <div className='lg:col-span-1'>
          <div className='flex flex-col items-center justify-center h-full'>
            <img src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' alt='Stylehouse Logo' className="h-8 w-auto sm:h-10"/>
            <p className='text-white text-center text-sm mt-4'>
              © 2020 The Style House
            </p>
            </div>
        </div>
        {/* Second Grid */}
        <div className='lg:col-span-3 w-full grid grid-cols-2 gap-8  md:grid-cols-3'>
          <div className='flex flex-col space-y-2'>
            <h1 className="text-xl text-white font-semibold">Explore</h1>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Home
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Blog
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Gallery
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Community
            </a>
          </div>
          <div className='flex flex-col space-y-2'>
            <h1 className="text-xl text-white font-semibold">About us</h1>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Our Story
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Meet our team
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Collaborations
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Contact us
            </a>
          </div>
          <div className='flex flex-col space-y-2'>
            <h1 className="text-xl text-white font-semibold">Companies</h1>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Our Partners
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Careers
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
              Privacy and Policy
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-gray-700 trans">
            FAQs
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer