import React,{useState} from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Home = () => {
  const [nav, setNav] = useState(false);
    const handleClick = () =>setNav(!nav);
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
         Hi, My Name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Karthick Kumar SM
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'> I'm <TypeAnimation
                    sequence={[
                        'Aspiring SDE',
                        1000, 
                        'Fullstack Developer',
                        1000,
                        'Flutter Developer',
                        1000,
                        'Tech Enthusiast',
                        1000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    /></h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a 2025 Bachelor of Engineering graduate in Computer Science, passionate about software development and eager to learn something new every day.</p>
        <div className='flex flex-col sm:flex-row'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center justify-between hover:bg-pink-600 hover:border-pink-600'>
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                        View Work
                    </Link>
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-4'/>
          </span>
          </button>
          <a href='https://www.dropbox.com/scl/fi/ifz1tcjsj2itzik392hi8/Karthick_Kumar_SM_Resume.pdf?rlkey=p5rio5rhogau62oechxaw8yp0&st=e24x6ggp&dl=0' target="_blank" rel="noopener noreferrer" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600 sm:ml-5'>
          <button className='flex items-center justify-between w-full'> Resume <BsFillPersonLinesFill className='ml-4' size={25}/>
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home