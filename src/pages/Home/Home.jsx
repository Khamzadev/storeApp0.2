import React from 'react';
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import Product1 from "./Product1/Product1";
import Banner from "./Banner/Banner";
import SmBanner from "./sm-banner/sm-banner";
import SectionM1 from "./section-m1/section-m1";

const Home = () => {
    return (
        <>
            <Hero/>
            <Feature/>
            <Product1/>
            <Banner/>
            <Product1/>
            <SmBanner/>
            <SectionM1/>
        </>
    );
};

export default Home;