import React from "react";

function Traits(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.traits.name}</h3>
      <p>Height {props.traits.height}</p>
      <p>Weight {props.traits.mass}</p>
      <p>Birth Year {props.traits.mass}</p>
    </div>
  );
}
export default Traits;
