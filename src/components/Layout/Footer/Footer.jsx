import React from 'react';

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <h4>Contact</h4>
                <p><strong>Address</strong> Al. Piłsudskiego 44</p>
                <p><strong>Phone</strong> +01 2222 2222</p>
                <p><strong>Hours</strong> 10:00 - 18:00, Mon - Sat</p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>About</h4>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google</p>
                <div className="row">
                    <img src="photos/app.jpeg" alt=""/>
                        <img src="photos/play.jpeg" alt=""/>
                </div>
                <p>Secured Payment Gateways</p>
                <img src="photos/pay.png" alt=""/>
            </div>
            <div class="copyright">
                <p>© 2023, Tosha's Estore</p>
            </div>
        </footer>
    );
};

export default Footer;