import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = () => {
  return (
    <div>
      <div className='py-10 border-b-2 border-gray-500'>
        <h2 className=' font-semibold text-2xl md:text-4xl text-center'>Skills</h2>
        <div className='max-w-4xl mx-auto flex gap-10 flex-wrap justify-center my-10'>
          <div className="border p-6 rounded-md text-center hover:scale-105 shadow-xl  shadow-orange-500 cursor-pointer">
          <IoLogoHtml5 className='text-[200px] text-orange-500'/>
            <p className='font-semibold'>HTML</p>
          </div>

          <div className="border p-6 rounded-md text-center
          hover:scale-105 shadow-xl  shadow-blue-600 cursor-pointer">
          <FaCss3Alt className='text-[200px] text-blue-600'/>
            <p className='font-semibold'>CSS</p>
          </div>
        
          <div className="border p-6 rounded-md text-center hover:scale-105 shadow-xl  shadow-yellow-500 cursor-pointer">
          <IoLogoJavascript className='text-[200px] text-yellow-500'/>
            <p className='font-semibold'>Javascript</p>
          </div>

          <div className="border p-6 rounded-md text-center hover:scale-105 shadow-xl  shadow-blue-400 cursor-pointer">
          <GrReactjs className='text-[200px] text-blue-400'/>
            <p className='font-semibold'>React</p>
          </div>

          <div className="border p-6 rounded-md text-center hover:scale-105 shadow-xl  shadow-violet-800 cursor-pointer">
          <FaBootstrap className='text-[200px] text-violet-800'/>
            <p className='font-semibold'>Bootstrap</p>
          </div>

          <div className="border p-6 rounded-md text-center hover:scale-105 shadow-xl  shadow-blue-600 cursor-pointer">
          <RiTailwindCssFill className='text-[200px] text-blue-600'/>
            <p className='font-semibold'>Tailwind CSS</p>
          </div>
        
        
        
        
        
        </div>
      </div>
    </div>
  )
}

export default Skills