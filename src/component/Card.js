import {motion} from 'framer-motion'
import React, { useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { Button, Checkbox } from '@mui/material';
import { CheckBox, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function Card() {

  const image = {
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

  const texts = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }
    }
  }
  
  let [data, setdata] = useState([
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqY22I5cV4rjKVTLpGngEvOnxjRWz2zyM_5Q&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDo0WKOK-Hf3PF6r_wNOXEMVbMQQG4Y5QTj_5jvm7Lsk1NPrM8imhvaCt0Yx7eqsHcZU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiT5Nan2EFMdw_4P68VZPasSUWNT8a55aJB-lr1Eji1b1sAPocKGtDpktZT6Xbdp1EyU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlyeBU_Ouclfc6sM3H6RZW8QXszyZOWtyuoG0smkPlatfd3-ckHkdKBYBPT4wIIHjD90&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAt_IpVS8prW_JJgdcJnUDS6M6p3VcDOFWFOIwkiczQL9d4LseK257lhg2IaURuz62w0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhFRTBJ_TecQ676aIkmb5NXkWCDqg8JFVcV6CA2k6Hx26tm6nAMY-N2T_7yOTZtFDa3s&usqp=CAU',
  ])
  let navigate = useNavigate()
  return (
    <div className='container my-5  '>
      <div className='row mx-auto'>
        <div className='text-center header mt-5 py-4'>
          <h1>Recent Property List</h1>
          <h5 className='mt-3'> classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor  </h5>
          <h5>from 45 BC, makiliterature from 45 BC, makiCollege in Virgini </h5>
        </div>

        {
          data.map((x, i) => (<motion.div  key={i}
            initial={"offscreen"}
            whileInView={"onscreen"}
            transition={{staggerChildren:0.5}}
            // viewport={{once:true,amount:1}} //card empty
             className='col-lg-4 col-md-4 col-sm-6  mx-auto card mb-5'>
            <motion.img variants={image} className='mt-3' src={x} />
            <motion.div className='mx-3 mt-1'>
              <motion.button
                variants={texts}
                className='card-btn1'
              >Sale</motion.button>
              <Checkbox
                className=' pl-5 mt-2'
                color="error"
                // onChange={}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
              <motion.h6 variants={image}className='mt-1' ><b>Read carpet real Estate</b><br />
                <PlaceIcon /> M.A Jinnah Road, Karachi</motion.h6>
              <motion.button
                variants={texts}
                className='card-btn2'
                onClick={() => navigate('/detail', {
                  state: x
                })}
              >Check</motion.button>
            </motion.div>
          </motion.div>
          ))
        }
      </div>
    </div>
  )
}

