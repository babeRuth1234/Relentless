import { FaArrowRight } from "react-icons/fa6";
import data from "./data";
import { useEffect, useState } from "react";
export default function Swap(){

    const [index, setIndex] = useState(0); // Track current image index

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length); // Loop through images
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    return(
      <div className="main-form-image">
          <div className="left-images">
            <img src={data[index].image} alt="" />
            <div className="form-entertainers">
                <div className="form-nav">
                    <h1 style={{color: 'white'}}>-Radiate-</h1>
                    <div style={{width: 'fit-content'}} className="main-price">
                        <div className="buy-now">
                        <p style={{margin: 0, padding: 0, color: 'white'}}> Back to store</p>
                            <FaArrowRight size={"1em"}/>
                        </div>
                    </div> 
                </div>
                <div className="form-bottom">
                    <h1>{data[index].description}</h1>
                    <h1>From The best Brands</h1>
                    <div className="loaders">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}