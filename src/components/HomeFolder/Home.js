import React from "react";
import "./HStyle.css";
import homeImage from "../../assets/home-image.jpg";
import coach4 from "../../assets/coach4.png";
import program1 from "../../assets/program1.jpg";
import program3 from "../../assets/program3.jpg";
import facility2 from "../../assets/facility2.jpg";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
        <img src={homeImage} alt="Football Academy" className="img-fluid" />
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
          various age groups and skill levels. Whether you're a beginner looking
          to learn the basics or an advanced player aiming for professional
          development, we have a program for you.
        </p>
        <p>
          Explore our website to learn more about our facilities, coaching
          staff, training programs, and upcoming events. Join us on this
          exciting journey of football excellence!
        </p>
      </div>
      <Link to="/programs">
        <div className="image-containers">
          <img src={program1} alt="Football Academy" className="img-fluid" />
          <img src={program3} alt="Football Academy" className="img-fluid" />
          <img src={facility2} alt="Football Academy" className="img-fluid" />
        </div>
      </Link>

      <div className="image-description">
        <Link to="/coaches">
          <img src={coach4} alt="Football Academy" />
        </Link>

        <p>
          {" "}
          Explore our website to learn more about our facilities, coaching
          staff, training programs, and upcoming events. Join us on this
          exciting journey of football excellence!{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
