import React from 'react';
import PageHeader from "./page-header/page-header";
import Product1 from "../Home/Product1/Product1";
import NewLetter from "../about/newsletter/NewLetter";

const Shop = () => {
    return (
        <>
            <PageHeader/>
            <Product1/>
            <NewLetter/>
        </>
    );
};

export default Shop;