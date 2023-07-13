import React from 'react';
import './HStyle.css';
import homeImage from '../../assets/home-image.jpg';

const Home = () => {
  return (
    <div className="home">
      
      <div className="image-container">
        <img 
          src= {homeImage} 
          alt="Football Academy" 
          className='img-fluid'/>
      </div>
      <div className="content">
        <h1>Welcome to Palace Football Academy</h1>
        <p>
          We are a premier football academy dedicated to providing top-notch
          training and development opportunities for young athletes. Our
          experienced coaches and state-of-the-art facilities ensure that
          players receive the best support and guidance to reach their full
          potential.
        </p>
        <p>
          At Palace Football Academy, we offer a range of programs tailored to
          various age groups and skill levels. Whether you're a beginner
          looking to learn the basics or an advanced player aiming for
          professional development, we have a program for you.
        </p>
        <p>
          Explore our website to learn more about our facilities, coaching
          staff, training programs, and upcoming events. Join us on this
          exciting journey of football excellence!
        </p>
      </div>
    </div>
  );
};

export default Home;
