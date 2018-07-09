// can access blogs with endpoint:
// http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts

import React from 'react';
import axios from 'axios';

import NavBar from './navbar';
import '../styles/blog.css';

export default class Blog extends React.Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        axios.get(`http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts`)
            .then(res => {
            const blogs = res.data;
            console.log(blogs);
            this.setState({ blogs });
            })
    }

    render() {
        console.log(this.state.blogs.posts);
        return (
            <div className="blog">
                <header className="intro-header">
                <NavBar />
                <div className="container">
                    {/* <div className="intro-message"> */}
                        <h1>Tech Blog</h1>
                        {/* <h3>Full Stack Web Developer</h3> */}
                        {/* <hr className="intro-divider" /> */}
                    {/* </div> */}
                </div>
                </header>
            </div>
        )
    }
} 