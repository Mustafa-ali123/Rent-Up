import MessageIcon from '@mui/icons-material/Message';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import HeaderBar from '../component/HeaderBar';

export const Feature = () => {
    let [agtdata, setagtdata] = useState([
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU',
          locate: 'Developer, Pakistan',
          name: 'Harry'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzfl6FcEKr6_wP0cEaz8pTGvSuRRAAme5AEtLj1xnA5ZIkB74y1j8O31tkwr3TDK6IKc&usqp=CAU',
          locate: 'Developer, Pakistan',
          name: 'Sara'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKNH-Og67FxF8-6Qi7DakpXpIXa5YYFd3AAPm-9C2BuEldqJo1VcqFw_vxhpDTyzI3hU&usqp=CAU',
          locate: 'Developer, Afganistan',
          name: 'Anna,san'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CoZHb7d_hb9TPoHw1Y8SbFmIzK8Cr8o-WUIeNLLsELC81YxIEHFGoEpMzH23_jLBmYY&usqp=CAU',
          locate: 'Developer, Pakistan',
          name: 'Sam'
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5k-o7VNWpWRBm3lfoH55r6FJNMA27QoIzCZpzV7krD9jFR980LJouxpr897lxTk-PHjU&usqp=CAU',
          locate: 'Developer, Canada',
          name: 'Losisee'
    
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU',
          locate: 'Developer, USA',
          name: 'David'
        }
      ])
  return (<>
      <HeaderBar label="Featured Agent"/>
    <div className='container py-5'>
    <div className='row'>
      <div className='text-center header mt-4 py-4'>
        <h1>Our Featured Agents</h1>
        <h5 className='mt-3'> classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at </h5>
        <h5>from 45 BC, makiliterature from 45 BC, makiCollege in Virgini </h5>
      </div>
      {
        agtdata.map((x, i) => (
          <div key={i} className='col-lg-4 col-md-4 col-sm-12 mx-auto mx-2 mb-4 agent'>
            <button className='agt-btn1 mt-3'>72 Listings</button>
            <br />
            <img className='text-center mx-auto my-3' src={x.img} />
            <h4 className='text-center'>{x.name}</h4>
            <h5 className='text-center'>{x.locate}</h5>
            <ul className='icon-list py-2 '>
              <li> <FacebookIcon color="black" /></li>
              <li> <LinkedInIcon color="black" /></li>
              <li> <TwitterIcon color="black" /></li>
              <li> <InstagramIcon color="black" /></li>
            </ul>
            <ul className='btn-icon '>
              <li className='textIcon '><button className='agt-btn2'>Message <MessageIcon /></button></li>
              <li><button className='btn-call'><CallIcon /></button></li>
            </ul>
          </div>

        ))
      }
    </div>
  </div>
  <Footer/>
  </>
  )
}
