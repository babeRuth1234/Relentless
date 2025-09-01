import { SiFila } from "react-icons/si";
import { motion } from "framer-motion";
export default function Brands(){
    return(
        <motion.div 
        whileHover={{ scale: 1.1 ,backgroundColor: '#0e0e0e', color: 'white'}} // Enlarge on hover
        whileTap={{ scale: 0.9 }} // Shrink on click
        className="tag">
        <SiFila size={"2em"}/></motion.div>
    )
}