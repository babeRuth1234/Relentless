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
                            toast.success(`${item.name} added to favourites!`, {
                                style: {
                                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    color: "white",
                                    borderRadius: "16px",
                                    fontWeight: "600",
                                    fontFamily: 'League Spartan',
                                    padding: "16px 20px",
                                    boxShadow: "0 8px 32px rgba(102, 126, 234, 0.35), 0 4px 16px rgba(0, 0, 0, 0.15)",
                                    border: "1px solid rgba(255, 255, 255, 0.18)",
                                    backdropFilter: "blur(10px)",
                                    fontSize: "15px",
                                    letterSpacing: "0.3px",
                                },
                                icon: <FaHeartCirclePlus style={{ fontSize: "22px" }} />,
                                progressStyle: {
                                    background: "rgba(255, 255, 255, 0.3)",
                                }
                            });
                        } else {
                            toast.info(`${item.name} removed from favourites`, {
                                style: {
                                    background: "linear-gradient(135deg, #434343 0%, #000000 100%)",
                                    color: "white",
                                    borderRadius: "16px",
                                    fontWeight: "600",
                                    fontFamily: 'League Spartan',
                                    padding: "16px 20px",
                                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.25)",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                    backdropFilter: "blur(10px)",
                                    fontSize: "15px",
                                    letterSpacing: "0.3px",
                                },
                                icon: <FaHeartCircleMinus style={{ fontSize: "22px" }} />,
                                progressStyle: {
                                    background: "rgba(255, 255, 255, 0.25)",
                                }
                            });
                        }

                        return newState;
                    });
                }}
            >
                {favourite ? <FaHeartCircleMinus className="favourite"/> :  <FaHeartCirclePlus className="favourite"/>}   

        </div>
        
            
            <div className="picture-top" style={{ backgroundColor: "none" }}>   

                <img src={item?.images?.[0]} alt={item.name} className="product-image" style={{background: "none"}} />
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
