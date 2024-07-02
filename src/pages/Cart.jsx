import React from "react";
import TopHeadMsg from './../components/TopHeadMsg';
import Navbar from "../components/Navbar";
import SecondHero from "../components/SecondHero";
import Footer from './../components/Footer';
import CartSection from "../components/CartSection";

const Cart = ()=>{
    return (
        <>
          <TopHeadMsg/>
          <Navbar/>
          <SecondHero title="Cart"/>
          <CartSection/>
          <Footer/>
        </>
    )
}

export default Cart;