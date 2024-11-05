import React from 'react'
import portfolio from '../assets/portfolio.png'
const Hero = () => {
  return (
    <>
      <div className='text-center py-16 border-b-2 border-gray-500' id='hero'>
        <img src={portfolio} alt="" className='mx-auto mb-8 w-56 h-56 md:w-80 md:h-80 rounded-full object-cover transform transition-transform duration-300 scale-105  border-2 border-white'/>
        <h1 className='text-2xl md:text-4xl font-semibold'>Hi I'm <span className='text-blue-300'>
          RamKumar 👋</span>
          </h1>
          <p className='text-normal text-gray-300 md:max-w-6xl mx-auto py-2 w-[80%]'>A Front-End Developer with a Passion for Crafting Beautiful Websites.</p>
          <div className='flex gap-8 justify-center mt-3'>
            <a href="https://wa.me/+919092357283?text=Hi Ram!!!" target="_blank"><button className='bg-gradient-to-r from-teal-400 to-blue-500 py-1 px-4 rounded-full  hover:from-blue-500 hover:to-teal-400 transition-transform duration-300'>Contact with me</button></a>
            <a href="/Resume_software_developer(2).pdf" download='resume.pdf'>

            <button className='bg-gradient-to-r from-pink-500 to-orange-500 py-1 px-4 rounded-full hover:from-orange-500 hover:to-pink-500 transition-transform duration-300'>Resume</button>
            </a>
            
          </div>
      </div>  
    </>
  )
}

export default Hero