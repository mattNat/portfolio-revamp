import React, { Component } from 'react';
import '../styles/aboutMe.css';
import ProfilePic from '../img/profilePic.JPG';

export default function AboutMe() {
  return (
    <div className="about-me">
      <section>
        <a name="about" />
        <div className="row about-row">
          <div className="column">
            <h1>About</h1>
            <div className="about-font">
              <i className="fab fa-linux"></i>
              <p className="about-word">Linux</p>
              <br/>
              <i className="fas fa-space-shuttle"></i>
              <p className="about-word">Math</p>
              <br/>
              <i className="fas fa-fire"></i>
              <p className="about-word">Passion</p>
              <br/>
              <i className="fas fa-paint-brush"></i>
              <p className="about-word">Creativity</p>
            </div>
          </div>
          <div className="column">
            <img className="img-circle img-responsive" src={ProfilePic} alt="profile" />
          </div>
          <div className="column">
            <p className="lead">
              My passion for building things started my coding journey.  From setting up my own Linux server to learning how to deploy apps from a MERN stack, I enjoy tinkering with open-source software and discovering new things.
              <br/><br/>
              Growing skillsets is measured by learning from others.  I enrolled in Thinkful's Engineering Immersion to engage in pair-programming and team projects.
              <br/><br/> 
              While I am not debugging, I enjoy trail running and hiking.  Some of the parks I've visited include Grand Canyon, Yosemite, Bryce Canyon, Death Valley, Monument Valley, Zion, Haleakala, and Joshua Tree.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}