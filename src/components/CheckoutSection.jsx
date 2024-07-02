import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styling/checkout.scss";
import { placeOrder } from "../redux/data/OrderSettings";
import { useNavigate } from "react-router";
import { clearCart } from "../redux/data/CartSettings";


const CheckoutSection = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  let subtotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let tax = (7 * subtotal) / 100;
  let shipptingFee = 10;
  let grandTotal = tax + shipptingFee + subtotal;
  let navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    email:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      placeOrder({
        cartItems: cart,
        shippingInfo,
        total: cart.reduce((acc, item) => acc + item.quantity * item.price, 0),
      })
    );
    setTimeout(()=>{
        dispatch(clearCart());
        navigate("/");
    },2000)
  };

  return (
    <div className="checkout py-5">
      <div className="container px-lg-5">
        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout-details">
          <h2 className="mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <div className="alert alert-danger text-center my-5" role="alert">
              Your cart is empty!
            </div>
          ) : (
            <div className="order-summary">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img} alt={item.name} width="60px" />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="total">
                Total: $
                {subtotal}
                .00
              </h3>
            </div>
          )}
        </div>

        <div className="shipping-info">
          <h2 className="mb-4">Shipping Information</h2>
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Place Order
                </button>
              </form>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4 ps-lg-5">
              <div className="fees-details bg-light p-5">
                <p>Subtotal: ${subtotal}.00</p>
                <p>Tax (7%): ${tax.toFixed(2)}</p>
                <p>Shipping Fee: ${shipptingFee}.00</p>
                <h3 className="total">Grand Total: ${grandTotal.toFixed(2)}</h3>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
