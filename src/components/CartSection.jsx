import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/data/UserData";
import { useNavigate } from "react-router";
import "./styling/cart.scss";

const CartSection = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user.currentUser);
  let total = 0;
  let navigate = useNavigate();

  for (let i = 0; i < user?.cart.length; i++) {
    total += user?.cart[i].quantity * user?.cart[i].price;
  }

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  function handleCheckoutNavigate() {
    navigate("/checkout");
  }

  useEffect(()=>{
    if (!user){
        navigate("/login")
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user, navigate])
  return (
    <div className="cart py-5">
      <div className="container px-lg-5">
        <h1 className="cart-title">
          Shopping Cart
        </h1>
        {user?.cart.length === 0 ? (
          <div className="alert alert-danger text-center my-5" role="alert">
            Your cart is empty!
          </div>
        ) : (
          <div className="pros my-5">
            <div className="table-responsive">
              <table className="table" id="myTable">
                <thead className="thead">
                  <tr>
                    <th className="header">Product</th>
                    <th className="header">Name</th>
                    <th className="header">Price</th>
                    <th className="header">Quantity</th>
                    <th className="header">Total Price</th>
                    <th className="header">Action</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {user?.cart.map((item) => (
                    <tr key={item.id} className="tr">
                      <td className="cell">
                        <img src={item.img} alt={item.name} width="60px" />
                      </td>
                      <td className="cell">{item.name}</td>
                      <td className="cell">${item.price}.00</td>
                      <td className="cell">
                        <button
                          className="btn btn-dark"
                          onClick={() => handleDecreaseQuantity(item)}
                        >
                          -
                        </button>
                        <span className="quantity">
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-dark"
                          onClick={() => handleIncreaseQuantity(item)}
                        >
                          +
                        </button>
                      </td>
                      <td className="cell">
                        ${parseInt(item.price * parseInt(item.quantity))}.00
                      </td>
                      <td className="cell">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            width={"20px"}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="infos d-flex justify-content-between align-items-center">
              <div className="btns">
                <button className="btn btn-danger" onClick={handleClearCart}>Clear Cart</button>
                <button className="ms-2 btn btn-light" onClick={handleCheckoutNavigate}>
                  Checkout
                </button>
              </div>
              <div className="grand"><span>Grand Price:</span> ${total.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSection;
