import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swap from "./Swap-able-content"
import { IoEyeSharp } from "react-icons/io5";
import { HiEyeSlash } from "react-icons/hi2";
export default function Register(){

    const [see, setSee] = useState(false)


    const seePassword = ()=>{
        setSee((prev)=> !prev)
    }

    return(
        <div className="register-page">
            <Swap/>
            <div className="products-form">
                <h1 className="reg-h1" style={{fontSize:"3em"}}>Create an Account</h1>
                <p>Already have an Account? <Link to={'/Login'}>Log in</Link></p>
                <form className="form">
                    <div className="names">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="Email">
                       <input type="email" placeholder="Email"/> 
                    </div>

                    <div className="password">
                        <input type={see? "password": "text"} placeholder="Password"/>
                        {see? 
                            <HiEyeSlash onClick={seePassword} size={"1.5em"} /> :
                            <IoEyeSharp onClick={seePassword} size={"1.5em"} />
                        }
                    </div>
                    <div className="check">
                        <input style={{padding: "2em"}} type="checkbox" name="" id="" />
                        <span>I agree to the <a href="">Terms & Conditions</a></span>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.1 ,backgroundColor: 'white', color: '#0e0e0e'}} // Enlarge on hover
                    whileTap={{ scale: 0.9 }} // Shrink on click
                    className="sign-up">
                        Create account
                    </motion.div>
                </form>
            </div>
        </div>
    )
}