import React from "react";
import "./StarWars.css";

function Traits(props) {
  console.log(props);
  return (
    <div className="traits-wrapper">
      <h3>{props.traits.name}</h3>
      <p>
        Height <i className="fa fa-chevron-circle-right" />{" "}
        {props.traits.height}
        cm
      </p>
      <p>
        Weight <i className="fa fa-chevron-circle-right" /> {props.traits.mass}
        lb
      </p>
      <p>
        D.O.B <i className="fa fa-chevron-circle-right" />{" "}
        {props.traits.birth_year}
      </p>
    </div>
  );
}
export default Traits;
