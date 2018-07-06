// can access blogs with endpoint:
// http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts

import React from 'react';
import axios from 'axios';

export default class Blog extends React.Component {
    state = {
        blogs: []
    }

    componentDidMount() {
        axios.get(`http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts`)
          .then(res => {
            const blogs = res.data;
            this.setState({ blogs });
          })
    }

    render() {
        console.log(this.state.blogs.posts);
        return (
            <div className="blog">
                <h2>Welcome to my blog</h2>
            </div>
        )
    }
} 