import React from 'react';
import './Blog.css';

function Blog() {                   
  return (
    <div className="blog">
      <div className="blog-header">
        <h1>Beauty Tips & Trends</h1>
        <p>Read the latest articles from SimzMakeover</p>
      </div>
      
      <div className="blog-posts">
        {/* In a real application, the posts would be fetched from an API and mapped over */}
        <div className="post">
          <h2>Post Title One</h2>
          <p className="post-date">January 1, 2024</p>
          <p className="post-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="post">
          <h2>Post Title Two</h2>
          <p className="post-date">January 2, 2024</p>
          <p className="post-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        {/* More blog posts would be listed here */}
      </div>
    </div>
  );
}

export default Blog;
