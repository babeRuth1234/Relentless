import Details_bar from "./Detail-bar"
import Styles from '../src/ProductDetails.module.css'
import Sizes from "./Sizes"
import { color } from "framer-motion"
import { useLocation } from "react-router-dom"
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import data from "./data";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useState } from "react"
import ColourBlock from "./colour"
import { Link } from "react-router-dom"

export default function ProductDetails(){
    const [isHovered, setIsHovered] = useState(false);
      
    


    let location = useLocation()
    const { item } = location.state || {};
    const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XX", "L","XL"]
    const colours = ["#e53245", "#d7c3b0", "#ede8dd", "#101a1b", "#ff5333", "#ff5333", "#bd9d93" ]
    const playVideo = (e)=>{
        e.stopPropagation();
        setIsHovered(prev=> !prev)
    }
    return(
        <>
            {/* <Details_bar /> */}
            <div className={Styles.ProductCard}>
                       <div className={Styles.picture_top}  style={{backgroundColor: "transparent"}}>
                           {/* <img src={item.image}alt="" /> */}
                           <div className="picture-top" style={{ backgroundColor: "none" }}>
                {isHovered ? (
                    <video src={item.video} autoPlay loop muted className="product-video" />
                ) : (
                    <img src={item.image} alt={item.name} className="product-image" style={{background: "none"}} />
                    
                )}
                <div className="playSound">
                    {
                        isHovered ? (
                            <FaPause className="" onClick={playVideo} />
                        ) : (
                            <FaPlay className="" onClick={playVideo} />
                        )
                    }
                </div>
                {/* <FaPause   className="playSound"/> */}
            </div>
                       </div>
                       <div className={Styles.product_details} >
                           <div className={Styles.product_description} style={{fontSize: "1.2em"}} >A pair of nikes for the kids of wikies</div>
                           <div className={Styles.price}>
                               {/* <p>${item.price}</p> */}
                               
                               {/* <TbShoppingBagPlus fill="" className="bag"/> */}
                               (4.5)
                           </div>
                       </div>
                        <motion.div className="tags" style={{alignItems: "left", paddingLeft: 0}}>
                            {
                                sizes.map((size, index) => (
                                    <Sizes key={index} size={size}/>
                                ))
                            }
                        
                        </motion.div>
                        <motion.div className=" colour_list" >
                           
                            {
                                colours.map((Color, index)=>(

                                    <ColourBlock key={index} Color={Color}/>
                                ))
                            }
                        
                        </motion.div>
                        <motion.div style={{ width: "100%",textDecoration: 'none',cursor:'pointer', minHeight: '3em', marginTop: '1em' }} to={'/Register'} className="sign-up">
                            <Link style={{color:"white", textDecoration: "none", height: '100%', width: '100%', display: 'flex ', justifyContent:'center', alignItems: 'center'}} to={'/Cart'}>Checkout ${item.price}</Link>
                        </motion.div>

                        <h3 className={Styles.describe_text}>
                                {item.description}
                        </h3>

            </div>
            <div className="Products-Item-slider " >
                    {data.map((item, index)=>(
                        <motion.div 
                        
                        key={index} // Always add key when mapping
                        whileHover={{ scale: 1.01 }} // Enlarge on hover
                        whileTap={{ scale: 0.9 }} // Shrink on click
                        transition={{ duration: 0.2 }} // Smoothens the transition
                        >

                        <ProductCard item={item} index={index} />

                        </motion.div>
                    ))}
            </div>

            
        </>
    )
}