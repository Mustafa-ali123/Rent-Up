import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const btnright = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [10, 20, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  }

  const btnbotm = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  }
  return (<motion.div
    initial={"offscreen"}
    whileInView={"onscreen"}
    transition={{ staggerChildren: 0.5 }}
    className='contain'>
    <img className=' h-img' src='https://img.freepik.com/premium-photo/living-room-blue-tone-apartment-home-3d-rendering_41926-780.jpg' />
    <div className='text-center h-head'>
      <motion.h1 variants={btnbotm}>Search Your Next Home</motion.h1>
      <motion.h5 variants={btnbotm}>Find new & feature homes in your located city</motion.h5>
      <motion.button variants={btnright} className="head-btn mt-3 mx-2"><motion.span variants={btnright} className='span'></motion.span>About Us</ motion.button>
      <motion.button variants={btnright} className="head-btn mt-3 mx-2"><motion.span variants={btnright} className='span'></motion.span>Locations</ motion.button>
    </div>
  </motion.div>
  )
}
