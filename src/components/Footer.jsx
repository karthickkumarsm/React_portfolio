import React from "react";
import {FaGithub , FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#0a192f] text-gray-200 shadow-lg p-[15px] z-50 ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-center flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-row items-center justify-between">
                    <a href="https://github.com/karthickkumarsm" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                      <FaGithub/>  
                      <span className="text-[14px] mr-[9px] font-bold">Github</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/karthick-kumar-sm" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <span className="text-[14px] mr-[9px] font-bold">Linkedin</span>    
                    </a>

                    <p className="flex flex-row items-center my-[15px]">
                    <HiOutlineMail/>
                    <a href='mailto:sivakumarkarthickkumar@gmail.com'  target="_blank">
                        <span className="text-[14px] font-bold">sivakumarkarthickkumar@gmail.com</span> </a> 
                    </p>
                </div>
            </div>
        </div>
        <p className="text-center font-bold">Made By Karthick Kumar SM</p>
    </div>
  )
}

export default Footer