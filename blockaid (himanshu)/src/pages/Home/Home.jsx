// src/pages/Home/Home.jsx
import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="gradient-box">
                <div className="home">
                    <div className="content">
                        <span className="tag">#BlockchainForGood</span>
                        <h1>Revolutionize Charitable Giving with Blockchain</h1>
                        <p>
                            Transform your charitable giving using the ideal method - 
                            the technology of the blockchain which is efficient, secure
                            and highly transparent. BlockAid provides a platform to its 
                            users where donations and NGOs are safe and verified.
                        </p>
                        <a href="#" className="start-btn" >
                            Start Now
                            <span className="arrow-circle">→</span>
                        </a>
                    </div>
                    <div className="image-section">
                        <img 
                            src="/images/donation-image.png" 
                            alt="Donation Illustration"
                            className="donation-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
