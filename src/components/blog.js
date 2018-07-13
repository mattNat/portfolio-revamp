// can access blogs with endpoint:
// http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts

import React from 'react';
import axios from 'axios';

import NavBar from './navbar';
import '../styles/blog.css';

export default class Blog extends React.Component {
    state = {
        date: [],
        content: [],
        id: [],
    }

    componentDidMount() {
        axios.get(`http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts`)
            .then(res => {
                let date = [];
                let content = [];
                let id = [];

                const blogs = res.data;
                console.log(blogs.posts);
                blogs.posts.map(post => {
                    date.push(post.date);
                    content.push(post.content);
                    id.push(post.ID);
                })

                this.setState({ 
                    date,
                    content,
                    id,
                });
            })
            .catch(err => console.log(err))
    }

    
    render() {
        const posts = this.state || {};

        const handleContent = posts.content.map((item, i) => {
            console.log(posts.id[i]);
            

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
                    {handleContent}
                </div>
            </div>
        )
    }
} 