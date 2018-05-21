import React, { Component } from 'react';

import PortfolioInput from './portfolioInput';
import '../styles/portfolio.css';
    
export default function Portfolio() {
  const data = [
    {
      deploy: "https://codepen.io/ThiagoFerreir4/full/gpvJOK",
      screenshot: "https://68.media.tumblr.com/a4a06b925ad2ad936ba2ce6c3343c444/tumblr_nwh4epTtMV1ud7rr3o1_1280.jpg",
      title: "Twitch.tv API project!",
      comment: "Bootstrap and Angularjs",
    },
    {
      deploy: "https://codepen.io/ThiagoFerreir4/full/gpvJOK",
      screenshot: "https://40.media.tumblr.com/a73e79ce9844761d7cdc93d202b5cea1/tumblr_nwh4iomduD1ud7rr3o1_1280.jpg",
      title: "Twitch.tv API project!",
      comment: "Bootstrap and Angularjs",
    },
    {
      deploy: "https://codepen.io/ThiagoFerreir4/full/gpvJOK",
      screenshot: "https://68.media.tumblr.com/a4a06b925ad2ad936ba2ce6c3343c444/tumblr_nwh4epTtMV1ud7rr3o1_1280.jpg",
      title: "Twitch.tv API project!",
      comment: "Bootstrap and Angularjs",
    },
  ]

  return (
    <div className="portfolio">
      <a name="portfolio" />
      <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Awesomeness Portfolio.</h2>
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