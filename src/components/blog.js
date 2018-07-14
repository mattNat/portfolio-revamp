// can access blogs with endpoint:
// http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts

import React from 'react';
import axios from 'axios';

import NavBar from './navbar';
import '../styles/blog.css';
import '../styles/blog-card.css';

export default class Blog extends React.Component {
    state = {
        date: [],
        content: [],
        id: [],
        excerpt: [],
    }

    componentDidMount() {
        axios.get(`http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts`)
            .then(res => {
                let date = [];
                let content = [];
                let id = [];
                let excerpt = [];

                const blogs = res.data;
                console.log(blogs.posts);
                blogs.posts.map(post => {
                    date.push(post.date);
                    content.push(post.content);
                    id.push(post.ID);
                    excerpt.push(post.excerpt);
                })

                this.setState({ 
                    date,
                    content,
                    id,
                    excerpt
                });
            })
            .catch(err => console.log(err))
    }

    
    render() {
        const posts = this.state || {};

        const handleContent = posts.content.map((item, i) => {
            const date = posts.date[i];
            const year = date.split('').slice(0,4).join('');
            const month = parseInt(date.split('').slice(5,7).join(''));
            // const month = parseInt(monthExt);
            const day = parseInt(date.split('').slice(8,10).join(''));
            const preview = posts.excerpt[i];
            
            console.log(preview);
            console.log(month.toString(), '-', day.toString(), '-', year);

            return (
                <div key={posts.id[i]} dangerouslySetInnerHTML={{__html: item}}></div>
            )
        })
        
        return (
            <div className="blog">
                <header className="intro-header-blog">
                <NavBar />
                <div className="container">
                    <div className="intro-title">
                        <h1>Tech Blog</h1>
                    </div>
                </div>
                </header>
                <div className='posts'>
                    {/* {handleContent} */}
                    <div class="blog-card">
                        <div class="photo photo1"></div>
                        <ul class="details">
                            <li class="author"><a href="#">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="description">
                            <h1>Learning to Code</h1>
                            <h2>Opening a door to the future</h2>
                            <p class="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="blog-card alt">
                        <div class="photo photo2"></div>
                        <ul class="details">
                            <li class="author"><a href="#">Jane Doe</a></li>
                            <li class="date">July. 15, 2015</li>
                            <li class="tags">
                                <ul>
                                    <li><a href="#">Learn</a></li>
                                    <li><a href="#">Code</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div class="description">
                            <h1>Mastering the Language</h1>
                            <h2>Java is not the same as JavaScript</h2>
                            <p class="summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
} 