import React from 'react';

import PortfolioInput from './portfolioInput';
import PortfolioHeader from './portfolioHeader';
import '../styles/portfolio.css';
    
export default function Portfolio() {
  const data = [
    {
      deploy: "https://schedio.netlify.com",
      screenshot: require('../img/schedio.png'),
      title: "Schedio",
      comment: "An app for the traveller.  Design your own traveling itineraries with customizable widgets including: Google Maps API, Weather API, Yelp API, Sports API, and Hiking Project API.",
      client: "https://github.com/thinkful-ei18/schedio-client",
      server: "https://github.com/thinkful-ei18/schedio_server",
      tech: 
      <div>
        <h5>
          <i className="fab fa-google work-icon"></i> Google OAuth
          <i className="fab fa-google work-icon"></i> Material UI
        </h5>
        <h5>
          <i className="fas fa-database work-icon"></i> MongoDB
          <i className="fab fa-js work-icon"></i> Express.js
          <i className="fab fa-react work-icon"></i> React.js
          <i className="fab fa-node-js work-icon"></i> Node.js
        </h5>
        <h5>
          <i className="fas fa-hdd work-icon"></i> mLab
          <i className="fas fa-database work-icon"></i> Heroku
          <i className="fas fa-desktop work-icon"></i> Netlify
        </h5>
      </div>
    },
    {
      deploy: "https://spanishtutor.netlify.com",
      screenshot: require('../img/spanishTutor.png'),
      title: "Spanish Tutor",
      comment: "Spanish Tutor is a quiz app designed with a space-repetition algorithm. Learn Spanish terms with questions tailored to each user's needs.  Receive feedback and check progress.",
      client: "https://github.com/thinkful-ei18/Chris-Matt-Spaced-Rep-Client",
      server: "https://github.com/thinkful-ei18/Chris-Matt-Spaced-Rep-Server",
      tech:
      <div>
        <h5>
          <i className="fas fa-code-branch work-icon"></i> Spaced Repetition Algorithm
          <i className="fas fa-link work-icon"></i> Linked List
        </h5>
        <h5>
          <i className="fas fa-database work-icon"></i> MongoDB
          <i className="fab fa-js work-icon"></i> Express.js
          <i className="fab fa-react work-icon"></i> React.js
          <i className="fab fa-node-js work-icon"></i> Node.js
        </h5>
        <h5>
          <i className="fas fa-hdd work-icon"></i> mLab
          <i className="fas fa-database work-icon"></i> Heroku
          <i className="fas fa-desktop work-icon"></i> Netlify
        </h5>
      </div>
    },
    {
      deploy: "https://hiking-friend.netlify.com",
      screenshot: require('../img/hikingFriend.png'),
      title: "Hiking Friend",
      comment: "For those seeking adventure outdoors.  Combines both the Google Geolocations API and Hiking Project API to search hiking trails within a 10 mile radius.  Important trail data includes conditions, round-trip distance, and elevation.",
      client: "https://github.com/mattsanpedro7/hiking-app/tree/master/client",
      // server: "https://github.com/mattNat/hiking-app/tree/master/server",
      server: "https://github.com/mattsanpedro7/hiking-app/tree/master/server",
      tech:
      <div>
        <h5>
          <i className="fas fa-database work-icon"></i> MongoDB
          <i className="fab fa-js work-icon"></i> Express.js
          <i className="fab fa-react work-icon"></i> React.js
          <i className="fab fa-node-js work-icon"></i> Node.js
        </h5>
        <h5>
          <i className="fas fa-hdd work-icon"></i> mLab
          <i className="fas fa-database work-icon"></i> Heroku
          <i className="fas fa-desktop work-icon"></i> Netlify
        </h5>
      </div>
    },
  ]

  return (
    <div className="portfolio">
      <a name="portfolio"/>
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          {/* <div className="row"> */}
            <div className="text-center portfolio-intro">
              <PortfolioHeader/>
            </div>
          {/* </div> */}
          <div className="portfolio-input">
            {data.map(item => {
              return (
                <div className="portfolio-entry" key={item.title}>
                  <PortfolioInput 
                    deploy={item.deploy} 
                    screenshot={item.screenshot} 
                    title={item.title} 
                    comment={item.comment} 
                    client={item.client}
                    server={item.server}
                    tech={item.tech}
                  />
                </div>
              ) 
            })}
          </div>
        </div>
      </section>
    </div>
  );
}