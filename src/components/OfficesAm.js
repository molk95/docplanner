import React from "react";

function OfficesAm(props) {
  return (
    <div className="countries-offices-second-section">
      {props.CityOfficeAm.map(el => (
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
export default OfficesAm;