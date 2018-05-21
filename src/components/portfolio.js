import React, { Component } from 'react';

import PortfolioInput from './portfolioInput';
import '../styles/portfolio.css';

// images from projects
import SchedioDash from '../img/schedio.png';
    
export default function Portfolio() {
  const data = [
    {
      deploy: "https://schedio.netlify.com",
      screenshot: require('../img/schedio.png'),
      title: "Schedio: Travel Itinerary",
      comment: "Yelp API, Google Maps API, Sports API",
    },
    {
      deploy: "https://admiring-liskov-604b28.netlify.com/",
      screenshot: require('../img/spanishTutor.png'),
      title: "Spanish Tutor: Space Repetition",
      comment: "Weighted Questions in Singly-Linked List",
    },
    {
      deploy: "http://gracious-bose-61bbb2.netlify.com",
      screenshot: require('../img/hikingFriend.png'),
      title: "Hiking Friend: Search Trails",
      comment: "Hiking Project API",
    },
  ]

  return (
    <div className="portfolio">
      <a name="portfolio" />
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center portfolio-intro">
              <h2 className="section-heading">My Portfolio</h2>
              <h3 id="below-section" className="section-subheading text-muted">
                Below you'll find some of my recent work.
              </h3>
            </div>
          </div>
          <div className="row">
            {data.map(item => {
              return <PortfolioInput 
                deploy={item.deploy} 
                screenshot={item.screenshot} 
                title={item.title} 
                comment={item.comment} 
              />
            })}
          </div>
        </div>
      </section>
    </div>
  );
}