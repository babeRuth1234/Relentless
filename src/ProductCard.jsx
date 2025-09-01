import { useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleMinus } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function ProductCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [favourite, setFavourite] = useState(false);


    const navigation = useNavigate();

    const handleClick = () => {
        navigation("/ProductDetails", {state: { item }});
    };
    

   
  
    return (
        <div 
        className="ProductCard" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        >
        <div className="favourite-div" onClick={(e) => {
                e.stopPropagation();
                setFavourite((prev) => {
                const newState = !prev;

                // Show toast message
                if (newState) {
                    toast.success(`${item.name} added to favourites! ❤️`,{
                        style: {
                          background: "#0e0e0e",
                          color: "white",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          fontFamily:  'League Spartan',
                          padding: "12px 16px",
                        },
                        icon: <FaHeartCirclePlus/>,
                      });
                } else {
                    toast.info(`${item.name} removed from favourites`,{
                        style: {
                          background: "#0e0e0e",
                          color: "white",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          fontFamily:  'League Spartan',
                          padding: "12px 16px",
                        },
                        icon: <FaHeartCircleMinus/>,

                      });
                }

                return newState;
                });
                }} style={{cursor: "pointer"}}>
                {favourite ? <FaHeartCircleMinus className="favourite"/> :  <FaHeartCirclePlus className="favourite"/>}   

        </div>
        
            
            <div className="picture-top" style={{ backgroundColor: "none" }}>   

                <img src={item.image} alt={item.name} className="product-image" style={{background: "none"}} />
            </div>

            <div className="product-details">
                <div className="product-description">{item.name}</div>
                <div className="product-description">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    (4.5)
                </div>
                <div className="price">
                    <p>${item.price}</p>
                    <TbShoppingBagPlus className="bag" />
                </div>
            </div>
            
        </div>

    );
}
