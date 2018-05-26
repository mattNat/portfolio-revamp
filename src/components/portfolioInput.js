import React from 'react';

export default function PortfolioInput(props) {
  return (
    <div className="portfolio-item row">
      <div className="column">
        <a href={props.deploy} target="_blank" className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fa fa-linux fa-3x" />
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
              <a href={props.client}><i class="fab fa-github"></i> Client</a>
              <a href={props.server}><i class="fas fa-database"></i> Server</a>       
            </div>
          </p>
        </div>
      </div>      
    </div>
  )
}