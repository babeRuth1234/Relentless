import Brands from "./Brands"
import ProductCard from "./ProductCard";
import MainProductCard from "./MainProductCard";
import { FaArrowRight } from "react-icons/fa6";
import data from "./data";
import { motion } from "framer-motion";

export default function App(){
  // toast.success("Item added to cart!");

  return(
    <>
   
    <div className="tags">
      <div className="all">All</div>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
      <Brands/>
    </div>

    <div className="Products-Item-slider">
      {data.map((item, index)=>(
        <motion.div 
        
        key={index} // Always add key when mapping
        whileHover={{ scale: 1.01 }} // Enlarge on hover
        whileTap={{ scale: 0.9 }} // Shrink on click
        transition={{ duration: 0.2 }} // Smoothens the transition
        >

          <ProductCard item={item} index={index} />

        </motion.div>
      ))

      }
 
    </div>
    <div className="seemore" >
      New In Town

    <FaArrowRight/>
      <hr />
    </div>
    <div className="main-products">

      
        {data.map((item, index)=>(
          
          <MainProductCard item={item} index={index}/>

        ))
      }
    </div>
    </>

  )
}