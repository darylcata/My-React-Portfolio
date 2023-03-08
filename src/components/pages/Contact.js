import React from 'react';
import { Link } from 'react-router-dom';


function Contact(props) {
  const contactImage = require(`../../images/contact.png`);
  const bgImage = require(`../../images/bgImage.png`);
  const myCv = require(`../../images/daryl-cv.pdf`)

  return (
    <div style={{ display: "flex", backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.9) 100%) , url(${bgImage})` }}>
      <div className="card mx-auto " style={{ width: "18rem" }}>
        <img src={contactImage} className="card-img-top" alt="contact-me" />
        <div className="card-body">
          <h5 className="card-title">Contact Information:</h5>
          <p className="card-text">You can reach me via telephone, email or check out my github page to see more of my work.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">+447572295418</li>
          <li className="list-group-item">catalunasiegfried@gmail.com</li>
          <a className="btn btn-primary" href={myCv}>**Here is my CV!**</a>
        </ul>
        <div className="card-body">
          <Link to="https://github.com/darylcata" role="button" className='btn btn-primary'>
            to: Github account
          </Link>
          <Link to="https://www.linkedin.com/in/siegfried-daryl-catalu%C3%B1a-a51891138" role="button" className='btn btn-primary'>
            to: LinkedIn
          </Link>
        </div>
      </div>
      <form className="card mx-auto " style={{ width: "20rem" }}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
