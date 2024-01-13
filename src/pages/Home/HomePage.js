import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>SimzMakeover: Inspiring Beauty Tips and Trends</h1>
        <p>Discover the latest beauty tips, trends, and inspiration on SimzMakeover, your ultimate beauty blog.</p>
        <button className="learn-more-btn">LEARN MORE</button>
      </header>
      
      <section className="tips-for-young-skin">
        <h2>TIPS FOR YOUNG SKIN</h2>
        <p>Beauty is something that many people, especially young women, strive to maintain. However, 
        maintaining a healthy beauty routine isn't as simple as it may sound. To achieve the look of radiant 
        and healthy skin, it is essential to follow certain steps in order for your skin to remain nourished 
        and glowing. Here are five tips you should keep in mind when developing a skincare regimen 
        specifically suited towards young individuals who want to optimize their beauty potential:</p>
        {/* List of tips would go here */}
      </section>

      <div className="image-container"> 
        <div className="image image1"></div>
        <div className="image image2"></div>
        <div className="image image3"></div>
      </div>

    </div>
  );
}

export default HomePage;
