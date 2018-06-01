import React from 'react';

export default function PortfolioInput(props) {
  return (
    <div className="portfolio-item row">
      <div className="column">
        <a href={props.deploy} target="_blank" className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i class="fas fa-cubes"></i>
              <h2>Live App</h2>
            </div>
          </div>
          <img src={props.screenshot} className="img-responsive" alt />
        </a>
      </div>
      <div className="column portfolio-caption">
        <div className="portfolio-caption">
          <h4>{props.title}</h4>
          <p id="small-text" className="text-muted">
            {props.comment} <br/>
            <div className="portfolio-bottom">
              <a href={props.deploy}><i class="fas fa-cubes"></i>  Live App</a>
              <a href={props.client}><i class="fab fa-github"></i>  Client</a>
              <a href={props.server}><i class="fas fa-database"></i>  Server</a>     
              <br/>
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
              <br/>
            </div>
          </p>
        </div>
      </div>      
    </div>
  )
}