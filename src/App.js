import React, { Component } from 'react';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import ComputerBuild from './components/computerBuild';
import Contact from './components/contact';
import Footer from './components/footer';
import Blog from './components/blog';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="portfolio-web">
          <Home/>
          <AboutMe/>
          <Portfolio/>
          <ComputerBuild/>
          <Contact/>
          <Blog/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
