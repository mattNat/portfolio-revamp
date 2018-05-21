import React from 'react';

export default function PortfolioInput(props) {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      <a href={props.deploy} target="_blank" className="portfolio-link" data-toggle="modal">
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fa fa-fire fa-3x" />
          </div>
        </div>
        <img src={props.screenshot} className="img-responsive" alt />
      </a>
      <div className="portfolio-caption">
        <h4>{props.title}</h4>
        <p id="small-text" className="text-muted">{props.comment}</p>
      </div>
    </div>
  )
}