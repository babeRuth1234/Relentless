import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";
import Styles from './ProductDetails.module.css';
import Sizes from './Sizes'
import ColourBlock from "./colour";
import ProductCard from "./ProductCard";

export default function ProductDetails() {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    
    const location = useLocation();
    const { item } = location.state || {};

    // Extract sizes - convert to array if string, or use default
   const rawSize = item?.details?.size;

const sizes = rawSize 
  ? Array.isArray(rawSize)
    ? rawSize.flatMap(s => s.split(',').map(str => str.trim()))
    : rawSize.split(',').map(s => s.trim())
  : ["One Size"];


    // Extract colors from item or use defaults
    const colours = item?.details?.colors 
        ? (Array.isArray(item.details.colors) ? item.details.colors : item.details.colors.split(',').map(c => c.trim()))
        : "";

    const playVideo = (e) => {
        e.stopPropagation();
        setIsHovered(prev => !prev);
    };

    if (!item) {
        return (
            <div className={Styles.errorContainer}>
                <h2>Product not found</h2>
                <Link to="/" className={Styles.backLink}>Go back to home</Link>
            </div>
        );
    }
    // console.log()

    return (
        <div className={Styles.pageContainer}>
            <div className={Styles.ProductCard}>
                <div className={Styles.picture_top}>
                    <div className={Styles.mainImageContainer}>
                        {item?.images?.length > 0 ? (
                            isHovered && item?.video ? (
                                <video
                                    src={item.video}
                                    autoPlay
                                    loop
                                    muted
                                    className={Styles.productVideo}
                                />
                            ) : (
                                <img
                                    src={item.images[selectedImage] || item.images[0]}
                                    alt={item.name || "Product image"}
                                    className={Styles.productImage}
                                />
                            )
                        ) : (
                            <p>No media available</p>
                        )}

                        {item?.video && (
                            <div className={Styles.playSound} onClick={playVideo}>
                                {isHovered ? <FaPause /> : <FaPlay />}
                            </div>
                        )}
                    </div>

                    {/* Image Gallery Thumbnails */}
                    {item?.images?.length > 1 && (
                        <div className={Styles.imageGallery}>
                            {item.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`${Styles.thumbnail} ${selectedImage === index ? Styles.activeThumbnail : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img src={image} alt={`${item.name} view ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={Styles.product_details}>
                    <div className={Styles.product_name}>{item.name}</div>
                    <div className={Styles.price}>
                        <p>${item.price}</p>
                        <span className={Styles.rating}>(4.5)</span>
                    </div>
                    <div className={Styles.stock}>
                        {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                    </div>
                     <motion.div className={Styles.tags}>
                    {item.category === "Fashion" ? sizes.map((size, index) => (
                        <Sizes key={index} size={size} />
                    )) : ""}
                </motion.div>
                <motion.div className={Styles.colour_list}>
                    {  colours ?  colours.map((color, index) => (
                        <ColourBlock key={index} color={color} />
                    )) : ""}
                </motion.div>
                 <motion.div className={`${Styles.checkoutButton} ${Styles.mobileCheckout}`}>
                    <Link to='/Cart' className={Styles.checkoutLink}>
                        Add to Cart 
                        {/* ${item.price} */}
                    </Link>
                </motion.div>
                <div className={Styles.productDetailsSection}>
                    <h3 className={Styles.describeTitle}>Product Details</h3>
                    <p className={Styles.describe_text}>{item.description}</p>
                    
                    {item.details && (
                        <div className={Styles.specifications}>
                            {item.details.weight && <p><strong>Weight:</strong> {item.details.weight} lbs</p>}
                            {item.details.height && <p><strong>Height:</strong> {item.details.height} inches</p>}
                            {item.details.width && <p><strong>Width:</strong> {item.details.width} inches</p>}
                            {item.details.power && <p><strong>Power:</strong> {item.details.power}W</p>}
                        </div>
                    )}

                    {item.category && <p className={Styles.category}><strong>Category:</strong> {item.category}</p>}
                    {item.brand && <p className={Styles.brand}><strong>Brand:</strong> {item.brand.name || item.brand}</p>}
                    {item.brand && <p className={Styles.brand}><strong>Gender:</strong> {item.details.gender}</p>}
                    {item.brand && <p className={Styles.brand}><strong>Season:</strong> {item.details.season}</p>}
                    {/* {item.brand && <p className={Styles.brand}><strong>Brand:</strong> {item.brand}</p>} */}
                    
                </div>
                <motion.div className={`${Styles.checkoutButton} ${Styles.desktopCheckout}`}>
                    <Link to='/Cart' className={Styles.checkoutLink}>
                        Add to Cart ${item.price}
                    </Link>
                </motion.div>
                </div>

             
            </div>
        </div>
    );
}
