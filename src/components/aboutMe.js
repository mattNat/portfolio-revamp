import React, { Component } from 'react';
import '../styles/aboutMe.css';
import ProfilePic from '../img/profilePic.JPG';

export default function AboutMe() {
  return (
    <div className="about-me">
      <a name="about" />
      <div class="row">
        <div class="column">
          <img className="img-circle img-responsive" src={ProfilePic} alt />
        </div>
        <div class="column">
        </div>
        <div class="column">
        </div>
      </div>

      <p className="lead">
        My passion for building things started my coding journey.  From setting up my own Linux server to learning how to deploy apps from a MERN stack, I enjoy tinkering with open-source software and discovering new things.
        <br/><br/>
        Growing skillsets is measured by learning from others.  I enrolled in Thinkful's Engineering Immersion to engage in pair-programming and team projects.
        <br/><br/> 
        While I am not debugging, I enjoy trail running and hiking.  Some of the parks I've visited include Grand Canyon, Yosemite, Bryce Canyon, Death Valley, Monument Valley, Zion, Haleakala, and Joshua Tree.
      </p>
    </div>
  );
}