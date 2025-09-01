import { TbShoppingBagPlus } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
export default function MainProductCard({item}){
    console.log(item)
    return(
        <div className="main-product-Card">
            <div className="product-image">
                <img src={item.image} alt="" />
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
                <h3 style={{textDecoration: "underline"}}>{item.size}</h3>
            </div>
        </div>
    )
}