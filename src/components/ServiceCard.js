import React from "react";

function ServiceCard(props) {
  return (
   
  <div className="services">
    {props.service.map(el=>(
    <div className= {el.background} >
    <p className="service-per-country">{el.category}</p>
    <h2 className="service-card-title">{el.title}</h2>
    <div className="service-card-content">
    {!el.showOptions?null  : (
      <select className="service-card-switcher">
        {el.showOptions.map(el=>(<option>{el}</option>))}
      
      </select>
    )}
    </div>
    <img className="service-card-image" src={el.image} alt={el.alt} />
  </div>

  ))}
  
  </div>
  )
}
export default ServiceCard;


      
   

