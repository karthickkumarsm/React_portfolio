import React from 'react'

const Experience = () => {
  return (
    <div name='experience' className='w-full sm:h-screen pt-[6rem] bg-[#0a192f]  text-gray-300'>
        <div className='flex flex-col justify-center mx-auto items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-4 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Experience
                    </p>
                </div>
                {/* <div></div> */}
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                        <p className='sm:Text-right text-3xl font-bold pb-3'> 
                            AlgAI Technologies<br/>
                            <div className='pb-2 pt-2 text-blue-300'>Full Stack Developer Intern</div>
                           (Remote)<br/>July 2024 - Present
                        </p>
                    </div>
                    <div>
                        <p className='sm:Text-right text-3xl font-bold pb-3'> 
                            GirlScript Summer of Code(GSSoC)<br/>
                            <div className='pb-2 pt-2 text-blue-300'>Open Source Contributor</div>
                           (Remote)<br/>May 2024 - Aug 2024
                        </p>
                    </div>
                    <div>
                        <p className='sm:Text-right text-3xl font-bold pb-3'> 
                            Visanka Technologies Pvt Ltd<br/>
                            <div className='pb-2 pt-2 text-blue-300'>Flutter developer Intern</div>
                           (Remote)<br/>Feb-2024
                        </p>
                    </div>
                    <div>
                        <p className='sm:Text-right text-3xl font-bold pb-3'> 
                            The Sparks Foundation<br/>
                            <div className='pb-2 pt-2 text-blue-300'>Web developer Intern</div>
                           (Remote)<br/>Sept-2023
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    
  )
}

export default Experience
