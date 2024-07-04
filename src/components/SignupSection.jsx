// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loadUsers, saveUsers } from "../assets/data/dummyData";
import toast, { Toaster } from "react-hot-toast";

const SignupSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = loadUsers();

    if (users.some(user => user.email === email)) {
      toast.error("Email already exists!");
      return;
    }

    if (password.length < 8) {
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

    const newUser = {
      id: (users.length + 1).toString(),
      firstName,
      lastName,
      email,
      password,
      cart: [],
      wishlist: [],
      orders: []
    };

    users.push(newUser);
    toast.success("Sign-up successful! You can now log in.");
    saveUsers(users);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="signup">
      <Toaster />
      <div className="container">
        <div className="form">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 my-3">
              <div className="col-lg-6 col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  aria-label="First Name"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <div className="button col-12">
                <button className="btn btn-danger">Sign Up</button>
              </div>
              <div className="col-12">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupSection;
