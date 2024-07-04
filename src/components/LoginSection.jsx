// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styling/register.scss";
import { loadUsers } from "../assets/data/dummyData";
import toast, { Toaster } from "react-hot-toast";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = loadUsers();
    const correctRegister = users.filter(user => user.email === email && user.password === password);
    if (correctRegister.length > 0) {
      const user = correctRegister[0];
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
      window.location.reload();
    } else {
      toast.error("Email or password is wrong!");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div className="login">
      <Toaster />
      <div className="container">
        <div className="form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 my-3">
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
              <div className="button col-12">
                <button className="btn btn-danger">Login</button>
              </div>
              <div className="col-12">
                You don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
