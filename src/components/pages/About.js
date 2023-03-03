import React from "react";
import Title from "../Title/Title";

function About() {
  const photo = require(`../../images/photo.jpg`)
  return (
    <div>
      <Title>About Me</Title>
      <div className="card" style={{width: "18rem"}}>
        <img src={photo} className="card-img-top" alt="profile-picture" />
      </div>
      <p>
        Born and raised in the Philippines I grew up with 5 siblings and I being
        third from the eldest.
      </p>
      <p>
        I am now happily married with two children. I grew up being familiar with computer through gaming and
        though I graduated in Marine Engineering, I am very interested in software development.
      </p>
      <p>
        Currently, I work as a Ward Administrator at a hospital but I hope to work in the technology
        industry and pursue my intersts through this bootcamp.
      </p> 
    </div>
    
  );
}

export default About;
