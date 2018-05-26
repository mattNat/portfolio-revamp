import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import ComputerBuild from './components/computerBuild';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="portfolio-web">
          <NavBar/>
          <Home/>
          <AboutMe/>
          <Portfolio/>
          <ComputerBuild/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
