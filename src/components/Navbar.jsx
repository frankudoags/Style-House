/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  SearchIcon
} from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-[#131313]">
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between md:justify-evenly items-center py-6  md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">The Style House</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          {/* Navbar(Larger screens) */}
          <Popover.Group as="nav" className="hidden md:flex justify-center space-x-10">
            <a href="#" className="text-base   font-medium text-white opacity-70">
              Home
            </a>
            <a href="#" className="text-base  font-medium text-white opacity-70">
              Blog
            </a>
            <a href="#" className="text-base   font-medium text-white opacity-70">
              Shop
            </a>
            <a href="#" className="text-base   font-medium text-white opacity-70">
              Dressing Room
            </a>
          </Popover.Group>
          {/* Search(Large Screens)*/}
            <div className="hidden md:flex gap-4 items-center justify-end md:flex-1 lg:w-0">
              <SearchIcon className="w-6 h-6 text-white opacity-70 cursor-pointer" />
              <button
          className='bg-[#FB5306] font-metro border-0 text-white font-semibold hover:text-[#FFD0BB] rounded-lg py-2 px-4 md:px-8 w-full md:w-fit'
          type='button'
        >
          Get Started
        </button>
            </div>
            {/* Search Icon(smaller screens) and Menu Button(smaller buttons) */}
          <div className="-mr-2 -my-2 flex gap-2 items-center md:hidden">
          <SearchIcon className="w-6 h-6 text-white opacity-70 cursor-pointer" />
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>


      {/* Responsive Navbar for smaller phones*/}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex flex-col items-center gap-y-4 gap-x-8 font-metro">
                <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">
                  Home
                </a>

                <a href="#" className="text-base font-semibold text-gray-900 hover:bg-gray-200 ">
                  Blog
                </a>
                <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">
                  Shop
                </a>
                <a href="#" className="text-base font-semibold text-gray-900 hover:text-gray-700">
                  Dressing Home
                </a>
                <button
          className='bg-[#FB5306] font-metro border-0 text-white font-semibold hover:text-[#FFD0BB] rounded-lg py-2 px-4 md:px-8 w-full md:w-fit'
          type='button'
        >
          Subscribe
        </button>
              </div>
              <div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
