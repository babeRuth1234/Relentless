import { HiBars3BottomLeft } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Details_bar({toggle}){
    return(
        <div className="Mobile_Nav">
        <motion.div
          whileHover={{ scale: 1.1 }}  // Enlarge on hover
          whileTap={{ scale: 0.8 }}   // Shrink on click
        >
          <HiBars3BottomLeft style={{cursor:'pointer'}} size={"2.6em"} onClick={toggle} />
        </motion.div>
        <h1 style={{letterSpacing:"-0.1em"}}>-Relentless-</h1>
        <motion.div 
          whileHover={{ scale: 1.1 }}  // Enlarge on hover
          whileTap={{ scale: 0.9 }}   // Shrink on click
          className="cart-div">
          cart
          <Link to={'/Cart'} className="circle" style={{textDecoration: 'none'}}>01</Link>
        </motion.div>
      </div>
    )
}