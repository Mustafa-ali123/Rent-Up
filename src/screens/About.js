import React from 'react'
import Navbar from '../component/Navbar'
import HeaderBar from '../component/HeaderBar'
import Footer from '../component/Footer'
import { Button } from '@mui/material'

function About() {
    return (
        <>
        {/* <HeaderBar label='About Us'/> */}
            <div className='about'>
                <div className='container py-5  '>
                    <div className='row'>
                        <div className='mt-4 py-4'>
                            <h1 className='mt-3'>About - Us Who We Are</h1>
                            <h5>The classical Latin literature from 45 BC, making it over 2000 years old.</h5>
                        </div>
                    </div>
                </div>
            </div>
                <div className='container agency pt-5 mt-5'>
                    <div className='row'>
                        <div className='col-lg-6 md-6 sm-12 '>
                          <h2>Our Agency Story</h2>
                          <p> classical Latin literature from it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintocka Latin  professor at</p>
                          <Button
                          variant='contained'
                          className='btn mb-4'
                          >Read More</Button>
                        </div>
                        <div className='col-lg-6 md-6 sm-12 text-center'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg'/>
                        </div>
                    </div>
                </div>

            {/*<Footer />*/}
        </>
    )
}

export default About