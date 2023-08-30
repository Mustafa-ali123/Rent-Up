import HomeIcon from '@mui/icons-material/Home';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import Confirm from "./Confirm"
import { Delete, GetById } from '../config/ApiMethod';

function Navbar({ send }) {
    let navigate = useNavigate()
    let [data, setdata] = useState()
    let [show, setshow] = useState(false)
    let logout = () => {
        GetById(`person`, data.email).then((res) => {
            // console.log(res.data._id)
            Delete(`person`, res.data._id).then((res) => {
                setshow(true)
                let jsonData = JSON.stringify("Logout")
                localStorage.setItem("Data", jsonData)
            }).catch((e) => console.log(e))
        }).catch((e) => console.log(e))

    }

    useEffect(() => {
        let mydata = JSON.parse(localStorage.getItem("Data"))
        setdata(mydata)
        if(!mydata){
            setdata("Logout")
        }

    }, [data])
    return (<nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container-fluid ">
            <Link className="navbar-brand font-weight-bolder" to="#">  <HomeIcon className='nav-logo' /> Rent Up</Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav  ">
                    <li className="nav-item ">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  active" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/location">Location</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/feature">Features</Link>
                    </li>
                    <li>{data=="Logout"?<button onClick={() => send(true)} className='nav-btn'>Sign Up</button> : <button onClick={logout} className='nav-btn2'>Log Out</button>}
                    </li>
                </ul>
            </div>
        </div>
        <Confirm open={show} closed={(e) => setshow(e)} title="Logout" body="You are Logout" />
    </nav>
    )
}

export default Navbar


// Back-End-Api-Authentication
