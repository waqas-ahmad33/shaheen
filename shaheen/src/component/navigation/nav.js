import React from 'react'
import logo from "./shaheen1.JPG"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Nav = () => {
  return (
  <container>
    <div className='grid grid-cols-2 bg-slate-700'>
      
      
      <div className='justify-self-start w-1/3 px-2 py-2 h- '><motion.img  animate={{rotate:Infinity}} src={logo} alt="school logo"></motion.img></div>
        <ul  className='grid grid-flow-col justify-end justify-items-end py-4  space-x-6 px-6 text-zinc-100 mb-5 pb-2  '>
            <motion.il whileHover={{scale:1.5}} ><Link to="/">Home</Link></motion.il>
            <motion.il whileHover={{rotate:[0,360,360,0]}} transition={{delay:0.5}} ><Link to='/result'>Result</Link></motion.il>
            <motion.il whileHover={{scale:1.5}} ><Link to="/about">About</Link></motion.il>
        </ul>
    </div>
    </container>
   
    
  )
}

export default Nav