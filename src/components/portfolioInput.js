import React from 'react';
import FontAwesome from 'react-fontawesome';
// col-md-4 col-sm-6 portfolio-item 

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
              <a href={props.deploy}><FontAwesome name="cubes" size="1x"/>  Live App</a>
              <a href={props.client}><FontAwesome name="github" className="portfolio-icon" size="1x"/>Client</a>
              <a href={props.server}><FontAwesome name="github" className="portfolio-icon" size="1x"/>Server</a>       
            </div>
          </p>
        </div>
      </div>      
    </div>
  )
}