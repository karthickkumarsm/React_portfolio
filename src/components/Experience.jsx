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
                        <p className='sm:Text-right text-4xl font-bold pb-3'> 
                            The Sparks Foundation<br/>
                            <div className='pb-2 pt-2 text-blue-300'>Web development Intern</div>
                           (Remote)<br/>Sept-2023
                        </p>
                    </div>
                    <div>
                    • Developed a comprehensive Bank Management System during web development internship. Utilized HTML for
                        structuring, CSS for styling, and JavaScript for dynamic functionality.<br/>
                    • Designed an intuitive user interface ensuring seamless navigation along with implementation of responsive design
                        for optimal user experience across devices.<br/>
                    • Integrated client-side scripting to enhance user interaction and data manipulation.Refining skills in HTML, CSS, and JavaScript.
                    </div>
                    <div>
                        <p className='sm:Text-right text-4xl font-bold pb-3'> 
                            Code Alpha<br/>
                            <div className='pb-2 pt-2 text-blue-300'>Web development Intern</div>
                           (Remote)<br/>Aug-2023
                        </p>
                    </div>
                    <div>
                    • Developed a dynamic multi-page form for web development internship Utilized HTML for structure, CSS for styling,
                    and JavaScript for enhanced interactivity Implemented PHP for server-side functionality, ensuring seamless data
                    processing.<br/>
                    • Integrated a secure captcha system using HTML, CSS, and JavaScript to enhance form security.<br/>
                    • Gained hands-on experience in full-stack development, showcasing proficiency in front-end and back-end
                        technologies.<br/>
                        <br/>
                    </div>  
                    
                </div>
            </div>
        </div>
    
  )
}

export default Experience