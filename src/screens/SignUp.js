import { useState } from "react"
import { Post } from "../config/ApiMethod"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Confirm from "../component/Confirm"


export const SignUp = ({ open }) => {
    let [data, setdata] = useState()
    let [text, settext] = useState("You sign up successfully :)" )
    let [show, setshow] = useState(false)
    let navigate = useNavigate()
    const signup = () => {
        // console.log(data)
        Post("/person/signup", data).then((res) => {
            setshow(true)
        }).catch((e) => {
            settext(e)
            setshow(true)
        })
    }

    return (
        <> <div className='main-container'>
            <div className='container '>
                <div className='row mx-auto '>
                    <div className='col-lg-12 md-12 col-sm-12 text-center sign mx-auto'>
                        <button onClick={() => open(false)} className="s-btn2">X</button>
                        <h2 className="mt-5">Sign Up</h2>
                        <input type="email" onChange={(e) => setdata({ ...data, userName: e.target.value })} placeholder=' First Name' /><br />
                        <input type="email" onChange={(e) => setdata({ ...data, email: e.target.value })} placeholder=' Email Address' /><br />
                        <input type="password" onChange={(e) => setdata({ ...data, password: e.target.value })} placeholder=' Password' /><br />
                        <p className="my-3" ><Link className="link" to="/login"> You have already account</Link></p>
                        <button onClick={signup} type="submit" className="s-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
            <Confirm open={show} closed={(e) => {
                setshow(e)
                navigate("/login")
            }} title="Sign Up" body={text}/>
        </>
    )
}