import React, { useState } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import { Button, Checkbox } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom'
import HeaderBar from '../component/HeaderBar';

export const Detail = () => {
    let location = useLocation()
    let navigate = useNavigate()
    return (
        <>
            <HeaderBar label='Card Detail'/>
            <div className='container py-5'>
                <div className='row py-5 my-5'>
                    <div className='col-lg-4 col-md-4 col-sm-6  mx-auto card mb-1 mt-5'>
                        <img className='mt-3' src={location.state} />
                        <div className='mx-3'>
                            <h6 className=' my-4 pt-3 text-center '><b>Read carpet real Estate</b><br />
                                <PlaceIcon /> M.A Jinnah Road, Karachi</h6>
                            <Button
                                className='btn1'
                                variant='contained'
                                color='warning'
                            // onClick={}
                            >Buy</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
            {/* <Confirm open='true' title='Sign Up' /> */}
        </>
    )
}
