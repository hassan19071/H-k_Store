import React from "react";
import TopHeadMsg from "../components/TopHeadMsg";
import Navbar from "../components/Navbar";
import SecondHero from "../components/SecondHero";
import Footer from "../components/Footer";
import DashboardSection from "../components/DashboardSection";

const Dashboard = ()=>{
    return(
        <>
          <TopHeadMsg/>
          <Navbar/>
          <SecondHero title="Dashboard" />
          <DashboardSection/>
          <Footer/>
        </>
    )
}

export default Dashboard;