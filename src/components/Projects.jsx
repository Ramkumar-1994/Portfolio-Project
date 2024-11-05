import React from 'react'
import construction from '../assets/Capture3.png'
import Ecommerce from '../assets/capture2.png'
import netflix from '../assets/Capture1.png'
const Projects = () => {
  const projectData=[
    {
      id:1,
      name:'AnimatedConstruction Website',
      technologies:'ReactJS + FramerMotion+TailwindCSS',
      image:construction,
      github:'https://github.com/Ramkumar-1994/Construction-Website',
      link:'https://construction-website-drab-nine.vercel.app/'
    },
    {
      id:2,
      name:'Netflix Landing Page',
      technologies:'ReactJS +TailwindCSS',
      image:netflix,
      github:'https://github.com/Ramkumar-1994/React-Netflix',
      link:'https://react-netflix-beige.vercel.app/'
    },
    {
      id:3,
      name:'Ecommerce Website',
      technologies:'HTML+CSS+Javascript',
      image:Ecommerce,
      github:'https://github.com/Ramkumar-1994/Clothy-Project',
      link:'https://clothy-project-9jt5.vercel.app/'
    }
  ]
  return (
    <div>
      <div className='py-10 border-b-2 border-gray-500'>
        <h1 className='font-semibold text-4xl text-center'>Projects</h1>
        <div className='my-5 rounded-md p-8 grid md:grid-cols-3 grid-cols-1 gap-10 justify-center md:max-w-7xl mx-auto w-[90%]'>
          {
            projectData.map((project)=>{
                return <div key={project.id} className='bg-slate-800 p-6 rounded-md'>
                  <img src={project.image} alt="" className='w-full rounded-md hover:scale-105'/>
                  <h2 className='my-2 text-lg'>{project.name}</h2>
                  <h4 className='my-2 text-sm text-gray-400'>{project.technologies}</h4>
                  <div className="flex gap-10 mt-6">
                  <a href={project.github} className='bg-gradient-to-r from-teal-400 to-blue-500 py-1 px-4 rounded-full ' target='_blank'><button>Github</button></a>
                  <a href={project.link} target='_blank'><button className='bg-gradient-to-r from-pink-500 to-orange-500 py-1 px-4 rounded-full'>view Website</button></a>
                  </div>
                  
                </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects