import React from "react";
import Product from "./ProductCard";
import { storeData } from "../assets/data/dummyData";
import { addToCart,addToWishlist } from "../redux/data/UserData";
import { useDispatch } from "react-redux";

const BestSeller = ()=>{
    let bestSellerProducts = storeData.filter((pro)=>{
        return pro.bestSeller === true;
    });
    let dispatch = useDispatch();
    return (
        <div className="best-seller py-5">
            <div className="container px-lg-5">
                <h1 style={{fontSize:"30px",fontWeight:"700",textTransform:"capitalize",marginBottom:"10px"}}>Bestseller products</h1>
                <div className="row">
                    {
                       bestSellerProducts.map((product)=>{
                        return (
                            <div className="col-lg-3 col-md-6 col-12 mt-4" key={product.id}>
                                <Product handleAddToWishlist={()=> dispatch(addToWishlist(product))} handleAddToCart={()=> dispatch(addToCart(product))} img={product.img} name={product.name} text={product.text} price={product.price} id={product.id} />
                            </div>
                        )
                       })
                    }
                </div>
            </div>
        </div>
    )
}

export default BestSeller;