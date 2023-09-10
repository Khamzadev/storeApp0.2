import React from 'react';
import img1 from "../../../photos/2.jpeg"
import img2 from "../../../photos/3.png"
import img3 from "../../../photos/4.jpeg"
const FormDetails = () => {
    return (
        <section id="form-details" >
            <form action="">
                <span>LEAVE A MESSAGE</span>
                <h2>We love to hear from you</h2>
                <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="Your E-mail"/>
                        <input type="text" placeholder="Subject"/>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            <button className="normal">Submit</button>

            </form>
            <div className="people">
                <div>
                    <img src={img1} alt=""/>
                        <p><span>Mary jane</span> Marketing Manager <br/> Phone: + 000 123 456 789 <br/> Email: example@example.com</p>
                </div>
                <div>
                    <img src={img2} alt=""/>
                        <p><span>Joe Moore</span> Marketing Manager <br/> Phone: + 000 123 456 789 <br/> Email: example@example.com</p>
                </div>
                <div>
                    <img src={img3} alt=""/>
                        <p><span>Lauren St</span> Marketing Manager <br/> Phone: + 000 123 456 789 <br/> Email: example@example.com</p>
                </div>
            </div>

        </section>
    );
};

export default FormDetails;