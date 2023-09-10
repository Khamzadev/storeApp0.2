import React from 'react';
import AboutHead from "./About-head/About-head";
import AboutApp from "./About-app/About-app";
import NewLetter from "./newsletter/NewLetter";

const About = () => {
    return (
        <>
         <AboutHead/>
         <AboutApp/>
         <NewLetter/>
        </>
    );
};

export default About;