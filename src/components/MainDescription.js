import React from "react";
import FeatureCard from "./FeatureCard"

const FeaCard = [
  {
    title: "Leader in 10 countries",
    icon: "https://www.docplanner.com/img/flag.png",
    description:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile ",
      class:"numbers-leader"
  },
  {
    title: "30 million unique patients",
    icon: "https://www.docplanner.com/img/patients.png",
    description: "visit us every month ",
    class:"numbers-leaders"
  },
  {
    title: "1.5 million appointments",
    icon: "https://www.docplanner.com/img/visits.png",
    description: "booked last month",
    class:"numbers-leader"
  },
  {
    title: "2 million active doctors",
    icon: "https://www.docplanner.com/img/doctors.png",
    description: "trust in our solutions ",
    class:"numbers-leaders"
  }
];

function MainDescription(props) {
  return (
    <div className="numbers">
      <div className="stats">
        <div className="main-description">
      {props.Maindesc.map(el => (
        <div>
          <h4>{el.title}</h4>
          <p>{el.paragraph}</p>
        </div>
      ))}
    </div>
    <FeatureCard FeatureCard={FeaCard} />
    </div>
    </div>
  );
}

export default MainDescription;
