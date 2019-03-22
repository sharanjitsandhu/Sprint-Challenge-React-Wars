import React from "react";
import Traits from "./Traits";

function Characters(props) {
  return (
    <div>
      {props.starwarsChars.map(traits => (
        <Traits traits={traits} key={traits.name} />
      ))}
    </div>
  );
}
export default Characters;
