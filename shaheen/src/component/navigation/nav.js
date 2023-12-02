import React from 'react'
import logo from "./shaheen.jpg"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Nav = () => {
  return (
  <container>
    <div className='grid grid-cols-2 bg-slate-700'>
      
      
      <div className='justify-self-start justify-items-start start-2 w-12 h-2 px-2 '><img  src={logo} alt="school logo"/></div>
        <ul  className='grid grid-flow-col justify-end justify-items-end py-4  space-x-6 px-6 text-zinc-100 mb-5 pb-2  '>
            <motion.il whileHover={{scale:1}} ><Link to="/">Home</Link></motion.il>
            <motion.il whileHover={{rotate:[0,360,360,0]}} transition={{delay:1}} ><Link to='/result'>Result</Link></motion.il>
            <motion.il whileHover={{scale:1.5}} ><Link to="/about">About</Link></motion.il>
        </ul>
    </div>
    </container>
   
    
  )
}

export default Nav