import React, { useState } from 'react'
import { Get, Post } from '../config/ApiMethod';
import { Link, json, useNavigate } from 'react-router-dom';
import Confirm from "../component/Confirm"

export default function Login({open}) {
    const navigate = useNavigate();
    const [data, setdata] = useState();
    const [text, settext] = useState("You Login Successfully :)");    
    const [show, setshow] = useState(false);

    let login = () => {
        Post("/person/login", data).then((res) => {
            if (res.data == "Login Sccessfully") {                       
                let jsonData = JSON.stringify(data)
                localStorage.setItem("Data", jsonData)
                // let mydata = JSON.parse(localStorage.getItem("Data")) 
                // console.log(mydata)
                setshow(true)
            }
        }).catch((e) => {
            settext(e)
            setshow(true)
        })
    }

    return (
        <>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-12 md-12 col-sm-12 text-center sign login mx-auto'>
                        <h2 className="mt-5 py-3 ">Sign In</h2>
                        <input onChange={(e) => setdata({ ...data, email: e.target.value })} type=" Email,number " placeholder=" Email or Phone Number" /><br />
                        <input onChange={(e) => setdata({ ...data, password: e.target.value })} type="Password" placeholder=" Pasword" /><br />
                        <p className="my-4" ><Link className="link" to="/signup">Create the new account</Link></p>
                        <button onClick={login} type="submit" className="s-btn ">Sign In</button>
                    </div>
                </div>
            </div>
            <Confirm open={show} closed={(e) => {
                setshow(e)
                navigate('/')
            }} title="Log In " body={text}/>
        </>
    )
}