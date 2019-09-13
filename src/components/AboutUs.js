import React from 'react';
import Jars from "../images/Jars.jpg"

function AboutUs(){
  return (
    <div>
      <h1> Our Story</h1>
      <img src={Jars}/>
      <br/><br/>
      <h4>Established in 2013. We have a passion for Kombucha. Our mission is to make the best kombucha's in the world available to our community. Come by and grab a tasty drink full of health benefits!</h4>
    </div>
  );
}

export default AboutUs;
