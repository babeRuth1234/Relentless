import Brands from "./Brands"
import ProductCard from "./ProductCard";
import MainProductCard from "./MainProductCard";
import { FaArrowRight } from "react-icons/fa6";
import data from "./data";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import API from './axios'
import { useState, useEffect } from "react";
import PageSkeleton from "./skeletons/PageSkeleton";
export default function App(){
   const [brands, setBrands] = useState([]);       // holds brand data
  const [products, setProducts] = useState([]);   // holds product data
  const [mainProducts, setMainProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // toast.success("Item added to cart!");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [brandRes, productRes, mainRes] = await Promise.all([
          API.get("/brands"),        // ✅ your backend route for all brands
          API.get("/products"),      // ✅ your backend route for all products
          API.get("/main-products")
        ]);
        console.log(brandRes.data);
        console.log(productRes.data);

        setBrands(brandRes.data);
        setProducts(productRes.data);
        setMainProducts(mainRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
   if (loading) return <PageSkeleton/>;
  return(
    <>
   
    <div className="tags">
      <div className="all">All</div>
      {brands.map((brand) => (
          <Brands key={brand._id} brand={brand} />
        ))}
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
        {products.map((item, index) => (
          <motion.div
            key={item._id || index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ProductCard item={item} index={index} />
          </motion.div>
        ))}
      </div>
    <div className="seemore" >
      New In Town

    <FaArrowRight/>
      <hr />
    </div>
    <div className="main-products">
      {loading ? <ProductCardSkeleton/>: mainProducts.map((item, index) => (
        <MainProductCard key={item._id || index} item={item} index={index} />
      ))}
    </div>

    </>

  )
}