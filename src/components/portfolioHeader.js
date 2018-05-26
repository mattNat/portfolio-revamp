import React from 'react';

export default function PortfolioHead() {
  return (
    <div className="portfolio-head">
      <h2 className="section-heading">Work</h2>
        <br/>
        <h3 id="below-section" className="section-subheading text-muted">
          Recent projects all built with MERN Stack
        </h3>
        <h4>
          <i className="fas fa-database work-icon"></i> MongoDB
          <i className="fab fa-js work-icon"></i> Express.js
          <i className="fab fa-react work-icon"></i> React.js
          <i className="fab fa-node-js work-icon"></i> Node.js 
        </h4>
        <br/>
        <h3 id="below-section" className="section-subheading text-muted">
          Deployment Technologies
        </h3>
        <h4>
          <i className="fas fa-hdd work-icon"></i> mLab
          <i className="fas fa-database work-icon"></i> Heroku
          <i className="fas fa-desktop work-icon"></i> Netlify
        </h4>
    </div>
  );
};