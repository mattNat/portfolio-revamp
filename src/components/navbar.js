import React from 'react';

import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="NavBar">
      <header>
				<div className="navWrapper" id="home">
					<div className=" clearfix">
						{/* <h2 className="companyName"></h2> */}
						<nav className="mainNav clearfix">
							<ul>
								<li><a href="/#home">Home</a></li>
								<li><a href="/#about" className="smoothScroll">About</a></li>
								<li><a href="/#portfolio" className="smoothScroll">Work</a></li>
								<li><a href="/#contact" className="smoothScroll">Contact</a></li>
								<li>
									<Link to={{
										pathname: `/blog`
										}} style={{ textDecoration: 'none' }}> 
              			Blog
            			</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
    </div>
  );
}