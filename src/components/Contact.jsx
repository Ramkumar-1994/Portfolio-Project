import React from 'react'


const Contact = () => {
  return (
    <>
      <div id='contact' className='w-full '>
      <div className='py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px] lg:w-[80%] w-[90%] m-auto' >
            <div 
            className='flex flex-col justify-center items-start gap-6 w-full lg:w-[60%]'>
                <h1
                className='text-4xl text-center'>
                  Contact Me
                </h1>
                <a href="mailto:nramkumar1994@gmail.com" target='_blank' className='font-semibold text-2xl'>📧Email
                <p className='text-lg  text-gray-50 cursor-pointer underline'> nramkumar1994@gmail.com</p>
                </a>
                <p className='font-semibold text-2xl'>📞 Phone:</p>
                <h2 className='text-lg  text-gray-50 '>+91-9092357283</h2>
                
               
            </div>
            <div
                
                className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
                  <form
                  
                  className='flex flex-col justify-center items-start gap-4 w-full'>
                      <input type="text" placeholder='Enter Fullname' className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none' />
                      <input type="text" placeholder='Enter Email' className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none' />
                      <input type="text" placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none' />
                      <textarea name="" placeholder='Enter your message' id="" className='px-6 py-3 border-[2px] border-gray-500 text-black rounded-lg w-full outline-none'></textarea>
                      <button
                     className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 uppercase w-full py-2 rounded-lg font-semibold transition-transform duration-300'>Submit</button>
                  </form>
            </div>
        </div>
      </div>
        
    </>
  )
}

export default Contact