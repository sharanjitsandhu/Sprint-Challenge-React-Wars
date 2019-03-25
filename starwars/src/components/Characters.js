import React from "react";
import Traits from "./Traits";
import "./StarWars.css";

function Characters(props) {
  return (
    <div className="characters-wrapper">
      {props.starwarsChars.map(traits => (
        <Traits traits={traits} key={traits.name} />
      ))}
    </div>
  );
}
export default Characters;
