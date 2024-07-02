import React from "react";
import TopHeadMsg from "../components/TopHeadMsg";
import Navbar from "../components/Navbar";
import SecondHero from "../components/SecondHero";
import Footer from "../components/Footer";
import CheckoutSection from "../components/CheckoutSection";

const Checkout = () => {
  return (
    <>
      <TopHeadMsg />
      <Navbar />
      <SecondHero title="checkout" />
      <CheckoutSection />
      <Footer />
    </>
  );
};

export default Checkout;
