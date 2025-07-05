import React from 'react';
import image1 from '../assets/image1.svg';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1 className="home-title">Hi, I'm <span className="highlight">Meekness</span></h1>
        <h2 className="home-subtitle">Frontend Developer</h2>
        <p className="home-description">
          I build responsive, accessible websites with React and modern CSS.
        </p>
        <button className="home-button">View Projects</button>
      </div>
      
      <div className="home-right">
        <img 
          src={image1}
          alt="Developer illustration"
          className="home-image"
        />
      </div>
    </div>
  );
}