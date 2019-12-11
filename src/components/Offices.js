import React from "react";

function Offices(props) {
  return (
    <div className="countries-offices-first-section">
      {props.CityOffice.map(el => (
        <div className="offices-venues">
          <img src={el.image} />
          <div className="office-description">
          <span>{el.city}</span>
          <button>See openings</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Offices;
