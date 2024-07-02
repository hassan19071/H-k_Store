import React from "react";
import TopHeadMsg from "../components/TopHeadMsg";
import Navbar from "../components/Navbar";
import SecondHero from "../components/SecondHero";
import FilterSection from "../components/FilterSection";
import Footer from "./../components/Footer";

const FilterPage = () => {
  return (
    <>
      <TopHeadMsg />
      <Navbar />
      <SecondHero />
      <FilterSection />
      <Footer />
    </>
  );
};

export default FilterPage;
