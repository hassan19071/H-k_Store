/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <div className="footer bg-light py-3">
            <div className="container px-lg-5">
                <div className="d-flex align-items-center justify-content-between">
                <Link to={"/"}>
                  <img src={logo} alt="logo" width={"100px"} />
                </Link>
                <p className="mb-0" style={{fontSize:"14px",fontWeight:"600"}}>Copyright&copy; 2024 by <a href="#">Hassan Khaled</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;