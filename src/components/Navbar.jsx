import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
 
  const [menu,setMenu]=useState(false)
 
  function menuHandler(){
    setMenu(prev=>!prev)
  }
  return (
    <>
    <div className="sticky border-b border-gray-200 backdrop-blur-lg backdrop-filter top-0 z-10 bg-opacity-30">
    <div className='py-3 px-10 flex justify-between  max-w-7xl mx-auto items-center'>
        <h2 className='font-semibold text-xl font-mono'>Ramkumar's <span className='text-blue-300'>portfolio</span></h2>
        <div className='md:flex gap-10 font-light text-xl hidden '>
          <h2 className='hover'>Home</h2>
          <h2 className='hover'>About</h2>
          <h2 className='hover'>Skills</h2>
          <h2 className='hover'>Projects</h2>
          <h2 className='hover'>Contact</h2>
        </div>
        <div className='md:hidden cursor-pointer 'onClick={menuHandler}>
          {
            !menu?<LuMenu className='text-2xl'/>:
            <IoMdClose className='text-2xl'/>
          }
        </div>
        
        </div>
        {
      menu?<div className="bg-slate-900 w-full md:hidden">
      <div className='flex gap-5 font-light text-xl flex-col items-center py-3 border border-b-2'>
            <h2 className='cursor-pointer hover:bg-white hover:py-2 hover:text-slate-900 py-2 rounded-md w-[90%] text-center'>Home</h2>
            <h2 className='cursor-pointer hover:bg-white hover:py-2 hover:text-slate-900 py-2 rounded-md w-[90%] text-center'>About</h2>
            <h2 className='cursor-pointer hover:bg-white hover:py-2 hover:text-slate-900 py-2 rounded-md w-[90%] text-center'>Skills</h2>
            <h2 className='cursor-pointer hover:bg-white hover:py-2 hover:text-slate-900 py-2 rounded-md w-[90%] text-center'>Projects</h2>
            <h2 className='cursor-pointer hover:bg-white hover:py-2 hover:text-slate-900 py-2 rounded-md w-[90%] text-center'>Contact</h2>
          </div>
      </div>:null
    }
    </div>
    </>
  )
}

export default Navbar