import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import flutter from '../assets/flutter.png';
import github from '../assets/github.png';
import java from '../assets/Java.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import express from '../assets/express.png';
import mysql from '../assets/mysql.png';

const Skill = () => {
  return (
    <div name="skill" className='bg-[#0a192f] w-full h-full pt-[10rem] text-gray-300 '>
      {/**container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p  className='font-bold text-4xl inline border-b-4 border-pink-600'>
            Skills
          </p> 
          <p className='py-4'>These are the technologies I have been working with my projects.</p> 
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={java} alt='Java Icon'/>
            <p className='my-4'>Java</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt='HTML Icon'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt='CSS Icon'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt='Tailwind CSS Icon'/>
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javascript} alt='JavaScript Icon'/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={flutter} alt='Flutter Icon'/>
            <p className='my-4'>Flutter</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt='React Icon'/>
            <p className='my-4'>React JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={node} alt='NodeJS Icon'/>
            <p className='my-4'>Node JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={express} alt='Express JS Icon'/>
            <p className='my-4'>Express JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mongo} alt='MongoDB Icon'/>
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mysql} alt='My SQL Icon'/>
            <p className='my-4'>My SQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={github} alt='Github Icon'/>
            <p className='my-4'>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill