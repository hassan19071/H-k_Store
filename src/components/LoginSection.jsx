import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styling/register.scss";
import { users } from "../assets/data/dummyData";
import { addCurentUser } from "../redux/data/UserData";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const LoginSection = () => {
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleSubmit = (e)=>{
    e.preventDefault();
    let correctRegister = users.filter((user)=>{
      return user.email === email && user.password === password;
    });
    if (correctRegister.length > 0){
      dispatch(addCurentUser(correctRegister));
      navigate("/");
    }else{
      toast.error("email or password is wrong!");
      setPassword("");
      setEmail("");
    }
  }

  return (
    <div className="login">
      <Toaster toastOptions={{
      duration: 4000,
      error: {
      style: {
        background: '#eee',
        color:"#000",
        textAlign:"center",
        fontSize:"14px",
        fontWeight:"600"
      },
    },
  }}/>
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
                onChange={(e)=> setEmail(e.target.value)}
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
                onChange={(e)=> setPassword(e.target.value)}
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
