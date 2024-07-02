import React from "react";
import TopHeadMsg from "../components/TopHeadMsg";
import Navbar from "../components/Navbar";
import SecondHero from "../components/SecondHero";
import Footer from "../components/Footer";
import WishlistSection from "../components/WishlistSection";

const Wishlist = ()=>{
    return(
        <>
         <TopHeadMsg/>
         <Navbar/>
         <SecondHero title="wishlist"/>
         <WishlistSection/>
         <Footer/>
        </>
    )
}
export default Wishlist;