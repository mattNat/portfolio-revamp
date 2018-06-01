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
      deploy: "https://spanishtutor.netlify.com",
      screenshot: require('../img/spanishTutor.png'),
      title: "Spanish Tutor",
      comment: "Spanish Tutor is a quiz app designed with a space-repetition algorithm. Learn Spanish terms with questions tailored to each user's needs.  Receive feedback and check progress.",
      client: "https://github.com/thinkful-ei18/Chris-Matt-Spaced-Rep-Client",
      server: "https://github.com/thinkful-ei18/Chris-Matt-Spaced-Rep-Server",
    },
    {
      deploy: "https://hiking-friend.netlify.com",
      screenshot: require('../img/hikingFriend.png'),
      title: "Hiking Friend",
      comment: "For those seeking adventure outdoors.  Combines both the Google Geolocations API and Hiking Project API to search hiking trails within a 10 mile radius.  Important trail data includes conditions, round-trip distance, and elevation.",
      client: "https://github.com/mattsanpedro7/hiking-app/tree/master/client",
      // server: "https://github.com/mattNat/hiking-app/tree/master/server",
      server: "https://github.com/mattsanpedro7/nestle-server",
    },
  ]

  return (
    <div className="portfolio">
      <a name="portfolio" />
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          {/* <div className="row"> */}
            <div className="text-center portfolio-intro">
              <PortfolioHeader/>
            </div>
          {/* </div> */}
          <div className="portfolio-input">
            {data.map(item => {
              return <PortfolioInput 
                deploy={item.deploy} 
                screenshot={item.screenshot} 
                title={item.title} 
                comment={item.comment} 
                client={item.client}
                server={item.server}
                tech={item.tech}
              />
            })}
          </div>
        </div>
      </section>
    </div>
  );
}