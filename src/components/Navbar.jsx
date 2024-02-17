import React,{useState} from 'react';
import {FaBars , FaTimes , FaGithub , FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo1 from '../assets/logo1.png';
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () =>setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div >
            <img src={logo1} alt='Logo'style={{width:'80px'}}/>
        </div>
        {/*menu*/}
        
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" className='hover:bg-pink-600 p-3 duration-500' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                <Link to="skill" className='hover:bg-pink-600 p-3 duration-500' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                <Link to="experience" className='hover:bg-pink-600 p-3 duration-500' smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>
                <li>
                <Link to="project" className='hover:bg-pink-600 p-3 duration-500' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                <Link to="contact" className='hover:bg-pink-600 p-2 duration-500' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
       
        {/*hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/*mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:bg-pink-600 duration-500'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-6 text-4xl hover:bg-pink-600 duration-500'>  <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
                        Skills
                    </Link></li>
                <li className='py-6 text-4xl hover:bg-pink-600 duration-500'><Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                        Experience
                    </Link></li>
                <li className='py-6 text-4xl hover:bg-pink-600 duration-500'>   <Link onClick={handleClick} to="project" smooth={true} duration={500}>
                        Projects
                    </Link></li>
                <li className='py-6 text-4xl hover:bg-pink-600 duration-500'> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link></li>
         </ul>

        {/*social icons*/}
        <div className='hidden lg:flex fixed  flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href='https://www.linkedin.com/in/karthick-kumar-sm'  target="_blank" className='flex justify-between items-center w-full text-gray-300'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a href='https://github.com/karthickkumarsm' target="_blank" className='flex justify-between items-center w-full text-gray-300'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#07a298]'>
                    <a href='mailto:sivakumarkarthickkumar@gmail.com'  target="_blank" className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f65]'>
                    <a href='https://www.dropbox.com/scl/fi/58unahe05xvexkjdhwvp8/Karthick_Kumar_SM_Resume.pdf?rlkey=3d3nh0ll7blhoe4ioj0vwqjhr&dl=0' target="_blank" className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar