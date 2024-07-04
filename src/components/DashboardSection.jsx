// DashboardPage.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./styling/dashboard.scss";
import { loadUsers, saveUsers } from "../assets/data/dummyData"; // Adjust the import path as needed
import toast, { Toaster } from "react-hot-toast";
import { updateCurrentUser } from "../redux/data/UserData";

const DashboardSection = () => {
  const user = useSelector((state) => state.user.currentUser); // Assuming you have a user state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local state to manage form input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const logout = () => {
    localStorage.setItem("currentUser", JSON.stringify(null));
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (password && password.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }

    if (firstName.length < 3 || firstName.length > 12) {
      toast.error("First Name must be between 3 and 12 characters!");
      return;
    }

    if (lastName.length < 3 || lastName.length > 12) {
      toast.error("Last Name must be between 3 and 12 characters!");
      return;
    }

    if (password !== repeatPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      password: password ? password : user.password // Update password if provided
    };

    const users = loadUsers();
    const userIndex = users.findIndex((u) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      saveUsers(users);
      dispatch(updateCurrentUser(updatedUser)); // Assuming you have an action to update current user in the store
      toast.success("Account updated successfully!");
    }
  };

  return (
    <div className="dashboard py-5">
      <Toaster />
      <div className="container px-lg-5">
        {user ? (
          <>
            <div className="user-info my-5">
              <h2>Account Information</h2>
              <p>
                <strong>Name:</strong> {user.firstName + " " + user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
            <div className="order-history my-5">
              <h2>Order History</h2>
              {user.orders && user.orders.length > 0 ? (
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.orders.map((order) => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{new Date(order.id).toLocaleDateString()}</td>
                          <td>${order.total.toFixed(2)}</td>
                          <td>{order.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No orders found.</p>
              )}
            </div>
            <div className="wishlist my-5">
              <h2>Wishlist</h2>
              {user.wishlist && user.wishlist.length > 0 ? (
                <ul>
                  {user.wishlist.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No items in wishlist.</p>
              )}
            </div>
            <div className="cart my-5">
              <h2>Cart</h2>
              {user.cart && user.cart.length > 0 ? (
                <ul>
                  {user.cart.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No items in Cart.</p>
              )}
            </div>
            <form onSubmit={handleUpdate} className="dashboard-form">
              <h1 style={{ fontSize: "24px" }}>Update your account</h1>
              <div className="row g-3 my-3">
                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    aria-label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Repeat Password"
                    aria-label="Repeat Password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                  />
                </div>
                <div className="button col-12 text-end">
                  <button type="submit" className="btn btn-dark">Update</button>
                  <button type="button" className="btn btn-danger ms-3" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="alert alert-danger text-center my-5" role="alert">
            You need to be logged in to view this page.
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSection;
