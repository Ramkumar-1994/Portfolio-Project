import React from 'react'
import portfolio from '../assets/portfolio_about.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className='py-10 border-b-2 border-b-gray-500' id='about'>
        <h2 className='font-semibold text-center md:text-4xl text-2xl pb-4'>About Me</h2>
        <div className='flex flex-col md:flex-row max-w-4xl items-start mx-auto gap-10'>
          <div className='mx-auto'>
          <img src={portfolio} alt="" className='w-64 h-64 rounded-full border-white border-2 shadow-2xl shadow-blue-900 object-cover md:w-80 md:h-80 md:rounded-md'/>
          </div>
          
          <div className='w-[90%] mx-auto text-gray-400 text-center md:text-start'>
          <p className='my-5 '>
          I'm a former senior mechanical engineer with over 6 years of experience in the plastic manufacturing industry, now pivoting to a career in front-end development. My background in engineering has given me a solid foundation in problem-solving, attention to detail, and structured thinking, which I now apply to web development. Equipped with skills in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React.js, I'm eager to create responsive, user-friendly web applications and continue learning in the fast-paced tech world.
          </p>
          <div className='flex gap-6 justify-center md:justify-start'>
            <a href="https://www.linkedin.com/in/ramkumarnadarajan1994/" target='_blank' className='text-white'>
            <FaLinkedin  className='text-4xl md:text-6xl hover:text-[#0077B5]  cursor-pointer' target='_blank'/>Linkedin
            </a>
            <a href="https://github.com/Ramkumar-1994" target='_blank' className='text-white'>
            <FaGithub  className='text-4xl md:text-6xl hover:text-[#171515]
            hover:bg-white'/>Github
            </a>
            <a href="https://www.instagram.com/ra.mkumar691/" target='_blank' className='text-white'>
            <FaSquareInstagram  className='text-4xl md:text-6xl hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-sm'/>Instagram
            </a>
            <a href="https://www.facebook.com/ram.kumar.180410/" target='_blank' className='text-white'>
            <FaFacebook  className='text-4xl md:text-6xl hover:text-[#316FF6] rounded-sm cursor-pointer '/>facebook
            </a>
          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default About