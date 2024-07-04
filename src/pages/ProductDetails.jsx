import React from "react";
import TopHeadMsg from "../components/TopHeadMsg";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";
import Footer from "../components/Footer";
import RelativeProducts from './../components/RelativeProducts';

const ProductDetails = () => {
  return (
    <>
      <TopHeadMsg />
      <Navbar />
      <SingleProduct />
      <RelativeProducts/>
      <Footer />
    </>
  );
};

export default ProductDetails;
