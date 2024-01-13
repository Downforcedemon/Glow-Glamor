import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us-banner">
        <h1>About SimzMakeover</h1>
      </div>
      
      <div className="about-us-content">
        <h2>Our Story</h2>
        <p>Welcome to SimzMakeover, your number one source for beauty and skincare inspiration. 
        We're dedicated to giving you the very best of beauty tips, with a focus on reliability, 
        customer service, and uniqueness.</p>
        
        <h2>Our Philosophy</h2>
        <p>Founded in [Year] by [Founder's Name], SimzMakeover has come a long way from its beginnings 
        in a [Starting Location]. When [Founder's Name] first started out, their passion for [Passion Statement] 
        drove them to [Action Taken], and gave them the impetus to turn hard work and inspiration into 
        to a booming online store.</p>
        
        <h2>Meet the Team</h2>
        {/* Team member profiles would be inserted here */}
      </div>
      
      {/* Additional sections or components like Testimonials, Our Mission, etc., could be added here */}
      
    </div>
  );
}

export default AboutUs;
