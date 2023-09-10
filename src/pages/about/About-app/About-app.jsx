import React from 'react';
import video from "../../../photos/1.mp4"
const AboutApp = () => {
    return (
        <section id="about-app" className="section-p1">
            <h1>Download Our <a href="#">App</a></h1>
            <div className="video">
                <video autoPlay muted loop src={video}></video>

            </div>
        </section>

    );
};

export default AboutApp;