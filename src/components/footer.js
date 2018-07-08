import React from 'react';

import '../styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li className="footer-menu-divider">⋅</li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li className="footer-menu-divider">⋅</li>
                <li>
                  <a href="#portfolio">Work</a>
                </li>
                <li className="footer-menu-divider">⋅</li>
                <li>
                  <a href="#contact">Contact</a></li>
                <li className="footer-menu-divider">⋅</li>                
                <li>
									<Link to={`/blog`} style={{ textDecoration: 'none' }}> 
              			Blog
            			</Link>
								</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}