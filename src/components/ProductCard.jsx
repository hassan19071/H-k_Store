import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useNavigate } from "react-router-dom";
import palceHolderImg from "../assets/images/placeholder.png";
import { useSelector } from "react-redux";

const Product = ({ img, id, text, price, name, handleAddToWishlist, handleAddToCart }) => {
  const handleCart = (e)=>{
    e.preventDefault();
    handleAddToCart();
  }
  const handleWishlist = (e)=>{
    e.preventDefault();
    handleAddToWishlist();
  }
  let navigate = useNavigate();
  let user = useSelector((state)=> state.user.currentUser);
  let navigateToLogin = (e)=>{
    if(!user){
      e.preventDefault();
      navigate("/login");
    }
  }
  return (
    <Link to={`/single-product/${id}`}>
      <div className="product">
        <div className="card">
          <LazyLoadImage
            src={img}
            className="card-img-top w-100"
            height={"350px"}
            alt={name}
            placeholderSrc={palceHolderImg}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "18px", fontWeight: "700" }}
            >
              {name}
            </h5>
            <p className="card-text text-black-50">{text}</p>
            <div
              className="price text-center mb-3"
              style={{ fontSize: "25px", fontWeight: "400" }}
            >
              ${price.toFixed(2)}
            </div>
            <div className="text-center">
              <button
                className="btn btn-dark"
                style={{
                  fontSize: "10px",
                }}
                onClick={user? handleCart : navigateToLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  width={"20px"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <button
                style={{
                    fontSize: "10px",
                }}
                className="btn btn-danger ms-3"
                onClick={user? handleWishlist : navigateToLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  width={"20px"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
