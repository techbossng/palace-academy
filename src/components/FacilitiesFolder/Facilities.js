import React from 'react';
import './FcStyle.css';
import facility1Image from '../../assets/facility1.jpg';
import facility2Image from '../../assets/facility2.jpg';
import facility3Image from '../../assets/facility3.jpg';

const Facilities = () => {
  return (
    <div className="facilities">
      <h1>FACILITIES</h1>
      <div className="facility">
        <img src={facility1Image} alt="Facility 1" />
        <div className="description">
          <h2>Football Fields</h2>
          <p>
            We have well-maintained football fields that provide the perfect
            environment for training and matches. Our fields are equipped with
            modern turf, ensuring optimal playing conditions.
          </p>
        </div>
      </div>
      <div className="facility">
        <img src={facility2Image} alt="Facility 2" />
        <div className="description">
          <h2>Indoor Training Areas</h2>
          <p>
            Our indoor training areas are designed to facilitate year-round
            training, regardless of weather conditions. These areas are equipped
            with the latest technology and equipment to enhance player
            development.
          </p>
        </div>
      </div>
      <div className="facility">
        <img src={facility3Image} alt="Facility 3" />
        <div className="description">
          <h2>Gymnasiums</h2>
          <p>
            We have state-of-the-art gymnasiums where players can focus on
            strength and conditioning training. Our gyms are equipped with
            cutting-edge equipment and supervised by experienced fitness
            trainers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
