/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  let [searchValue, setSearchValue] = useState("");
  let navigate = useNavigate();
  let user = useSelector((state) => state.user.currentUser);
  function HandleSubmit(e) {
    e.preventDefault();
    if (searchValue.trim() === "") {
      toast.error("Search field cannot be empty!");
    } else {
      navigate(`/shop/${searchValue}`);
    }
    setSearchValue("");
  }

  let navigateToLogin = (e)=>{
    if(!user){
      e.preventDefault();
      navigate("/login");
    }
  }

  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#eee",
              color: "#000",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "600",
            },
          },
          error: {
            style: {
              background: "#eee",
              color: "#000",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "600",
            },
          },
        }}
      />
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container px-lg-5">
          <Link className="navbar-brand" to={"/"}>
            <img src={logoImg} alt="logo" width="100px" />
          </Link>
          <div className="icons d-flex d-lg-none align-items-center">
            <Link to="/cart" style={{ color: "#111" }} onClick={navigateToLogin}>
              <div
                className="add-to-cart w-lg-100 text-lg-end ms-3 position-relative"
                style={{ width: "30px", cursor: "pointer" }}
              >
                <svg
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span
                  className="position-absolute bg-dark text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    top: "-10%",
                    right: "-30%",
                  }}
                >
                  {user?.cart?.length || 0}
                </span>
              </div>
            </Link>
            <Link to="/wishlist" style={{ color: "#111" }} onClick={navigateToLogin}>
              <div
                className="add-to-wishlist w-lg-100 text-lg-end  ms-3 position-relative"
                style={{ width: "30px", cursor: "pointer" }}
              >
                <svg
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <span
                  className="position-absolute bg-dark text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    top: "-10%",
                    right: "-30%",
                  }}
                >
                  {user?.wishlist?.length || 0}
                </span>
              </div>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto d-lg-none mb-2 mb-lg-0 justify-content-center">
              <div className="dash-icon ms-auto text-center" style={{width:"fit-content"}}>
              <Link to="/dashboard" style={{color:"#111"}}>
                  <div className="user d-flex flex-column my-3 align-items-end justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="35px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span style={{fontSize:"14px",fontWeight:"600",textTransform:"capitalize"}}>{
                    user?.firstName
                  }</span>
                </div> 
                </Link>
              </div>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/hoodies`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Hoddies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/dresses`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Dresses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/suits`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Suits
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/shoes`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Shoes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/t-shirts`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  T-shirts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/jeans`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Jeans
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/jackets`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Jackets
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={`/shop/bags`}
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Bags
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={HandleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
            <div className="login-btn ms-lg-3 mt-lg-0 mt-3">
              {user?.firstName? (
                <Link to="/dashboard" style={{color:"#111"}} className="d-lg-flex d-none">
                  <div className="user d-flex align-items-center flex-column">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width="25px"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span style={{fontSize:"14px",fontWeight:"600",textTransform:"capitalize"}}>{
                    user.firstName
                  }</span>
                </div> 
                </Link>
              ) : (
                <button className="btn btn-dark" onClick={()=> navigate("/login")}>Login</button>
              )}
            </div>
            <div className="icons d-none d-lg-flex align-items-center">
              <Link to="/cart" style={{ color: "#111" }} onClick={navigateToLogin}>
                <div
                  className="add-to-cart w-lg-100 text-lg-end ms-3 position-relative"
                  style={{ width: "30px", cursor: "pointer" }}
                >
                  <svg
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
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span
                    className="position-absolute bg-dark text-white d-flex align-items-center justify-content-center"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      fontSize: "12px",
                      top: "-10%",
                      right: "-30%",
                    }}
                  >
                    {user?.cart?.length || 0}
                  </span>
                </div>
              </Link>
              <Link to="/wishlist" style={{ color: "#111" }} onClick={navigateToLogin}>
                <div
                  className="add-to-wishlist w-lg-100 text-lg-end  ms-3 position-relative"
                  style={{ width: "30px", cursor: "pointer" }}
                >
                  <svg
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span
                    className="position-absolute bg-dark text-white d-flex align-items-center justify-content-center"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      fontSize: "12px",
                      top: "-10%",
                      right: "-30%",
                    }}
                  >
                    {user?.wishlist?.length || 0}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="lg-links bg-danger d-lg-block d-none text-white">
        <ul className=" me-auto d-flex list-unstyled mb-2 mb-lg-0 justify-content-center">
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/hoodies`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Hoddies
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/dresses`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Dresses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/suits`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Suits
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/shoes`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Shoes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/t-shirts`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              T-shirts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/jeans`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Jeans
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/jackets`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Jackets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to={`/shop/bags`}
              style={{
                margin: "0 5px",
                display: "inline-block",
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "600",
                padding: "9px",
              }}
            >
              Bags
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
