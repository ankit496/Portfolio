import React from 'react'
import { FaGithub } from "react-icons/fa";
function Projects() {
    return (
        <>
            <div id="projects" className='mt-32'>
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4 my-10 text-center underline">
                Projects
            </h2>
            <div className='max-w-16xl mx-auto mt-16 p-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className=' bg-black shadow-2xl shadow-gray-200 hover:scale-105 transition-transform transition-duration-500 ease-in-out'>
                        <img src="src\assets\newsapp.png" className="mx-auto" alt="" />
                        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between p-3'>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 text-center'>News~Crawler</p>
                        <FaGithub className='w-10 h-10 lg:m-0 mt-2 hover:scale-105 transition-transform transition-duration-300 ease-in-out cursor-pointer' style={{color:'white'}}/>
                        </div>
                    </div>
                    <div className=' bg-black shadow-2xl shadow-gray-200 hover:scale-105 transition-transform transition-duration-500 ease-in-out'>
                        <img src="src\assets\ecommerce.png" className="mx-auto " alt="" />
                        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between p-3'>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 text-center'>E-commerce</p>
                        <FaGithub className='w-10 h-10 lg:m-0 mt-2 hover:scale-105 transition-transform transition-duration-300 ease-in-out cursor-pointer' style={{color:'white'}}/>
                        </div>
                    </div>
                    <div className=' bg-black shadow-2xl shadow-gray-200 hover:scale-105 transition-transform transition-duration-500 ease-in-out'>
                        <img src="src\assets\mernchat.png" className="mx-auto " alt="" />
                        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between p-3'>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 text-center'>MERN-CHAT</p>
                        <FaGithub className='w-10 h-10 lg:m-0 mt-2 hover:scale-105 transition-transform transition-duration-300 ease-in-out cursor-pointer' style={{color:'white'}}/>
                        </div>
                    </div>
                    <div className='md:col-start-2 bg-black shadow-2xl shadow-gray-200 hover:scale-105 transition-transform transition-duration-500 ease-in-out'>
                        <img src="src\assets\iNotebook.png" className="mx-auto " alt="" />
                        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between p-3'>
                        <p className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 text-center'>iNoteBook</p>
                        <FaGithub className='w-10 h-10 lg:m-0 mt-2 hover:scale-105 transition-transform transition-duration-300 ease-in-out cursor-pointer' style={{color:'white'}}/>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </>
    )
}

export default Projects
