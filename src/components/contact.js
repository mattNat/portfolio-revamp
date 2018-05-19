import React, { Component } from 'react';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <a name="contact" />
      <div className="banner">
        <div className="bg-overlay4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="connect">Check out some of my latest work at <a className="link-footer" target="_blank" href="https://www.facebook.com/Virtual-Dawn-802163799892155/">Virtual-Dawn's Facebook page.</a></h2>
              </div>
              <br />
              <div className="col-lg-6">
                <ul className="list-inline banner-social-buttons">
                  <li>
                    <a href="https://twitter.com/Ferreir4Thiago" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw" /> <span className="network-name">Twitter</span></a>
                  </li>
                  <li>
                    <a href="https://github.com/ThiagoFerreir4" target="_blank" className="btn btn-default btn-lg "><i className="fa fa-github fa-fw" /> <span className="network-name">Github</span></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/thiagoferreir4" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw" /> <span className="network-name">Linkedin</span></a>
                  </li>
                  <li>
                    <a href="https://www.freecodecamp.com/thiagoferreira" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-free-code-camp fa-fw" /> <span className="network-name">freeCodeCamp</span></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.container */}
          </div>
        </div>
      </div>
    </div>
  );
}