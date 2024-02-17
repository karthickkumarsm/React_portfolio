import React from 'react'
import dalle from '../assets/dalle.png';
import threejs from "../assets/threejs.png";
import promptopia from '../assets/promptopia.png';
import guess from '../assets/guess.jpg';
import habit from '../assets/habit.jpg';
import hangman from '../assets/hangman.png';


const Project = () => {
  return (
    <div name="project" className='w-full md:h-screen pt-[6rem] text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check out my projects that I have worked and visit the deployed projects.</p>
            </div>
{/**container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/**Grid Item */}
            <div style={{backgroundImage:`url(${threejs})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/**Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    3D T-Shirt Shop
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" href='https://github.com/karthickkumarsm/3D_T-shirt_Design'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Repo</button>
                        </a>
                        <a target="_blank" href='https://threejsshop.netlify.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Link</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${dalle})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/**Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    DALL-E Clone
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" href='https://github.com/karthickkumarsm/DALL-E-clone'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Repo</button>
                        </a>
                        <a target="_blank" href='https://lambent-pony-9f7e65.netlify.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Link</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${habit})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/**Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    HabitTracker
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" href='https://github.com/karthickkumarsm/HabitHub'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Repo</button>
                        </a>
                        <a href='https://www.amazon.com/gp/product/B0CVS77DNZ' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Download</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${guess})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/**Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Guess The Word
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" href='https://github.com/karthickkumarsm/Guess-The-Word-App '>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Repo</button>
                        </a>
                        {/* <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Link</button>
                        </a> */}
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${promptopia})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/**Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Promptopia
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" href='https://github.com/karthickkumarsm/promptopia'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Repo</button>
                        </a>
                        <a target="_blank" href='https://promptopia-woad.vercel.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Link</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage:`url(${hangman})`}} 
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/**Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    HangMan web game
                    </span>
                    <div className='pt-8 text-center'>
                        <a target="_blank" href='https://github.com/karthickkumarsm/Hangman-Game'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code Repo</button>
                        </a>
                        <a target="_blank" href='https://hangman-game-basic.netlify.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Link</button>
                        </a>
                    </div>
                </div>
            </div>
        </div> 


        </div>
    </div>
  )
}

export default Project