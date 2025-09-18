import Brands from "./Brands"
import ProductCard from "./ProductCard";
import MainProductCard from "./MainProductCard";
import { FaArrowRight } from "react-icons/fa6";
import data from "./data";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";

export default function App(){
  // toast.success("Item added to cart!");
  const Data = [
  {
    brand: "public/Relentless_Global_Logo_White-removebg-preview.png",
    text: "Global",
    title: "Relentless Global"
  },
  {
    brand: "public/_Relentless_Baby_Logo-removebg-preview.png",
    text: "Baby",
    title: "Relentless Baby"
  },
  {
    brand: "public/Relentless_Home-removebg-preview.png",
    text: "Home",
    title: "Relentless Home"
  },
  {
    brand: "public/Relentless_Marketing_Hub_Logo_White-removebg-preview.png",
    text: "Marketing",
    title: "Relentless Marketing"
  },
  {
    brand: "public/Relentless_Ministries_Logo-removebg-preview.png",
    text: "Ministries",
    title: "Relentless Ministries"
  }
];


  return(
    <>
   
    <div className="tags">
      <div className="all">All</div>
      {Data.map((item)=> (

        <Brands brand={item}/>
      ))

      }
      {/* <Brands/>
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
      <Brands/> */}
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