import React from 'react'
import Footer from '../layout/footer';
import Navbar from '../layout/navbar'
import "./style/home.css"

function Home() {
  return (
    <div>
        <Navbar />
        
        <div className='content-home'>
          <h1>Find Trending News On NEWS BLOG</h1>
          <p>Welcome to news blog. Find creative and 
            informative blog on technology, <br/> study material, politics and etc from many around the globe.     
          </p>

          <div>
            <button id='homeButton' type='button'>
              <span id='homeSpan'></span>Read Blog</button>
            <button id='homeButton' type='button'>
              <span id='homeSpan'></span>Learn More</button>
          </div>
        </div>
        
        <div>
          <Footer />
        </div>
    </div>
  )
}
export default Home;