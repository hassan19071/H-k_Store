import React, { useEffect } from "react";
import "./styling/filter-products.scss";
import Product from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  filterByType,
  changeGender,
  changePrice,
  changeColor,
  changeSize,
} from "../redux/data/FilteringProducts";
import { addToCart, addToWishlist } from "../redux/data/userData";
const FilterSection = () => {
  let filteringProductss = useSelector(
    (state) => state.filter.filteringProducts
  );
  let gender = useSelector((state) => state.filter.genderFilter);
  let price = useSelector((state) => state.filter.priceFilter);
  let color = useSelector((state) => state.filter.colorFilter);
  let size = useSelector((state) => state.filter.sizeFilter);
  let dispatch = useDispatch();
  let { type } = useParams();
  let theProducts = filteringProductss
    .filter((product) => {
      return product.type.toLowerCase() === type;
    })
    .filter((pro) => {
      return gender ? pro.gender === gender : pro;
    })
    .filter((pro) => {
      return color ? pro.color?.includes(color) : pro;
    })
    .filter((pro) => {
      return size ? pro.size?.includes(size) : pro;
    })
    .sort((a, b) => {
      if (price === "high") {
        return b.price - a.price;
      } else if (price === "low") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });

  useEffect(() => {
    dispatch(filterByType(type));
  }, [dispatch, type, gender]);

  function clearFiltering() {
    dispatch(changeGender(""));
    dispatch(changePrice(""));
    dispatch(changeColor(""));
    dispatch(changeSize(""));
  }

  return (
    <div className="filter-section py-5">
      <div className="container">
        {filteringProductss.length ? (
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="filter-settings">
                <h2>Products filtering</h2>
                <div className="options">
                  <div className="gender mt-4">
                    <h3>Gender</h3>
                    <form className="filter-form">
                      <label>
                        <input
                          type="radio"
                          checked={gender === "male" ? true : false}
                          onChange={() => dispatch(changeGender("male"))}
                          name="gender"
                        />
                        <span>Male</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          checked={gender === "female" ? true : false}
                          onChange={() => dispatch(changeGender("female"))}
                          name="gender"
                        />
                        <span>Female</span>
                      </label>
                    </form>
                  </div>
                  <div className="price mt-4">
                    <h3>Price</h3>
                    <form className="filter-form">
                      <label>
                        <input
                          onChange={() => dispatch(changePrice("high"))}
                          checked={price === "high" ? true : false}
                          type="radio"
                          name="price"
                        />
                        <span>High to Low</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changePrice("low"))}
                          checked={price === "low" ? true : false}
                          type="radio"
                          name="price"
                        />
                        <span>Low to Hight</span>
                      </label>
                    </form>
                  </div>
                  <div className="color mt-4">
                    <h3>Color</h3>
                    <form className="filter-form">
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("black"))}
                          checked={color === "black" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Black</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("purple"))}
                          checked={color === "purple" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Purple</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("brown"))}
                          checked={color === "brown" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Brown</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("blue"))}
                          checked={color === "blue" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Blue</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("green"))}
                          checked={color === "green" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Green</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("gray"))}
                          checked={color === "gray" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Gray</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeColor("yellow"))}
                          checked={color === "yellow" ? true : false}
                          type="radio"
                          name="color"
                        />
                        <span>Yellow</span>
                      </label>
                    </form>
                  </div>
                  <div className="size mt-4">
                    <h3>Size</h3>
                    <form className="filter-form">
                      <label>
                        <input
                          onChange={() => dispatch(changeSize("S"))}
                          checked={size === "S" ? true : false}
                          type="radio"
                          name="size"
                        />
                        <span>S</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeSize("M"))}
                          checked={size === "M" ? true : false}
                          type="radio"
                          name="size"
                        />
                        <span>M</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeSize("L"))}
                          checked={size === "L" ? true : false}
                          type="radio"
                          name="size"
                        />
                        <span>L</span>
                      </label>
                      <label>
                        <input
                          onChange={() => dispatch(changeSize("XL"))}
                          checked={size === "XL" ? true : false}
                          type="radio"
                          name="size"
                        />
                        <span>XL</span>
                      </label>
                    </form>
                  </div>
                </div>
                <div className="clear mt-4">
                  <button
                    className="btn btn-danger w-100"
                    onClick={clearFiltering}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="products">
                <div className="row">
                  {theProducts.length > 0 ? (
                    theProducts.map((product) => {
                      return (
                        <div
                          className="col-lg-4 col-md-6 col-12 mb-4"
                          key={product.id}
                        >
                          <Product
                            img={product.img}
                            name={product.name}
                            text={product.text}
                            price={product.price}
                            id={product.id}
                            handleAddToWishlist={()=> dispatch(addToWishlist(product))} handleAddToCart={()=> dispatch(addToCart(product))}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-12 text-center py-5">
                      <div className="alert alert-danger" role="alert">
                        Use more general terms or remove some filters to see
                        more results.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-products py-5 text-center">
            <svg
              width={"50px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <span>No Products Found!</span>
            <div className="alert alert-danger mt-5" role="alert">
              Use alternative words or phrases that describe what you're looking
              for.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
