import React from "react";
import "./ChStyle.css";
import coach1 from "../../assets/coach1.jpg";
import coach2 from "../../assets/coach2.jpg";
import coach3 from "../../assets/coach3.jpg";
import coach4 from "../../assets/coach4.png"

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
      photo: coach2,
    },
    {
      name: "Adesenwe Philp",
      qualification: "AFC A License",
      experience: "10 years",
      specialty: "Technical Skills",
      photo: coach3,
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
