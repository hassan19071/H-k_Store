import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { filterById } from "../redux/data/FilteringProducts";
import "./styling/single-product.scss";
import { addToCart, addToWishlist } from "../redux/data/UserData";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProducts = useSelector((state) => state.filter.singleProduct);
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(filterById(id));
  }, [dispatch, id]);

  const navigateToLogin = () => {
    navigate("/login");
  };

  const addTCart = (pro) => {
    dispatch(addToCart(pro));
  };

  const addTWishlist = (pro) => {
    dispatch(addToWishlist(pro));
  };

  return (
    <div className="single-product py-5">
      <div className="container px-lg-5">
        {singleProducts.map((product) => (
          <div className="row align-items-center py-5" key={product.id}>
            <div className="col-lg-6 pe-lg-4">
              <div className="img">
                <img
                  src={product.img}
                  alt={product.name}
                  width={"80%"}
                  style={{ margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-4 pe-5">
              <div className="text">
                <h1 className="fs-2">{product.name}</h1>
                <span className="text-danger" style={{ fontSize: "30px", fontWeight: "700" }}>
                  ${product.price}.00
                </span>
                <p className="text-black-50 mt-4">{product.text}</p>
                <div className="color mt-4 d-flex flex-column">
                  <label htmlFor="color" style={{ fontSize: "14px", fontWeight: "600" }}>
                    Pick a Color
                  </label>
                  <select id="color" className="custom-select">
                    {product.color?.map((col, ind) => (
                      <option key={ind} value={col}>
                        {col}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="size mt-4 d-flex flex-column">
                  <label htmlFor="size" style={{ fontSize: "14px", fontWeight: "600" }}>
                    Pick a Size
                  </label>
                  <select id="size" className="custom-select">
                    {product.size?.map((si, ind) => (
                      <option key={ind} value={si}>
                        {si}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="btns mt-4" style={{ fontSize: "12px" }}>
                  <button
                    onClick={user ? () => addTCart(product) : navigateToLogin}
                    className="btn btn-dark"
                    style={{ fontSize: "14px" }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={user ? () => addTWishlist(product) : navigateToLogin}
                    className="btn btn-light ms-2"
                    style={{ fontSize: "14px" }}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
