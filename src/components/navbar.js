import React, { Component } from 'react';
import '../styles/navbar.css';

export default function NavBar() {
  return (
    <div className="NavBar">
      <header>
				<div class="navWrapper" id="home">
					<div class=" clearfix">
						{/* <h2 class="companyName"></h2> */}
						<nav class="mainNav clearfix">
							<ul>
								<li><a href="#home">Home</a></li>
								<li><a href="#about" class="smoothScroll">About</a></li>
								<li><a href="#portfolio" class="smoothScroll">Portfolio</a></li>
								<li><a href="#contact" class="smoothScroll">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
    </div>
  );
}