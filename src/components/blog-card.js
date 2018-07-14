import React from 'react';

import '../styles/blog-card.css';

export default function BlogCard() {
    return (
        <div className="blog-entries">
            <div className="blog-card">
                <div className="photo photo1"></div>
                <ul className="details">
                    <li className="author"><a href="#">John Doe</a></li>
                    <li className="date">Aug. 24, 2015</li>
                    <li className="tags">
                        <ul>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="description">
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="blog-card alt">
                <div className="photo photo2"></div>
                <ul className="details">
                    <li className="author"><a href="#">Jane Doe</a></li>
                    <li className="date">July. 15, 2015</li>
                    <li className="tags">
                        <ul>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Code</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="description">
                    <h1>Mastering the Language</h1>
                    <h2>Java is not the same as JavaScript</h2>
                    <p className="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <a href="#">Read More</a>
                </div>
            </div> 
        </div>
    )
}