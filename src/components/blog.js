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
                let date = [];
                let content = [];

                const blogs = res.data;
                console.log(blogs.posts);
                blogs.posts.map(post => {
                    date.push(post.date);
                    content.push(post.content);
                })

                this.setState({ 
                    date,
                    content
                });
            })
    }

    render() {
        const posts = this.state.date || {};
        console.log(posts);
        // posts.map(index => {
        //     console.log(index);
        // })

        return (
            <div className="blog">
                <header className="intro-header-blog">
                <NavBar />
                <div className="container">
                    <div className="intro-title">
                        <h1>Tech Blog</h1>
                        {/* <h3>Full Stack Web Developer</h3> */}
                        {/* <hr className="intro-divider" /> */}
                    </div>
                    <div>

                    </div>
                </div>
                </header>
            </div>
        )
    }
} 