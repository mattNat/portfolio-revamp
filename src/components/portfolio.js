import React, { Component } from 'react';

import PortfolioInput from './portfolioInput';
import PortfolioHeader from './portfolioHeader';
import '../styles/portfolio.css';

// images from projects
import SchedioDash from '../img/schedio.png';
    
export default function Portfolio() {
  const data = [
    {
      deploy: "https://schedio.netlify.com",
      screenshot: require('../img/schedio.png'),
      title: "Schedio",
      comment: "An app for the traveller.  Design your own traveling itineraries with customizable widgets including: Google Maps API, Weather API, Yelp API, Sports API, and Hiking Project API.  Keep things organized.",
      client: "https://github.com/thinkful-ei18/schedio-client",
      server: "https://github.com/thinkful-ei18/schedio_server",
    },
    {
      deploy: "https://admiring-liskov-604b28.netlify.com/",
      screenshot: require('../img/spanishTutor.png'),
      title: "Spanish Tutor",
      comment: "Spanish Tutor is a quiz app designed with a space-repetition algorithm. Pick up Spanish terms with questions tailored to each user's needs.",
      client: "https://github.com/thinkful-ei18/Chris-Matt-Spaced-Rep-Client",
      server: "https://github.com/thinkful-ei18/Chris-Matt-Spaced-Rep-Server",
    },
    {
      deploy: "https://hiking-friend.netlify.com",
      screenshot: require('../img/hikingFriend.png'),
      title: "Hiking Friend",
      comment: "An earlier version of Schedio.  Combines both the Google Geolocations API and Hiking Project API to search hiking trails within a 10 mile radius.  Important trail data is displayed such as trail conditions, round-trip distance, and elevation.",
      client: "https://github.com/mattNat/hiking-app/tree/master/client",
      server: "https://github.com/mattNat/hiking-app/tree/master/server",
    },
  ]

  return (
    <div className="portfolio">
      <a name="portfolio" />
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center portfolio-intro">
              <PortfolioHeader/>
            </div>
          </div>
          <div className="portfolio-input">
            {data.map(item => {
              return <PortfolioInput 
                deploy={item.deploy} 
                screenshot={item.screenshot} 
                title={item.title} 
                comment={item.comment} 
                client={item.client}
                server={item.server}
              />
            })}
          </div>
        </div>
      </section>
    </div>
  );
}