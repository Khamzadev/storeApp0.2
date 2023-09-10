import React from 'react';
import img2 from "../../../photos/img2.png"
import order from "../../../photos/order.png"
import savemoney from "../../../photos/savemoney.png"
import saleimg from "../../../photos/saleimg.png"
import supp from "../../../photos/supp.png"

const Feature = () => {
    return (
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src={img2} alt=""/>
                    <h6>Free Shipping</h6>

            </div>
            <div className="fe-box">
                <img src={order} alt=""/>
                    <h6>Online Order</h6>

            </div>
            <div className="fe-box">
                <img src={savemoney} alt=""/>
                    <h6>Save Money</h6>

            </div>
            <div className="fe-box">
                <img src={saleimg} alt=""/>
                    <h6>Happy Sell</h6>

            </div>
            <div className="fe-box">
                <img src={supp} alt=""/>
                    <h6>24/7 Support</h6>

            </div>

        </section>
    );
};

export default Feature;