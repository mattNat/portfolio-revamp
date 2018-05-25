import React, { Component } from 'react';
import '../styles/home.css';
import OahuBeach from '../img/20170830_095819.jpg';

export default function Home() {
  return (
    <div className="Home">
      <a name="home" />
        <div className="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>Matt San Pedro</h1>
                  <h3>Full Stack Web Developer</h3>
                  <hr className="intro-divider" />
                  <div className="row">
                    <div className="column">
                      <img src={OahuBeach} alt="Oahu beach" className="header-slideshow header-slideshow-desktop"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}