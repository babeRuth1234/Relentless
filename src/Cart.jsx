import Style from '../src/Order.module.css'
import { GiBowTieRibbon } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

import cartItems from './cart';
import CartItem from './CartItem';

export default function Cart(){
    return(
        <>
            <div className={Style.span}>
                <div className={Style.onTheWay}>
                    <div className={Style.pageIndicator} style={{background: '#0e0e0e', color: '#fff', border: 'solid 3px #3498db'}} data-label="Cart">1</div>
                    <div className={Style.pageIndicator} data-label="Address">2</div>
                    <div className={Style.pageIndicator} data-label="Payment">3</div>
                    <hr className={Style.pageHr}/>
                </div>
            </div>
            <div className={Style.cartConfig}>
                <div className={Style.productChecks}>
                    <div className={Style.leftCheck}>
                        <div>
                            <input type="checkbox" className={Style.checkBox} />
                            <span>1</span>/
                            <span>4</span>
                            <span>items selected</span>
                        </div>
                        <div className={Style.rightCheck}>
                            {/* <input type="checkbox" className={Style.checkBox} /> */}
                             <span> Move to wishlist</span> | <span>Remove</span>
                        </div>
                    </div>

                    <div className={Style.product}>

                    {
                        cartItems.map((items, index)=>(

                            <CartItem key={index} {...items}/>
                        ))
                    }

                        {/* <div className={Style.cartItem}>
                            <div className={Style.cartImg}>
                                <input type="checkbox" className={Style.checkBox} />
                                <img src="src\03_Style_e9146f17-d6b3-47e0-9094-50a6e3991e81.webp" alt="" />
                            </div>
                            <div className={Style.Details}>
                                <div className={Style.productName}>
                                    <span>Cute worm baby toys</span>
                                    <MdCancel/>
                                </div>
                                <div className={Style.productDesc}>
                                    <span><MdCake/> 1-2</span>
                                    <span><MdGirl/> Girl</span>
                                    <span><TbTruckDelivery/> Express delivery in 3 days</span>

                                </div>
                                <div className={Style.productPrice}>
                                    <span>$42.20</span>
                                    <div>
                                        <FaPlus/>
                                        <span>2</span>
                                        <FaMinus/> 
                                    </div>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className={Style.coupons}>
                    <h2>Gifting</h2>
                    <div className={Style.gifting}>
                        <div className={Style.giftTab}>
                            <h1>Buying for loved one?</h1>
                            <span>send with personalized wraps with $20</span>
                            <button>Add gift wrap</button>
                        </div>
                        <GiBowTieRibbon className={Style.giftIcon} />
                        
                    </div>

                    <h2>Price Details</h2>
                    <div className={Style.PriceList}>
                        <span style={{fontWeight:'600'}}>{cartItems.length} item</span>
                        <div className={Style.itemsCount}> 
                            <div>1 x Cute worm baby toys</div>
                            <div>$45.20</div>
                        </div>
                        <div className={Style.itemsCount}> 
                            <div>Coupon</div>
                            <div>-$2.50</div>
                        </div>
                        <div className={Style.itemsCount}> 
                            <div>Delivery Charges</div>
                            <div>Free Delivery</div>
                        </div>
                        <div className={Style.itemsCount}> 
                            <div>Total Amount</div>
                            <div>$67.09</div>
                        </div>
                    </div>
                        <div className={Style.btn}>
                            Place order
                            <FaArrowRight/>
                        </div>
                </div>
            </div>
        </>
    )
}