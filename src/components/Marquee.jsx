import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div  data-scroll  data-scroll-section  data-scroll-speed=".1"   className='w-full py-10 rounded-tr-3xl  rounded-tl-3xl  bg-[#004D43]' >
      <div className='text flex  overflow-hidden  whitespace-nowrap   border-b-2  border-t-2  ' >
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat : Infinity ,  ease:"linear" , duration : 5   }}    className='text-[13vw] leading-none -mb-10  pr-20  font-bold  font-["Founders Grotesk Condensed"]' >WE ARE OCHI   </motion.h1>
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat : Infinity ,  ease:"linear" , duration :5 }}  className='text-[13vw] leading-none   font-bold pr-20 font-["Founders Grotesk Condensed"] ' >WE ARE OCHI</motion.h1>
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ repeat : Infinity ,  ease:"linear" , duration :5 }}  className='text-[13vw] leading-none   font-bold pr-20 font-["Founders Grotesk Condensed"] ' >WE ARE OCHI</motion.h1>


      </div>
    </div>
  )
}

export default Marquee