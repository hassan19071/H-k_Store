import React from 'react';
import TopHeadMsg from '../components/TopHeadMsg';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Discount from '../components/Discount';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';

const Home = ()=>{
    return(
        <>
            <TopHeadMsg/>
            <Navbar/>
            <Hero/>
            <Discount/>
            <BestSeller/>
            <Footer/>
        </>
    )
}

export default Home;