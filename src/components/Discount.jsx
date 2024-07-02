import React from "react";
import img from "../assets/images/clothes.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Discount = ()=>{
    return(
        <div className="discount py-5">
            <div className="container px-lg-5">
            <div className="row align-items-center">
               <div className="col-lg-6 order-lg-1 order-2 mt-lg-0 mt-4 pe-lg-5">
                <div className="text">
                    <h2 className="text-dark pe-5" style={{fontSize:"30px",textTransform:"uppercase"}}>Up to <span className="text-danger">50% </span> OFF on All Clothing! </h2>
                    <p className="text-black-50">Get ready to elevate your style with our incredible discount event! For a limited time, enjoy up to 50% OFF on a wide selection of our most popular clothing items. Whether you're looking for trendy tops, chic dresses, comfy loungewear, or stylish accessories, we've got you covered.</p>
                </div>
               </div>
               <div className="col-lg-6 order-lg-2 order-1">
                <div className="img">
                 <LazyLoadImage src={img} alt="clothes" width={"100%"} height={"300px"} placeholderSrc="https://placehold.co/600x400" />
                </div>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Discount;