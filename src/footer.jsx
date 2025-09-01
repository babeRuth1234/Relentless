import { GiFastArrow } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="sub">
                    <h1>Subscribe to our newsletter</h1>
                    <div className="email">
                        <input type="text" placeholder="Enter Your Email " />
                        <button>Subscribe</button>
                    </div>
                    <GiFastArrow className="disappearing" size={'12em'}/>
                </div>
              
                <div className="legs">
                    <FaInstagram className="linkies" size={'1.4em'}/>
                    <FaFacebookF className="linkies" size={'1.4em'}/>
                    <BsTwitterX className="linkies" size={'1.4em'}/>
                </div>
            </div>
        </>
    )
}