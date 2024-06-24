"use client";
import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
 
  return (
    <nav className="bg-red-50 border-gray-200 relative z-50">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src='/image4.png' className="h-10" alt="ICS Logo" />
          <span className="self-center font-medium text-2xl whitespace-nowrap">ICS</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none "
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <svg
              className="w-15 h-15"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-10 h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          )}
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-red-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent absolute top-16 md:relative md:top-0 md:left-0 w-full">
        <li>

          <Link to="counselling" smooth={true} className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Counselling</Link>
        </li>
        <li>
          <a href="#faqs" className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Faq</a>
        </li>
        <li>
          <a href="/team" className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Team</a>
        </li>
       
         <li>
          <a href="/events" className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Events</a>
        </li>
         <li>
          <a href="/services" className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Services</a>
        </li>
         <li>
          <a href="./" className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Contact Us</a>
        </li>
         <li>
          <a href="./"><button type="button" className=" p-1  text-sm font-medium text-white focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Book a slot</button></a>
        </li>
        <li>

          <a href="./" className="block py-2 px-3 text-red-500 rounded md:hover:text-red-600 md:border-0 md:p-0 hover:bg-red-100 md:hover:bg-red-50 font-medium">Emergency</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    

  )
}
