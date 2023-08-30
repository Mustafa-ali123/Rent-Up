import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { Link } from 'react-router-dom'

 const Footer = () => {
  return (
    <footer>
    <div className='f-container'>
      <div className='container'>
        <div className='row mx-auto'>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5 px-1 main'>
            <h1>Do You Have Questions ?</h1>
            <h6>Well tou help you to grow your craeer and growth</h6>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5 '>
            <button> Contact Us Todat</button>
          </div>
        </div>
      </div>
    </div>


    <div className='s-container' >
      <div className='container'>
        <div className='row '>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <h2><HomeIcon className='icon' /> Rent Up </h2>
            <h4 className='py-2'>Do You Need Help With Anythings?</h4>
            <p>classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor</p>
            <input placeholder=' Enter Email Address' type='text' />
            <button className='btn1 mb-1' variant='contained' color='success'>
              Subscribe</button>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 mt-5 text-center '>
            <ul className=' list-head'>
              <h4 className='py-2' >Products</h4>              
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 mt-5 text-center '>
            <ul className=' list-head'>
              <h4 className='py-2' >Locations</h4>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
            </ul>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 mt-5 text-center '>
            <ul className=' list-head'>
              <h4 className='py-2' >Features</h4>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
              <li><Link to='#'>Home Page</Link> </li>
            </ul>
          </div>
        </div>
      </div>
          <hr/>
          <h5 className='text-center mb-0 '>@ 2023 RentUp,Design by DarkCoder</h5>

    </div>

  </footer>
  )
}
export default Footer