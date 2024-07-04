import React from "react";
import { storeData } from "../assets/data/dummyData";
import { useParams } from "react-router";
import Product from "./ProductCard";
import { useDispatch } from "react-redux";
import { addToWishlist, addToCart } from "../redux/data/userData";

const RelativeProducts = ()=>{
    let { id } = useParams();
    let dispatch = useDispatch();
    let product = storeData.filter((pro)=>{
        return pro.id === id;
    })
    let relativeProducts = storeData.filter((pro)=>{
        return pro.id !== product[0].id && pro.type === product[0].type;
    });
    
    let finalFilter = relativeProducts.filter((pro,ind)=>{
        return ind < 4;
    });

    return (
        <div className="relative-products py-5">
            <div className="container">
                <h1 style={{fontSize:"23px",fontWeight:"700",textTransform:"capitalize",marginBottom:"10px"}}>Relative Products</h1>
                <div className="row">
                    {
                        finalFilter.map((product)=>{
                          return  <div className="col-lg-3 col-md-6 col-12 mt-4" key={product.id}>
                            <Product handleAddToWishlist={()=> dispatch(addToWishlist(product))} handleAddToCart={()=> dispatch(addToCart(product))} img={product.img} name={product.name} text={product.text} price={product.price} id={product.id} />
                          </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RelativeProducts