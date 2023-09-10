import React from 'react';

const NewLetter = () => {
    return (
        <section id="newsletter" className="section-p1 section-m1">
            <div className="newstext">
                <h4>Sign Up For Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your e-mail address"/>
                    <button className="normal">Sign Up</button>
            </div>
        </section>
    );
};

export default NewLetter;