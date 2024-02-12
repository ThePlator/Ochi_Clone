import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

const LandingPage = () => {
    
    return (
        <div  data-scroll data-scroll-section   data-scroll-speed="-.3"    className='w-full h-screen bg-zinc-900  pt-1 ' >
            <div className='text-structured mt-20  px-20 ' >
                {['WE CREATE', 'EYE-OPENING', 'PRESENTATIONS'].map((item, index) => {

                    return <div className='masker  '>

                        <div className='w-fit flex items-center' >
                            {index === 1 && (<motion.div initial={{width : 0}}  animate={{width : "9vw"}}  transition={{ease: [0.76 , 0,0.24 , 1 ] , duration : 1 }  }    className='w-[10vw] mt-[18px] h-[12.5vh] rounded-md mr-4    overflow-hidden'   ><img className='object-cover'  src="https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" /></motion.div>)}
 
                            <h1 key={index} className='   text-[9vw]  leading-[7.6vw]  text-7xl font-regular   font-["Founders Grotesk Condensed"] tracking-tighter '>{item}</h1>
                        </div>
                    </div>
                })}



            </div>

            <div className='border-t-[1px] border-zinc-800 mt-32  py-5 px-20  flex justify-between item ' >
                {["FOR PUBLIC AND PRIVATE COMPANIES", "FROM THE FIRST PITCH TO IPO"].map((item, index) => <p
                    className='tracking-tight leading-none flex gap-10 text-md font-light '  >{item}</p>



                )}

                <div className='start flex justify-between  gap-5 '  >

                    <div className='  hover:bg-white hover:text-black ease-in-out transition  hover:scale-110   px-4  py-2 border-[2px] border-zinc-500 rounded-full  text-md font-light' >START THE PROJECT</div>
                    <div className='  hover:bg-white hover:text-black w-10 h-10 rounded-full border-zinc-500 border-[2px] flex justify-center items-center ' ><FaArrowTrendUp className='text-xl' /></div>


                </div>


            </div>




        </div>
    )
}

export default LandingPage
