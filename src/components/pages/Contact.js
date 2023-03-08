import React from 'react';
import { Link} from 'react-router-dom';


function Contact(props) {
  const contactImage = require(`../../images/contact.png`);
  const bgImage = require(`../../images/bgImage.png`);
  const myCv = require(`../../images/daryl-cv.pdf`)

  return (
    <div style = {{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.9) 100%) , url(${bgImage})`}}>
      <div className="card mx-auto " style={{ width: "18rem" }}>
        <img src={contactImage} className="card-img-top" alt="contact-me" />
        <div className="card-body">
          <h5 className="card-title">Contact Information:</h5>
          <p className="card-text">You can reach me via telephone, email or check out my github page to see more of my work.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">+447572295418</li>
          <li className="list-group-item">catalunasiegfried@gmail.com</li>
          <a className="btn btn-secondary" href={myCv}>**Here is my CV!**</a>
        </ul>
        <div className="card-body">
          <Link to="https://github.com/darylcata" role="button" classNameName="btn btn-primary">
            Github account
          </Link>
          &nbsp;
          <Link to="https://www.linkedin.com/in/siegfried-daryl-catalu%C3%B1a-a51891138" role="button" classNameName="btn btn-primary">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
