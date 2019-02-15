import React from "react";
import "./StarWars.css";

const Card = props => {
  return (
    <div className="card">
      <h2>{props.attribute.name}</h2>
      <p>Height: {props.attribute.height} cm</p>
      <p>Weight: {props.attribute.mass} lbs</p>
      <p>Hair Color: {props.attribute.hair_color}</p>
      <p>Eye Color: {props.attribute.eye_color}</p>
      <p>Birth Year: {props.attribute.birth_year}</p>
      <p>Gender: {props.attribute.gender}</p>
      <p>Created On: {props.attribute.created}</p>
    </div>
  );
};

export default Card;