import React from 'react';
import '../styles/home.css';
// import OahuBeach from '../img/20170830_095819.jpg';
import NavBar from './navbar';

export default function Home() {
  return (
    <div className="Home">
      <a name="home" />
        <header className="intro-header">
          <NavBar />
          <div className="container">
            <div className="intro-message">
              <h1>Matt San Pedro</h1>
              <h3>Full Stack Web Developer</h3>
              <hr className="intro-divider" />
            </div>
          </div>
        </header>
    </div>
  );
}