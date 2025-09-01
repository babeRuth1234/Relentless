import Styles from '../src/Account.module.css'
import { FaBell } from "react-icons/fa6";
import { GoHistory } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { ImHeadphones } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { FaDirections } from "react-icons/fa";
import { motion } from 'framer-motion';
export default function Account(){
    return(
        <>
           <div className={Styles.Account}>
                <div className={Styles.Email}>
                    <div className={Styles.Initials}>M</div>
                </div>
                <div className={Styles.Nazionale}>
                    <div className={Styles.messages}>
                            <FaBell size={"1.6em"}/>
                            <span>3</span>
                    </div>
                 
                </div>
            </div> 
            
            <div className={Styles.Tiles}>
                <motion.div 
                
               
                whileTap={{ scale: 0.9 }} // Shrink on click
                className={Styles.tile}>
                    <GoHistory size={"3em"}/>
                    History
                    <div className={Styles.Initials} style={{position:'absolute', right:0, top: 0}}>01</div>

                </motion.div>
                 <motion.div 
                    whileTap={{ scale: 0.9 }} // Shrink on click

                    className={Styles.tile}>
                    <IoMdHeartEmpty size={"3em"}/>
                    Wishlist    
                    <div className={Styles.Initials} style={{position:'absolute', right:0, top: 0}}>01</div>

                </motion.div>
                 <motion.div 
                    whileTap={{ scale: 0.9 }} // Shrink on click
                    className={Styles.tile}>
                    <ImHeadphones size={"3em"}/>
                    Help Center
                </motion.div>
                 <motion.div 
                    whileTap={{ scale: 0.9 }} // Shrink on click
                    className={Styles.tile}>
                    <IoCartOutline size={"3em"}/>
                    Cart
                    <div className={Styles.Initials} style={{position:'absolute', right:0, top: 0}}>01</div>

                </motion.div>
                 <motion.div 
                    whileTap={{ scale: 0.9 }} // Shrink on click
                    className={Styles.tile}>
                    <IoMoonOutline size={"3em"}/>
                    Dark Mode
                    <div className={Styles.Initials} style={{position:'absolute', right:0, top: 0}}>Off</div>

                </motion.div>
                <motion.div 

                    whileTap={{ scale: 0.9 }} // Shrink on click
                    className={Styles.tile}>
                    <FaDirections size={"3em"}/>
                    Address
                </motion.div>
            </div>

        </>
    )
}