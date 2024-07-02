import React from "react";
import { Link } from "react-router-dom";
import "./styling/register.scss";
const SingupSection = () => {
  return (
    <div className="signup">
      <div className="container">
      <div className="form">
        <h1>Register</h1>
        <form>
          <div className="row g-3 my-3">
            <div className="col-lg-6 col-12">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-label="First Name"
                required
              />
            </div>
            <div className="col-lg-6 col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="Email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                required
              />
            </div>
            <div className="col-12">
              <input
                type="password"
                className="form-control"
                placeholder="Repeat Password"
                aria-label="Repeat Password"
                required
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

export default SingupSection;
