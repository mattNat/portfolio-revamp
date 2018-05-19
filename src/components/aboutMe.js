import React, { Component } from 'react';
import '../styles/aboutMe.css';

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
                  <h2 className="section-heading">Infinito Web Design Studio.</h2>
                  <br />
                  <p className="lead">I'm a <a className="link" target="_blank" href="https://www.freecodecamp.com/thiagoferreira">self taught</a> web designer, developer, co-founder and entrepreneur based in Finland.<br />
                    Hi!!!  I'm currently part of a small VR(Virtual Reality) development team in an upcoming <a className="link" target="_blank" href="https://www.facebook.com/Virtual-Dawn-802163799892155/">start-up called Virtual-Dawn</a>, developing awesome VR games.
                    I'm also responsible for all of my company's web development needs.<br />
                    My passion is to use technology based solutions, to help solve real world challenges.<br />
                    Competences:<br />
                    Languages and Frameworks:<br />
                    Javascript, C#m HTML5, CSS3, jQuery, Bootstrap3, Angular.js, Meteor.js.<br />
                    Tools &amp; expertise:<br />
                    Git, Responsive Web Design, Agile Methodologies, Unity5 3D, Photoshop, VR Level Design, and Unity Generalist.
                  </p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                  <img className="img-circle img-responsive" src="https://68.media.tumblr.com/ccd0e1b1bdb3492eecdac39b8d42d7ad/tumblr_nwh4pmSv8k1ud7rr3o1_400.jpg" alt />
                </div>
              </div>
            </div>
            {/* /.container */}
          </div>
        </div>
    </div>
  );
}