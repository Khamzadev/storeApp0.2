import React from 'react';

const ContactDetails = () => {
    return (
        <section id="contact-details" className="section-p1">
            <div className="details">
                <span>GET IN TOUCH</span>
                <h2>Visit one of our agencies or contact us today</h2>
                <h3>Head office</h3>
                <div>
                    <li>
                        <i className="fa fa-map"></i>
                        <p>Al. Piłsudskiego 44, Rzeszow</p>
                    </li>
                    <li>
                        <i className="fa fa-envelope"></i>
                        <p>example@example.com</p>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <p>+01 2222 2222</p>
                    </li>
                    <li>
                        <i className="fa fa-clock"></i>
                        <p>10:00 - 18:00, Mon - Sat</p>
                    </li>
                </div>

            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5124.738992072776!2d21.994966580051344!3d50.04190921380814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb018c3f4fbd%3A0x5033f39cd685a056!2sGaleria%20Rzesz%C3%B3w!5e0!3m2!1sen!2spl!4v1680030129145!5m2!1sen!2spl"
                    width="600" height="450"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
};

export default ContactDetails;