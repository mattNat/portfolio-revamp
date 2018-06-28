import React from 'react';

export default function PortfolioInput(props) {
  // remove "https://" from links for app display
  const dispLink = props.deploy;
  
  return (
    <div className="portfolio-item row">
      <div className="column">
        <a href={props.deploy} target="_blank" className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-cubes"></i>
              <h2>Live App</h2>
            </div>
          </div>
          <img src={props.screenshot} className="img-responsive" alt={`${props.title} landing`} />
        </a>
      </div>
      <div className="column portfolio-caption">
        <div className="portfolio-caption">
          <h4>{props.title} - <a href={props.deploy}>{dispLink}</a></h4>
          <div id="small-text" className="text-muted">
            {props.comment} <br/>
            <div className="portfolio-bottom">
              {/* <a href={props.deploy}><i className="fas fa-cubes"></i>  Live App</a> */}
              <a href={props.client}><i className="fab fa-github"></i>  Client</a>
              <a href={props.server}><i className="fas fa-database"></i>  Server</a>     
              <br/>
              {props.tech}
              <br/>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}