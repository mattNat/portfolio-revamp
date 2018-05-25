import React, { Component } from 'react';
import '../styles/aboutMe.css';
import ProfilePic from '../img/profilePic.JPG';
import FontAwesome from 'react-fontawesome';

export default function AboutMe() {
  return (
    <div className="about-me">
      <a name="about" />
      <div className="row about-row">
        <div className="column">
          <h1>About</h1>
          <div className="about-font">
            <FontAwesome className="about-icon" name="superscript" size="1x"/>
            <p className="about-word">Math</p>
            <br/>
            <FontAwesome className="about-icon" name="fire" size="1x"/>
            <p className="about-word">Passion</p>
            <br/>
            <FontAwesome className="about-icon" name="paint-brush" size="1x"/>
            <p className="about-word">Creativity</p>
          </div>
        </div>
        <div className="column">
          <img className="img-circle img-responsive" src={ProfilePic} alt />
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

    </div>
  );
}