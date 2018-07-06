// can access blogs with endpoint:
// http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts

import React from 'react';

export default function Blog() {
    const url = 'http://public-api.wordpress.com/rest/v1/sites/mattdottech.wordpress.com/posts';
    const blogs = axios.get(hikingUrl);

    return (
        <div className="blog">
            <h2>Welcome to my blog</h2>
        </div>
    )
} 