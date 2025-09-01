import { SiFila } from "react-icons/si";
import { motion } from "framer-motion";
import Styles from "../src/ProductDetails.module.css"
export default function Sizes(props){
    return(
        <motion.div 
            whileHover={{ scale: 1.1 ,backgroundColor: 'white', color: '#0e0e0e'}} // Enlarge on hover
            whileTap={{ scale: 0.9 }} // Shrink on click
            className={Styles.tag}>
           {props.size}
        </motion.div>
    )
}