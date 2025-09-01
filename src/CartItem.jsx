import Styles from "../src/ProductDetails.module.css"
import Style from '../src/Order.module.css'
import { MdCancel } from "react-icons/md";
// import { MdCake } from "react-icons/md";
// import { MdGirl } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export default function CartItem(props){
    const [quantity, setQuantity] = useState(props.quantity);
    const [price, setPrice] = useState(props.price);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
        setPrice(price + props.price);
    };  

    const handleDecrement = ()=>{
        if(quantity === 1){
            toast.info(` Cannot ship less than one of each item `,{
            style: {
                background: "#0e0e0e",
                color: "white",
                borderRadius: "10px",
                fontWeight: "bold",
                fontFamily:  'League Spartan',
                padding: "12px 16px",
            },
    
            });
            return
        }
            setQuantity(quantity -1)
            setPrice(price - props.price)

    }
    return(
        <>
             <div className={Style.cartItem}>
                            <div className={Style.cartImg}>
                                <input type="checkbox" className={Style.checkBox} />
                                <img src={props.image} alt="" />
                            </div>
                            <div className={Style.Details}>
                                <div className={Style.productName}>
                                    <span>{props.name}</span>
                                    <MdCancel size={'1.4em'}/>
                                </div>
                                <div className={Style.productDesc}>
                                    <motion.div 
                                        whileHover={{ scale: 1.1 ,backgroundColor: 'white', color: '#0e0e0e'}} // Enlarge on hover
                                        whileTap={{ scale: 0.9 }} // Shrink on click
                                        className={Styles.tag}>
                                        {props.size}
                                    </motion.div>
                                    <span><TbTruckDelivery/>{props.deliveryInfo}</span>

                                </div>
                                <div className={Style.productPrice}>
                                    <span>${price}</span>
                                    <div>
                                        <FaPlus onClick={handleIncrement} className={Style.plus}/>
                                        <span>{quantity}</span>
                                        <FaMinus onClick={handleDecrement} className={Style.plus}/> 
                                    </div>

                                </div>
                            </div>
                        </div>
        </>
    )
}