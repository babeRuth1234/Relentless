import { TbShoppingBagPlus } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function MainProductCard({item}){
     const navigation = useNavigate();

    const handleClick = () => {
        navigation("/ProductDetails", {state: { item }});
    };
    const rawSize = item?.details?.size;

    const sizes = rawSize
        ? Array.isArray(rawSize)
        ? rawSize.flatMap((s) => s.split(",").map((str) => str.trim()))
        : rawSize.split(",").map((s) => s.trim())
        : [""];

    // ✅ Get only the first size safely
    const firstSize = sizes[0] || "";

    console.log(item)
    return(
        <div
        onClick={handleClick}        
        className="main-product-Card">
            <div className="product-image">
                <img src={item.images[0]} alt="" />
                <TbShoppingBagPlus fill="" className="bag main-bag"/>
                <div className="price-badge">
                    <div className="main-price">
                        <div className="buy-now">
                           <p style={{margin: 0, padding: 0}}> Buy now</p>
                            <FaArrowRight size={"1em"}/>
                        </div>
                        <div className="main-price-numbers">${item.price}</div>
                    </div>                
                </div>
            </div>
            <div className="main-products-description">
                <div className="further-description">
                    <h2  style={{margin: 0, padding: 0}}>{item.name}</h2>
                    <span>{item.description.length > 100 ? item.description.slice(0,80) + '...' : item.description}</span>
                </div>
                <h3 style={{textDecoration: "underline"}}>{firstSize}</h3>
            </div>
        </div>
    )
}