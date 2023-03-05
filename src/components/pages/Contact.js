import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Learn from './Learn';

function Contact(props) {
  const contactImage = require(`../../images/contact.png`);
  const bgImage = require(`../../images/bgImage.png`);
  return (
    <div style = {{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.9) 100%) , url(${bgImage})`}}>
      <div className="card mx-auto " style={{ width: "18rem" }}>
        <img src={contactImage} className="card-img-top" alt="contact-me-photo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <Link to="learn" role="button" classNameName="btn btn-primary">
            Github Account
          </Link>
          &nbsp;
          <Link to="contact" role="button" classNameName="btn btn-primary">
            LinkedIn
          </Link>
          <Routes>
            <Route path="learn" element={<Learn />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Contact;
