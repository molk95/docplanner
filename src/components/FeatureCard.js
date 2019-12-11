import React from "react";

function FeatureCard(props) {
  return (
    <div className="col-numbers">
      {props.FeatureCard.map(el => (
        
            <div className={el.class}>
              <img src={el.icon} />
              <h5>{el.title}</h5>
              <p>{el.description}</p>
            </div>
          
       
      ))}
    </div>
  );
}
export default FeatureCard;
