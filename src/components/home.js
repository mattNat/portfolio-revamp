import React, { Component } from 'react';
import '../styles/home.css';
import OahuBeach from '../img/20170830_095819.jpg';

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
                    {/* <span> */}
                      <h1>Matt San Pedro</h1>
                      <h3>Full Stack Web Developer</h3>
                    {/* </span> */}
                    <hr className="intro-divider" />
                    <img src={OahuBeach} alt="Oahu beach"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}