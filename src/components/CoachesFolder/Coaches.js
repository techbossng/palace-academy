import React from "react";
import "./ChStyle.css";
import coach1 from "../../assets/coach1.jpg";
import coach5 from "../../assets/coach5.jpg";
import coach6 from "../../assets/coach6.png";
import coach4 from "../../assets/coach4.png"
import Adsense from "../Adsense";

const Coaches = () => {
  const coachesData = [
    {
      name: "Khalid Adewale",
      qualification: "AFC Pro License",
      experience: "10+ years",
      specialty: "Tactical Training",
      photo: coach1,
    },
    {
      name: "Paul Johnson",
      qualification: "AFC A License",
      experience: "8 years",
      specialty: "Player Development",
      photo: coach5,
    },
    {
      name: "Adesenwe Philp",
      qualification: "AFC A License",
      experience: "10 years",
      specialty: "Technical Skills",
      photo: coach6,
    },
    {
      name: "Madueke Sunday",
      qualification: "AFC A License",
      experience: "8 years",
      specialty: "Player Development",
      photo: coach4,
    },
  ];

  return (
    <div className="coaches">
      <div className="container-class-name">
        <Adsense style={{ display: "block", width: "1200px", height: "280px" }} slot="6098838326" />
      </div>
      <h1>OUR COACHES</h1>
      <div className="coach-list">
        {coachesData.map((coach, index) => (
          <div className="coach" key={index}>
            <img src={coach.photo} alt={coach.name} />
            <div className="coach-details">
              <h2>{coach.name}</h2>
              <p>Qualification: {coach.qualification}</p>
              <p>Experience: {coach.experience}</p>
              <p>Specialty: {coach.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;
