import React, { Component } from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="Home">
      <a name="home" />
        <div className="intro-header">
          <div className="bg-overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="intro-message">
                    <h1>Matt San Pedro</h1>
                    <h3>Full Stack Web Developer</h3>
                    <hr className="intro-divider" />
                    <ul className="list-inline intro-social-buttons">
                      {/* <li>
                        <a href="https://twitter.com/Ferreir4Thiago" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw" /> <span className="network-name">Twitter</span></a>
                      </li> */}
                      <li>
                        <a href="https://github.com/mattNat" target="_blank" className="btn btn-default btn-lg "><i className="fa fa-github fa-fw" /> <span className="network-name">Github</span></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/matthew-san-pedro-m-s-34585623/" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw" /> <span className="network-name">Linkedin</span></a>
                      </li>
                      {/* <li>
                        <a href="https://www.freecodecamp.com/thiagoferreira" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-free-code-camp fa-fw" /> <span className="network-name">freeCodeCamp</span></a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}