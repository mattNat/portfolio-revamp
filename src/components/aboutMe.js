import React, { Component } from 'react';
import '../styles/aboutMe.css';
import ProfilePic from '../img/profilePic.JPG';

export default function AboutMe() {
  return (
    <div className="about-me">
      <a name="about" />
        <div className="content-section-a">
          <div className="bg-overlay2">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-sm-6">
                  <div className="clearfix" />
                  <h2 className="section-heading">Thinkful Engineering Immersion Graduate</h2>
                  <br />
                  <p className="lead">
                    My passion for building things started my coding journey.  From setting up my own Linux server to learning how to deploy apps from a MERN stack, I enjoy tinkering with open-source software and discovering new things.<br/><br/>
                    When I am not debugging, I enjoy trail running and hiking.  Some of the parks I've visited include Grand Canyon, Yosemite, Bryce Canyon, Death Valley, Monument Valley, Zion, Haleakala, and Joshua Tree.
                  </p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                  <img className="img-circle img-responsive" src={ProfilePic} alt />
                </div>
              </div>
            </div>
            {/* /.container */}
          </div>
        </div>
    </div>
  );
}