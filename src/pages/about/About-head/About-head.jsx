import React from 'react';
import img from "../../../photos/about.jpeg"
const AboutHead = () => {
    return (
        <section id="about-head" className="section-p1">
            <img src={img} alt=""/>
                <div>
                    <h2>Who We Are?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum fugit eveniet, id aliquid consequuntur eius dolores reprehenderit omnis laborum doloremque officia culpa inventore facilis quasi soluta libero itaque nesciunt excepturi?</p>
                    <abbr title="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim, tenetur accusantium soluta architecto.
                    </abbr>
                    <br/><br/>
                        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim, tenetur accusantium soluta architecto.</marquee>
                </div>
        </section>
    );
};

export default AboutHead;