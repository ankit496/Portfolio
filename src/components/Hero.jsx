import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";

export default function Hero() {
  return (
    <div id="hero" className='text-white flex md:mt-40 items-center justify-between p-3'>
      <div className='md:ml-[50px]'>
        <h1 className='text-4xl mt-16 mb-4 md:text-6xl text-yellow-300 font-semibold'>Hola <span className='text-red-400'>Amigos! </span></h1>
        {/* <h2 className='text-yellow-300 mt-4 ml-1 text-2xl mt-2px mb-2px'>Myself,Ankit a full stack web developer.</h2> */}
        <div className='grid md:grid-cols-3 grid-rows-3 gap-4'>
          <div className='p-2 rounded-full flex justify-between items-center font-semibold border-white border-2 shadow-sm shadow-yellow-200 hover:bg-gradient-to-r from-slate-600 to-slate-900 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a href="https://www.linkedin.com/in/ankit-kumar-11a8b3228/" target="_blank" className='text-yellow-400 text-lg'>
              LinkedIn
            </a>
            <FaLinkedin />
          </div>
          <div className='p-2 rounded-full flex justify-between items-center font-semibold border-white border-2 shadow-sm shadow-yellow-200 hover:bg-gradient-to-r from-slate-600 to-slate-900 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a href="https://www.leetcode.com/Ankit3020/" target="_blank" className='text-yellow-400 text-lg'>
              Leetcode
            </a>
            <SiLeetcode />
          </div>
          <div className='p-2 rounded-full flex justify-between items-center font-semibold border-white border-2 shadow-sm shadow-yellow-200 hover:bg-gradient-to-r from-slate-600 to-slate-900 hover:-translate-y-1 hover:scale-110 duration-300'>
            <a href="https://drive.google.com/file/d/1rKOoDJTTMV7B5A8ise2MZ77UXOE_ZW7M/view?usp=sharing" target="_blank" className='text-yellow-400 text-lg'>
              Résumé
            </a>
            <TiDocumentText />
          </div>
        
        </div>
      </div>
      <div className='md:mr-[48px]'>
        <img className="md:mt-8px ml-2 w-72 md:w-96 h-auto rounded-full hover:scale-105 ease-in duration-300 shadow-xl shadow-black" src="src\assets\hero_image.gif" alt="coding image" />
      </div>
    </div>
  )
}
